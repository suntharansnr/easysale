import React, { useEffect } from 'react'
import Service from '../components/service'
import Counter from '../components/Counter'
import { useDispatch, useSelector } from 'react-redux';
import { STORE_DELETE_RESET } from '../constants/storeConstants';
import { Link, useParams } from 'react-router-dom';
import { listFavorites, listStores } from '../actions/storeActions';
import { base_url } from '../utils';
import Sidebar from '../components/Sidebar';

function Mystores(props) {

    const { pageNumber = 1 } = useParams();

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const storeList = useSelector((state) => state.storeList);
    const { loading, error, stores, page, pages } = storeList;

    console.log(storeList)

    const storeDelete = useSelector((state) => state.storeDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = storeDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successDelete) {
            dispatch({ type: STORE_DELETE_RESET });
        }
        dispatch(
            listStores({ seller: userInfo._id, pageNumber })
        );
    }, [
        dispatch,
        props.history,
        successDelete,
        userInfo._id,
        pageNumber,
    ]);

    return (
        <div>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumb-wrapper">
                                <h2 class="store-title">Dashbord</h2>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home /</a></li>
                                    <li class="current">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-3 page-sidebar">
                            <Sidebar/>
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-9">
                            <div class="page-content">
                                <div class="inner-box">
                                    <div class="dashboard-box">
                                        <h2 class="dashbord-title">My stores</h2>
                                    </div>
                                    <div class="dashboard-wrapper">
                                        <table class="table table-responsive dashboardtable tablemyads">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="checkedall" />
                                                            <label class="custom-control-label" for="checkedall"></label>
                                                        </div>
                                                    </th>
                                                    <th>Logo</th>
                                                    <th>Title</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    stores?.length > 0 && (
                                                        stores.map((row, key) => (
                                                            <tr data-category="active">
                                                                <td>
                                                                    <div class="custom-control custom-checkbox">
                                                                        <input type="checkbox" class="custom-control-input" id="adone" />
                                                                        <label class="custom-control-label" for="adone"></label>
                                                                    </div>
                                                                </td>
                                                                <td class="photo"><img class="img-fluid" src={row.theme ? row.theme.logo : base_url+'/assets/img-not-found.jpg'} alt="" /></td>
                                                                <td data-title="Title">
                                                                    <h3>{row.title}</h3>
                                                                    <span>STRORE ID: {row.id}</span>
                                                                </td>
                                                                <td data-title="Action">
                                                                    <div class="btns-actions">
                                                                        <a class="btn-action btn-view" href="#">
                                                                        <Link to={`/${row.name}`}>
                                                                            <i class="lni-eye"></i>
                                                                        </Link>
                                                                        </a>
                                                                        <a class="btn-action btn-edit" href="#"><i class="lni-pencil"></i></a>
                                                                        <a class="btn-action btn-delete" href="#"><i class="lni-trash"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    )
                                                }
                                            </tbody>
                                        </table>
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

export default Mystores