import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { REPORT_DELETE_RESET } from '../constants/reportConstants';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteReport, listReports } from '../actions/reportActions';
import Sidebar from '../components/Sidebar';
import Swal from 'sweetalert2';
import Breadcrumb from '../components/Breadcrumb';

function Report(props) {

    const { pageNumber = 1 } = useParams();

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const reportList = useSelector((state) => state.reportList);
    const { loading, error, reports, page, pages } = reportList;

    const reportDelete = useSelector((state) => state.reportDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = reportDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successDelete) {
            Swal.fire({
                icon:"success",
                text:'report removed successfuly'
            })
            dispatch({ type: REPORT_DELETE_RESET });
        }
        dispatch(
            listReports({ seller: userInfo._id, pageNumber }),
        );
    }, [
        dispatch,
        props.history,
        successDelete,
        userInfo._id,
        pageNumber,
    ]);


      const deleteHandler = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          dispatch(deleteReport(id));
    }

    const navigate = useNavigate();

    return (
        <div>
            <Breadcrumb activePage="Report"/>
            <div id="content" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-3 page-sidebar">
                            <Sidebar />
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-9">
                            <div class="page-content">
                                <div class="inner-box">
                                    <div class="dashboard-box">
                                        <h2 class="dashbord-title">Reports</h2>
                                    </div>
                                    <div class="dashboard-wrapper">
                                        {
                                            reports?.length > 0 ?
                                        <table class="table table-responsive dashboardtable tablemyads">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkedall" />
                                                            <label class="custom-control-label" for="checkedall"></label>
                                                        </div>
                                                    </th>
                                                    <th>Photo</th>
                                                    <th>Reason</th>
                                                    <th>Email</th>
                                                    <th>Message</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    reports?.length > 0 && (
                                                        reports.map((row, key) => (
                                                            <tr data-category="active" key={key}>
                                                                <td>
                                                                    <div class="custom-control custom-checkbox">
                                                                        <input type="checkbox" class="custom-control-input" id="adone" />
                                                                        <label class="custom-control-label" for="adone"></label>
                                                                    </div>
                                                                </td>
                                                                <td class="photo">{row?.ad?.title}</td>
                                                                <td data-title="Title">
                                                                    <h3>{row?.reason}</h3>
                                                                    <span>Ad ID: {row?.id}</span>
                                                                </td>
                                                                <td data-title="Category">
                                                                    <span class="adcategories">
                                                                    {row?.email}
                                                                    </span>
                                                                </td>
                                                                <td data-title="Price">
                                                                    <h3>{row?.message}</h3>
                                                                </td>
                                                                <td data-title="Action">
                                                                    <div class="btns-actions">
                                                                        <Link to={`/product/` + row?.ad?.id}>
                                                                            <a class="btn-action btn-view" href="#"><i class="lni-eye"></i></a>
                                                                        </Link>
                                                                        <a class="btn-action btn-delete" href="#" onClick={() => deleteHandler(row?.id)}><i class="lni-trash"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        :
                                        <h3 className='text-center text-lg text-warning'>No data found please add..</h3>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Report