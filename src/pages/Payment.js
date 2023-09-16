import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PAYMENT_DELETE_RESET } from '../constants/paymentConstants';
import { Link, useParams } from 'react-router-dom';
import { listPayments } from '../actions/paymentActions';
import { base_url } from '../utils';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';

function Payment(props) {

    const { pageNumber = 1 } = useParams();

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const paymentList = useSelector((state) => state.paymentList);
    const { loading, error, payments, page, pages } = paymentList;

    console.log(paymentList)

    const paymentDelete = useSelector((state) => state.paymentDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = paymentDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successDelete) {
            dispatch({ type: PAYMENT_DELETE_RESET });
        }
        dispatch(
            listPayments({ seller: userInfo._id, pageNumber })
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
            <Breadcrumb activePage="Payments"/>
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
                                        <h2 class="dashbord-title">Payments</h2>
                                    </div>
                                    <div class="dashboard-wrapper">
                                        <table class="table table-responsive dashboardtable tablemyads">
                                            <thead>
                                                <tr>                                                     	 	 	 	 	
                                                    <th>Ad</th>
                                                    <th>User</th>
                                                    <th>Amount</th>
                                                    <th>Payment Method</th>
                                                    <th>Status</th>
                                                    <th>Created At {payments ? payments.length : '..loading'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    payments?.length > 0 && (
                                                        payments.map((row, key) => (
                                                            <tr data-category="active">
                                                                <Link to={`/product/`+row.ad_id}>
                                                                <td class="photo">{row.ad?.title}</td>
                                                                </Link>
                                                                <td data-title="Title">
                                                                    {row.user?.name}
                                                                </td>
                                                                <td data-title="Category"><span class="adcategories">{row.amount}</span></td>
                                                                <td data-title="Price">
                                                                    <h3>{row.payment_method}</h3>
                                                                </td>
                                                                <td data-title="Ad Status">
                                                                    <Link to={`/payment-info/`+row.local_transaction_id}>
                                                                    <span class="adstatus adstatusactive">{row.status}</span>
                                                                    </Link>
                                                                </td>
                                                                <td data-title="Action">
                                                                    {row.created_at}
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

export default Payment