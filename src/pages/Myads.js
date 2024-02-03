import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { PRODUCT_DELETE_RESET } from '../constants/productConstants';
import { listAdminProducts, listProducts } from '../actions/productActions';
import { base_url } from '../utils';
import Sidebar from '../components/Sidebar';
import getStatus from '../Functions/getStatus';
import { listDashboard } from '../actions/dashboardActions';
import Breadcrumb from '../components/Breadcrumb';

export default function Myads(props) {

    const navigate = useNavigate();

    const {
        status = 'all',
        pageNumber = 1,
    } = useParams();

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, links } = productList;

    const dashboardList = useSelector((state) => state.dashboardList);
    const { loading: loadingDashboard, error: errorDashboard, metrics } = dashboardList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            listDashboard()
        )
        dispatch(
            listAdminProducts({ ad_status: status, pageNumber }),
        );
    }, [
        dispatch,
        status,
        pageNumber,
    ]);

    const getFilterUrl = (filter) => {
        const filterPage = filter.page || pageNumber;
        const filterStatus = filter.status || status;
        return `/my-ads/status/${filterStatus}/pageNumber/${filterPage}`;
    };

    return (
        <div>
            <Breadcrumb activePage="My ads"/>
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
                                        <h2 class="dashbord-title">Myads</h2>
                                    </div>
                                    <div class="dashboard-wrapper">
                                        <nav class="nav-table">
                                            <ul>
                                                <li class="active">
                                                    <Link to={'/my-ads'}>
                                                        All Ads ({metrics ? metrics.total_ads : 'loading...'})
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/my-ads/status/1'}>
                                                        Approved ({metrics ? metrics.approved_ads : 'loading...'})
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/my-ads/status/0'}>
                                                        Pending ({metrics ? metrics.pending_ads : 'loading...'})
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/my-ads/status/2'}>
                                                        Rejected ({metrics ? metrics.blocked_ads : 'loading...'})
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                        {
                                            products?.length > 0 ?
                                        <>
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
                                                            <tr data-category="active">
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
                                                                <td data-title="Ad Status"><span class="adstatus adstatusactive">{getStatus(row.status)}</span></td>
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
                                                                        <a class="btn-action btn-delete" href="#"><i class="lni-trash"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        <div class="pagination-bar">
                                            <nav>
                                                <ul class="pagination justify-content-center">
                                                    {
                                                        links?.length > 3 && (
                                                            links.map((link, key) => 
                                                                (
                                                                    link.url === null ?
                                                                    (<li class="page-item">
                                                                    <Link className={link.active ? 'page-link active' : 'page-link'}
                                                                        key={key}
                                                                        to={getFilterUrl({ page: key })}
                                                                    >
                                                                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                                                    </Link>
                                                                    </li>
                                                                    )
                                                                    :
                                                                    (                                                                    
                                                                    <li class="page-item">
                                                                                <Link className={link.active ? 'page-link active' : 'page-link'}
                                                                                    key={key}
                                                                                    to={getFilterUrl({ page: key })}
                                                                                >
                                                                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                                                                </Link>
                                                                    </li>
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    }
                                                </ul>
                                            </nav>
                                        </div>
                                        </>
                                        :
                                        <>
                                        <h3 className='text-center text-lg text-warning'>No data found please add..</h3>
                                        </>
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
