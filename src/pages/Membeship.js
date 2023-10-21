import React, { useEffect, useState } from 'react'
import Service from '../components/service'
import Counter from '../components/Counter'
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_DELETE_RESET } from '../constants/productConstants';
import { Link, useParams } from 'react-router-dom';
import { listPackages } from '../actions/packageActions';
import { base_url } from '../utils';
import Sidebar from '../components/Sidebar';
import Pricing from '../components/pricing';
import Breadcrumb from '../components/Breadcrumb';
import axios from 'axios';

export default function Membership(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const packageList = useSelector((state) => state.packageList);
    const { loading, error, packages } = packageList;

    const dispatch = useDispatch();

    const [CurrentMembership, setCurrentMembership] = useState([])

    useEffect(() => {
        fetchCurrentMembership()
    }, [])

    const fetchCurrentMembership = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/memberships/current`,
            {
             headers: { Authorization: `Bearer ${userInfo["data"]["token"]}` },
            }
            ).then(({ data }) => {
            setCurrentMembership(data['data']);
        })
    }

    useEffect(() => {
        dispatch(
            listPackages()
        );
    }, [
        dispatch,
    ]);

    return (
        <div>
            <Breadcrumb activePage="Packages"/>
            <div id="content" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-3 page-sidebar">
                            <Sidebar />
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-9">
                            {
                              CurrentMembership.success_payment_count > 0 ? 
                              <>
                              <div className='card shadow'>
                              <h3>Your membership will expires in {CurrentMembership.membership_expires_in} days</h3>
                              </div>
                              </> 
                              : <Pricing  packages={packages}/>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
