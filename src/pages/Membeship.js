import React, { useEffect } from 'react'
import Service from '../components/service'
import Counter from '../components/Counter'
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_DELETE_RESET } from '../constants/productConstants';
import { Link, useParams } from 'react-router-dom';
import { listPackages } from '../actions/packageActions';
import { base_url } from '../utils';
import Sidebar from '../components/Sidebar';
import Pricing from '../components/pricing';

export default function Membership(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const packageList = useSelector((state) => state.packageList);
    const { loading, error, packages } = packageList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            listPackages()
        );
    }, [
        dispatch,
    ]);

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
                            <Pricing  packages={packages}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
