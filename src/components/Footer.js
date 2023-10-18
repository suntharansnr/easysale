import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gettheme } from '../actions/themeActions';

function Footer() {

    const themeDetails = useSelector((state) => state.themeDetails);
    const { themeInfo } = themeDetails;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(gettheme());
    }, [dispatch]);


    return (
        <footer>
            {
                themeInfo ?
                    <>
                        <section className="footer-Content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                                        <div className="widget">
                                            <div className="footer-logo"><img src="assets/img/logo.png" alt="" /></div>
                                            <div className="textwidget">
                                                <p>{themeInfo['footer_about_us']}</p>
                                            </div>
                                            <ul className="mt-3 footer-social">
                                                <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                                                <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                                                <li><a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a></li>
                                                <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                                        <div className="widget">
                                            <h3 className="block-title">Quick Link</h3>
                                            <ul className="menu">
                                                <li><a href="#">- About Us</a></li>
                                                <li><a href="#">- Blog</a></li>
                                                <li><a href="#">- Events</a></li>
                                                <li><a href="#">- Shop</a></li>
                                                <li><a href="#">- FAQ's</a></li>
                                                <li><a href="#">- About Us</a></li>
                                                <li><a href="#">- Blog</a></li>
                                                <li><a href="#">- Events</a></li>
                                                <li><a href="#">- Shop</a></li>
                                                <li><a href="#">- FAQ's</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                                        <div className="widget">
                                            <h3 className="block-title">Contact Info</h3>
                                            <ul className="contact-footer">
                                                <li>
                                                    <strong><i className="lni-phone"></i></strong><span>{themeInfo['site_phone_number']}</span>
                                                </li>
                                                <li>
                                                    <strong><i className="lni-envelope"></i></strong><span>{themeInfo['email_address']}</span>
                                                </li>
                                                <li>
                                                    <strong><i className="lni-map-marker"></i></strong><span><a href="#">{themeInfo['footer_address']}</a></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div id="copyright">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="site-info text-center">
                                            <p><a target="_blank" href="https://templateshub.net">{themeInfo['site_name']}</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <p>loading........</p>
            }
        </footer>
    )
}

export default Footer