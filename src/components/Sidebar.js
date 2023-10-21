import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  
  useEffect(() => {
    if (userInfo.loading) {
      // User data is still loading; you can show a loading indicator or handle it differently.
    } else if (!(userInfo.data)) {
      // User data is available but empty; redirect to login.
      navigate('/login');
    }
  }, [userInfo]);

    const location = useLocation();
  
    return (
        <aside>
        <div className="sidebar-box">
            <div className="user">
                <figure>
                    <a href="#"><img src="assets/img/author/img1.jpg" alt="" /></a>
                </figure>
                <div className="usercontent">
                    {
                        userInfo.data ? 
                        <>
                        <h3>{userInfo['data']['name']}!</h3>
                        <h4>{userInfo['data']['role']}</h4>
                        </>
                        : ''
                    }
                </div>
            </div>
            <nav className="navdashboard">
                <ul>
                    <li>
                        <Link to={`/dashboard`} className={location.pathname === '/dashboard' ? 'active' : ''}>
                            <i className="lni-dashboard"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/profile`} className={location.pathname === '/profile' ? 'active' : ''}>
                            <i className="lni-cog"></i>
                            <span>Profile Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/my-ads`} className={location.pathname === '/my-ads' ? 'active' : ''}>
                            <i className="lni-layers"></i>
                            <span>My Ads</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/membership-packages`} className={location.pathname === '/membership-packages' ? 'active' : ''}>
                            <i className="lni-layers"></i>
                            <span>Membership packages</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/reports`} className={location.pathname === '/reports' ? 'active' : ''}>
                            <i className="lni-envelope"></i>
                            <span>Offers/Messages</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/payments`} className={location.pathname === '/payments' ? 'active' : ''}>
                            <i className="lni-wallet"></i>
                            <span>Payments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/favorite`} className={location.pathname === '/favorite' ? 'active' : ''}>
                            <i className="lni-heart"></i>
                            <span>My Favourites</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/my-stores`} className={location.pathname === '/my-stores' ? 'active' : ''}>
                            <i className="lni-heart"></i>
                            <span>My Stores</span>
                        </Link>
                    </li>
                    <li>
                        <a href="privacy-setting.html" className={location.pathname === '/privacy' ? 'active' : ''}>
                            <i className="lni-star"></i>
                            <span>Privacy Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={signoutHandler}>
                            <i className="lni-enter"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="widget">
            <h4 className="widget-title">Advertisement</h4>
            <div className="add-box">
                <img className="img-fluid" src="assets/img/img1.jpg" alt="" />
            </div>
        </div>
    </aside>
    )
}

export default Sidebar