import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPackage } from '../actions/packageActions';
import { PACKAGE_CREATE_RESET } from '../constants/packageConstants';

function Pricing(packages) {

    const navigate = useNavigate();

    const mpackages = packages.packages ? packages.packages : '';

    const [paymentMethod, setPaymentMethod] = useState('payhere');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(createPackage(
        {
            pack_id : e.target[0].value,
            amount : e.target[1].value,
            payment_method : paymentMethod,
        }
      ));
    //   props.history.push('/placeorder');
    };

    const packageCreate = useSelector((state) => state.packageCreate);
    const { loading, success, order } = packageCreate;

    console.log(packageCreate);

    useEffect(() => {
        if (success) {
          navigate(`/order/${order.local_transaction_id}`);
          dispatch({ type: PACKAGE_CREATE_RESET });
        }
      }, [dispatch, order, navigate, success]);

    return (
        <section id="pricing-table" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title">Pricing Plan</h2>
                    </div>
                    {
                        mpackages.length > 0 ?
                            mpackages.map((row, i) => (
                                <div className="col-lg-4 col-md-6 col-xs-12" key={i}>
                                    <div className="table">
                                        <div className="icon">
                                            <i className="lni-gift"></i>
                                        </div>
                                        <div className="pricing-header">
                                            <p className="price-value">$29</p>
                                        </div>
                                        <div className="title">
                                            <h3>Basic</h3>
                                        </div>
                                        <ul className="description">
                                            <li>Free ad posting</li>
                                            <li>No Featured ads availability</li>
                                            <li>Access to limited features</li>
                                            <li>For 30 days</li>
                                            <li>100% Secure!</li>
                                        </ul>
                                        <form onSubmit={submitHandler}>
                                            <input type="hidden" name="pack_id" value={row.id}/>
                                            <input type="hidden" name="amount" value={row.price}/>
                                            <div className="form-group {{ $errors->has('payment_method')? 'has-error':'' }}">
                                                <label for="payment_method" className="control-label">@lang('app.payment_method')</label>
                                                <div className="">
                                                    <select className="form-control select2NoSearch" name="payment_method" id="payment_method">
                                                        <option value="payhere">Payhere</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <h1>{row.duration} Days</h1>
                                            <button className="btn btn-common" type='submit'>{row.price} Purchase</button>
                                        </form>
                                    </div>
                                </div>
                            )) : 'loading...'
                    }
                </div>
            </div >
        </section >
    )
}

export default Pricing