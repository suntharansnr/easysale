import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deliverOrder, detailsOrder, payOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";
import Breadcrumb from "../components/Breadcrumb";

export default function OrderScreen(props) {
  const { orderId } = useParams();
  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API_URL}/api/config/paypal`
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, sdkReady, successPay, order]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div className="">
      <Breadcrumb activePage="Payment"/>
      <section className="login section-padding">
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-lg-5 col-md-12 col-xs-12">
      <div className="login-form login-area">
      <h3>Order {order._id}</h3>
      <form method="POST" className="login-form" action="https://sandbox.ipay.lk/ipg/checkout">
        <input
          type="hidden"
          name="merchantWebToken"
          value="eyJhbGciOiJIUzUxMiJ9.eyJtaWQiOiIwMDAwMDI4NSJ9.v5mFMYPf6FNkY4EVUhz2aXoV_RPinkb3tGN_HdEmtkIY5gdJNgoVWwpzFmrkDopTHTUkhLhmS3ZSMXrsir352Q"
        />
        <input type="hidden" name="orderId" value="OID123456" />
        <input type="hidden" name="orderDescription" value="My Order" />
        <input
          type="hidden"
          name="returnUrl"
          value="http://mywebsite.com/return?orderId=OID123456"
        />
        <input
          type="hidden"
          name="cancelUrl"
          value="http://mywebsite.com/cancel?orderId=OID123456"
        />
        <table className="table table-stripped">
          <tr>
            <td>Total Amount</td>
            <td>:</td>
            <td>
              <input type="text" name="totalAmount" value="750"  className="form-control"/>
            </td>
          </tr>
          <tr>
            <td>Customer Name </td>
            <td>:</td>
            <td>
              <input type="text" name="customerName" value="Ravindu Fernando"  className="form-control"/>
            </td>
          </tr>
          <tr>
            <td>Customer Mobile</td>
            <td>:</td>
            <td>
              <input type="text" name="customerPhone" value="0701234567"  className="form-control"/>
            </td>
          </tr>
          <tr>
            <td>Customer Email</td>
            <td>:</td>
            <td>
              <input
                type="text"
                name="customerEmail"
                value="myemail@mail.com" className="form-control"
              />
            </td>
          </tr>
        </table>
        <input type="submit" value="Checkout Now" className="btn btn-success"/>
      </form>
      </div>
      </div>
      </div>
      </div>
      </section>
    </div>
  );
}
