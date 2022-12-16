import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { gettheme } from '../actions/themeActions';
import { signout } from '../actions/userActions';

function Sidebar() {

    const themeDetails = useSelector((state) => state.themeDetails);
    const { themeInfo } = themeDetails;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(gettheme());
    }, [dispatch]);

    const signoutHandler = () => {
        dispatch(signout());
      };

    return (
        <aside>
        <div class="sidebar-box">
            <div class="user">
                <figure>
                    <a href="#"><img src="assets/img/author/img1.jpg" alt="" /></a>
                </figure>
                <div class="usercontent">
                    <h3>{userInfo['data']['name']}!</h3>
                    <h4>{userInfo['data']['role']}</h4>
                </div>
            </div>
            <nav class="navdashboard">
                <ul>
                    <li>
                        <Link to={`/dashboard`} class="active">
                            <i class="lni-dashboard"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/profile`}>
                            <i class="lni-cog"></i>
                            <span>Profile Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/my-ads`}>
                        <a href="account-myads.html">
                            <i class="lni-layers"></i>
                            <span>My Ads</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/membership-packages`}>
                        <a href="account-myads.html">
                            <i class="lni-layers"></i>
                            <span>Membership packages</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        <a href="offermessages.html">
                            <i class="lni-envelope"></i>
                            <span>Offers/Messages</span>
                        </a>
                    </li>
                    <li>
                        <Link to={`/payments`}>
                            <i class="lni-wallet"></i>
                            <span>Payments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/favorite`}>
                            <i class="lni-heart"></i>
                            <span>My Favourites</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/my-stores`}>
                            <i class="lni-heart"></i>
                            <span>My Stores</span>
                        </Link>
                    </li>
                    <li>
                        <a href="privacy-setting.html">
                            <i class="lni-star"></i>
                            <span>Privacy Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={signoutHandler}>
                            <i class="lni-enter"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="widget">
            <h4 class="widget-title">Advertisement</h4>
            <div class="add-box">
                <img class="img-fluid" src="assets/img/img1.jpg" alt="" />
            </div>
        </div>
    </aside>
    )
}

export default Sidebar