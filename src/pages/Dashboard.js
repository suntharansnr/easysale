import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_DELETE_RESET } from '../constants/productConstants';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteProduct, listAdminProducts } from '../actions/productActions';
import { base_url } from '../utils';
import Sidebar from '../components/Sidebar';
import { listDashboard } from '../actions/dashboardActions';
import Swal from 'sweetalert2';
import Breadcrumb from '../components/Breadcrumb';

function Dashboard(props) {

    const { pageNumber = 1 } = useParams();

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    const dashboardList = useSelector((state) => state.dashboardList);
    const { loading: loadingDashboard, error: errorDashboard, metrics } = dashboardList;

    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            listDashboard()
        );
        if (successDelete) {
            Swal.fire({
                icon:"success",
                text:'ad removed successfuly'
            })
            dispatch({ type: PRODUCT_DELETE_RESET });
        }
        dispatch(
            listAdminProducts({ seller: userInfo._id, pageNumber }),
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

          dispatch(deleteProduct(id));
    }

    const navigate = useNavigate();

    return (
        <div>
            <Breadcrumb activePage="Dashboard"/>
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
                                        <h2 class="dashbord-title">Dashboard</h2>
                                    </div>
                                    <div class="dashboard-wrapper">
                                        {metrics ?
                                            <div class="dashboard-sections">
                                                <div class="row">
                                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                                                        <div class="dashboardbox">
                                                            <div class="icon"><i class="lni-write"></i></div>
                                                            <div class="contentbox">
                                                                <h2><a href="#">Approved ads</a></h2>
                                                                <h3>{metrics.approved_ads}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                                                        <div class="dashboardbox">
                                                            <div class="icon"><i class="lni-add-files"></i></div>
                                                            <div class="contentbox">
                                                                <h2><a href="#">Pending Ads</a></h2>
                                                                <h3>{metrics.pending_ads}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                                                        <div class="dashboardbox">
                                                            <div class="icon"><i class="lni-support"></i></div>
                                                            <div class="contentbox">
                                                                <h2><a href="#">Blocked ads</a></h2>
                                                                <h3>{metrics.blocked_ads}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : 'loading'
                                        }
                                        {
                                            products?.length > 0 ?
                                        <table className="table table-responsive dashboardtable tablemyads">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkedall" />
                                                            <label class="custom-control-label" for="checkedall"></label>
                                                        </div>
                                                    </th>
                                                    <th>Photo</th>
                                                    <th>Title</th>
                                                    <th>Category</th>
                                                    <th>Ad Status</th>
                                                    <th>Price</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products?.length > 0 && (
                                                        products.map((row, key) => (
                                                            <tr data-category="active" key={key}>
                                                                <td>
                                                                    <div class="custom-control custom-checkbox">
                                                                        <input type="checkbox" class="custom-control-input" id="adone" />
                                                                        <label class="custom-control-label" for="adone"></label>
                                                                    </div>
                                                                </td>
                                                                <td class="photo"><img class="img-fluid" src={row.feature_img ? base_url + `/uploads/images/thumbs/${row.feature_img['media_name']}` : base_url + '/assets/img-not-found.jpg'} alt="" /></td>
                                                                <td data-title="Title">
                                                                    <h3>{row.title}</h3>
                                                                    <span>Ad ID: {row.id}</span>
                                                                </td>
                                                                <td data-title="Category">
                                                                    <span class="adcategories">
                                                                    {row.category ? row.category['category_name_en'] : ''} &amp; {row.sub_category ? row.sub_category['category_name_en'] : ''}
                                                                    </span>
                                                                </td>
                                                                <td data-title="Ad Status"><span class="adstatus adstatusactive">active</span></td>
                                                                <td data-title="Price">
                                                                    <h3>{row.price}$</h3>
                                                                </td>
                                                                <td data-title="Action">
                                                                    <div class="btns-actions">
                                                                        <Link to={`/product/` + row.id}>
                                                                            <a class="btn-action btn-view" href="#"><i class="lni-eye"></i></a>
                                                                        </Link>
                                                                        <a class="btn-action btn-edit" href="#" onClick={() =>
                                                                            navigate(`/product/edit/${row.id}`)
                                                                        }><i class="lni-pencil"></i></a>
                                                                        <a class="btn-action btn-delete" href="#" onClick={() => deleteHandler(row.slug)}><i class="lni-trash"></i></a>
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

export default Dashboard