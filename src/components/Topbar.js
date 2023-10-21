import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { gettheme } from '../actions/themeActions';
import { signout } from '../actions/userActions';

function Topbar() {

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
        <div className="top-bar">
                <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-5 col-sm-12 col-xs-12">
                               { themeInfo ?
                                <ul className="list-inline">
                                    <li><i className="lni-phone"></i> {themeInfo['site_phone_number']} </li>
                                    <li><i className="lni-envelope"></i> {themeInfo['email_address']} </li>
                                </ul>
                               :
                               <p>loading........</p>
                               }
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12">
                                { themeInfo ?
                                <div className="roof-social float-right">
                                    <a className="facebook" href={themeInfo['facebook_url']}><i className="lni-facebook-filled"></i></a>
                                    <a className="twitter" href="#"><i className="lni-twitter-filled"></i></a>
                                    <a className="instagram" href="#"><i className="lni-instagram-filled"></i></a>
                                    <a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a>
                                    <a className="google" href="#"><i className="lni-google-plus"></i></a>
                                </div>
                            :
                            <p>loading........</p>
                        }
                                {
                                    userInfo ?
                                        <div className="header-top-right float-right">
                                            <Link to={`/dashboard`} className="header-top-button">
                                            <i className="lni-lock"></i> Dashboard |
                                            </Link>
                                            <a href="login.html" onClick={signoutHandler} className="header-top-button"><i className="lni-unlock"></i></a>
                                        </div>
                                        :
                                        <div className="header-top-right float-right">
                                            <Link to={`/login`} className="header-top-button">
                                            <i className="lni-lock"></i> Log In |
                                            </Link>
                                            <Link to={`/register`} className="header-top-button">
                                            <i className="lni-pencil"></i> Register
                                            </Link>
                                        </div>

                                }
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Topbar