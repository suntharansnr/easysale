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
                        <section class="footer-Content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                                        <div class="widget">
                                            <div class="footer-logo"><img src="assets/img/logo.png" alt="" /></div>
                                            <div class="textwidget">
                                                <p>{themeInfo['footer_about_us']}</p>
                                            </div>
                                            <ul class="mt-3 footer-social">
                                                <li><a class="facebook" href="#"><i class="lni-facebook-filled"></i></a></li>
                                                <li><a class="twitter" href="#"><i class="lni-twitter-filled"></i></a></li>
                                                <li><a class="linkedin" href="#"><i class="lni-linkedin-fill"></i></a></li>
                                                <li><a class="google-plus" href="#"><i class="lni-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                                        <div class="widget">
                                            <h3 class="block-title">Quick Link</h3>
                                            <ul class="menu">
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
                                    <div class="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                                        <div class="widget">
                                            <h3 class="block-title">Contact Info</h3>
                                            <ul class="contact-footer">
                                                <li>
                                                    <strong><i class="lni-phone"></i></strong><span>{themeInfo['site_phone_number']}</span>
                                                </li>
                                                <li>
                                                    <strong><i class="lni-envelope"></i></strong><span>{themeInfo['email_address']}</span>
                                                </li>
                                                <li>
                                                    <strong><i class="lni-map-marker"></i></strong><span><a href="#">{themeInfo['footer_address']}</a></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div id="copyright">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="site-info text-center">
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