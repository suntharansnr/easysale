import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_DELETE_RESET } from '../constants/productConstants';
import { Link, useParams } from 'react-router-dom';
import { listFavorites } from '../actions/productActions';
import { base_url } from '../utils';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';

function Favorite(props) {

    const { pageNumber = 1 } = useParams();

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const favoriteList = useSelector((state) => state.favoriteList);
    const { loading, error, products, page, pages } = favoriteList;

    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successDelete) {
            dispatch({ type: PRODUCT_DELETE_RESET });
        }
        dispatch(
            listFavorites({ seller: userInfo._id, pageNumber })
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
            <Breadcrumb activePage="Favorite"/>
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
                                        <h2 class="dashbord-title">Favorite ads</h2>
                                    </div>
                                    <div class="dashboard-wrapper">
                                        <table class="table table-responsive dashboardtable tablemyads">
                                            <thead>
                                                <tr>
                                                    <th>Photo</th>
                                                    <th>Title</th>
                                                    <th>Category</th>
                                                    <th>Price</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products?.length > 0 && (
                                                        products.map((row, key) => (
                                                            <tr data-category="active">
                                                                <td class="photo"><img class="img-fluid" src={row.feature_img ? base_url+`/uploads/images/thumbs/${row.feature_img['media_name']}` : base_url+'/assets/img-not-found.jpg'} alt="" /></td>
                                                                <td data-title="Title">
                                                                    <h3>{row.title}</h3>
                                                                    <span>Ad ID: {row.id}</span>
                                                                </td>
                                                                <td data-title="Category"><span class="adcategories">{row.category['category_name_en']} &amp; {row.sub_category['category_name_en']}</span></td>
                                                                <td data-title="Price">
                                                                    <h3>{row.price}$</h3>
                                                                </td>
                                                                <td data-title="Action">
                                                                    <div class="btns-actions">
                                                                        <Link to={`/product/` + row.id}>
                                                                        <a class="btn-action btn-view" href="#"><i class="lni-eye"></i></a>
                                                                        </Link>
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

export default Favorite