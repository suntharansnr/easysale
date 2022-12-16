import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PAYMENT_DELETE_RESET } from '../constants/paymentConstants';
import { Link, useParams } from 'react-router-dom';
import { detailsPayment, listPayments } from '../actions/paymentActions';
import { base_url } from '../utils';
import Sidebar from '../components/Sidebar';

function PaymentInfo() {

    const dispatch = useDispatch();

    const { productId } = useParams();
  
    const paymentDetails = useSelector((state) => state.paymentDetails);
    const { loading, error, payment } = paymentDetails;
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
  
    useEffect(() => {
      dispatch(detailsPayment(productId));
    }, [dispatch, productId]);

    return (
        <div>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumb-wrapper">
                                <h2 class="product-title">Dashbord</h2>
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
                            <Sidebar />
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-9">
                            <div class="page-content">
                                <div class="inner-box">
                                    <div class="dashboard-box">
                                        <h2 class="dashbord-title">Payments</h2>
                                    </div>
                                    <div class="dashboard-wrapper">
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-sx-12">
                                                <div class="order-details">
                                                    <div class="dashboardboxtitle">
                                                        <h2>Your Order</h2>
                                                    </div>
                                                    <div class="order_review mb-3">
                                                        <table class="table table-responsive dashboardtable table-review-order">
                                                            <thead>
                                                                <tr>
                                                                    <th class="product-name">Ad</th>
                                                                    <th class="product-total">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><p>User Name</p></td>
                                                                    <td><p class="price">{payment?.user.name}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Amount</p></td>
                                                                    <td><p class="price">{payment?.amount}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Payment Method</p></td>
                                                                    <td><p class="price">{payment?.payment_method}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Status</p></td>
                                                                    <td><p class="price">{payment?.status}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Currency</p></td>
                                                                    <td><p class="price">{payment?.currency}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Payment token</p></td>
                                                                    <td><p class="price">{payment?.token_id}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Payer email</p></td>
                                                                    <td><p class="price">{payment?.payer_email}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Description</p></td>
                                                                    <td><p class="price">{payment?.description}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Transaction ID</p></td>
                                                                    <td><p class="price">{payment?.local_transaction_id}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><p>Payment completed at</p></td>
                                                                    <td><p class="price">{payment?.created_at}</p></td>
                                                                </tr>
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
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PaymentInfo