import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';

function Navbar() {

  const [showNav, setshowNav] = useState(false);

  const dispatch = useDispatch();
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top scrolling-navbar">
      <div className="container">

        <div className="navbar-header">
          <div className="slicknav_menu">
            <liner aria-haspopup="true" tabIndex="0" className="slicknav_btn slicknav_collapsed" onClick={() => setshowNav(!showNav)}>
              <span className="slicknav_menutxt"></span>
              <span className="slicknav_icon slicknav_no-text">
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
              </span>
            </liner>
            <DIV showNav={showNav}>
              <ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu">
                <li>
                {
                                    userInfo ?
                                        <>
                                        <a role="menuitem" tabindex="-1">
                                            <Link to={`/dashboard`}>
                                             Dashboard
                                            </Link>
                                        </a>
                                        <a onClick={signoutHandler} role="menuitem" tabindex="-1"> 
                                        Logout
                                        </a>
                                        </>
                                        :
                                        <>
                                            <a role="menuitem" tabindex="-1">
                                            <Link to={`/login`}>
                                            Log In
                                            </Link>
                                            </a>
                                            <a role="menuitem" tabindex="-1">
                                            <Link to={`/register`}>
                                              Register
                                            </Link>  
                                            </a>
                                        </>

                                }
                  <a role="menuitem" tabindex="-1">
                    <Link to={`/`}>
                      Home
                    </Link>
                  </a>
                  <a role="menuitem" tabindex="-1">
                    <Link to={`/about-us`}>
                      About us
                    </Link>
                  </a>
                  <a role="menuitem" tabindex="-1">
                    <Link to={`/services`}>
                      Services
                    </Link>
                  </a>
                  <a role="menuitem" tabindex="-1">
                    <Link to={`/packages`}>
                      Packages
                    </Link>
                  </a>
                  <a role="menuitem" tabindex="-1">
                    <Link to={`/testimonial`}>
                      Testimonial
                    </Link>
                  </a>
                  <a role="menuitem" tabindex="-1">
                    <Link to={`/faq`}>
                      Faq
                    </Link>
                  </a>
                  <a role="menuitem" tabindex="-1">
                    <Link to={`/contact`}>
                      Contact
                    </Link>
                  </a>
                  <a role="menuitem" tabindex="-1">
                    <Link to={`/product/create`}>
                      <a className="btn btn-common" href="post-ads.html"><i className="lni-pencil-alt"></i> Post an Ad</a>
                    </Link>
                  </a>
                </li>
              </ul>
            </DIV>
          </div>
          <button id="mobileNav-open-icon" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            <span className="lni-menu"></span>
            <span className="lni-menu"></span>
            <span className="lni-menu"></span>
          </button>
          <a href="index-2.html" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></a>
        </div>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mr-auto w-100 justify-content-center">
            <li className="nav-item">
              <a className="nav-link">
                <Link to={`/`}>
                  Home
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to={`/about-us`}>
                  About us
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to={`/services`}>
                  Services
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to={`/packages`}>
                  Packages
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to={`/testimonial`}>
                  Testimonial
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to={`/faq`}>
                  Faq
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to={`/contact`}>
                  Contact
                </Link>
              </a>
            </li>
          </ul>
          <div className="post-btn">
            <Link to={`/product/create`}>
              <a className="btn btn-common" href="post-ads.html"><i className="lni-pencil-alt"></i> Post an Ad</a>
            </Link>
          </div>
        </div>
      </div>

      <ul className="mobile-menu">
        <li>
          <a className="active" href="#">
            Home
          </a>
          <ul className="dropdown">
            <li><a className="active" href="index-2.html">Home 1</a></li>
            <li><a href="index-3.html">Home 2</a></li>
          </ul>
        </li>
        <li>
          <a href="category.html">Categories</a>
        </li>
        <li>
          <a href="#">
            Listings
          </a>
          <ul className="dropdown">
            <li><a href="adlistinggrid.html">Ad Grid</a></li>
            <li><a href="adlistinglist.html">Ad Listing</a></li>
            <li><a href="ads-details.html">Listing Detail</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul className="dropdown">
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="ads-details.html">Ads Details</a></li>
            <li><a href="post-ads.html">Ads Post</a></li>
            <li><a href="pricing.html">Packages</a></li>
            <li><a href="testimonial.html">Testimonial</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="404.html">404</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Blog</a>
          <ul className="dropdown">
            <li><a href="blog.html">Blog - Right Sidebar</a></li>
            <li><a href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
            <li><a href="blog-grid-full-width.html"> Blog full width </a></li>
            <li><a href="single-post.html">Blog Details</a></li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contact Us</a>
        </li>
      </ul>

    </nav>
  )
}

const DIV = styled.div`    
    display: ${props => props.showNav ? 'block' : 'none'};
`;
export default Navbar