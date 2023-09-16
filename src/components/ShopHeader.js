import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Topbar from './Topbar'
import { useLocation } from "react-router-dom"

function ShopHeader() {
    const curLocation = useLocation();
    return (
        <>
            <div
                className="store-name  background-aqu display-flex align-items-center justify-content-between  pt-3 pb-4 ">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium font-3-5 ms-4 cursor-p  css-i4bv87-MuiSvgIcon-root"
                    focusable="false" viewBox="0 0 24 24" aria-hidden="true"
                    data-testid="MenuIcon" id="store-page-menu">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <h1 className="text-center ms-auto me-auto">plusiune devs</h1>
            </div>
            <div className="sc-furwcr hxcykW background-aqu " id="store-nav-deskstop">
                <nav className="display-flex justify-content-center align-items-center    ">
                    <a activeclassNamename="active"
                        className="ms-3  a font-1-7  ps-2 pe-2 text-color-grey-ori active"
                        href="http://localhost/laravelprojects/classNameified/directdeals/store1"
                        aria-current="page">Home</a>
                    <a activeclassNamename="active"
                        className="ms-3  a font-1-7  ps-2 pe-2 text-color-grey-ori"
                        href="http://localhost/laravelprojects/classNameified/directdeals/store1/listing">AllAds</a>
                    <a activeclassNamename="active"
                        className="ms-3  a font-1-7  ps-2 pe-2 text-color-grey-ori"
                        href="http://localhost/laravelprojects/classNameified/directdeals/store1/services">Services</a>
                    <a activeclassNamename="active"
                        className="ms-3  a font-1-7  ps-2 pe-2 text-color-grey-ori"
                        href="http://localhost/laravelprojects/classNameified/directdeals/store1/contact-us">Contact</a>
                    <a activeclassNamename="active"
                        className="ms-3  a font-1-7  ps-2 pe-2 text-color-grey-ori"
                        href="http://localhost/laravelprojects/classNameified/directdeals/store1/page/privacy-policy">privacyPolicy</a>
                    <a activeclassNamename="active"
                        className="ms-3  a font-1-7  ps-2 pe-2 text-color-grey-ori"
                        href="http://localhost/laravelprojects/classNameified/directdeals/store1/page/about-us">AboutUs</a>
                    <a className="undefined a   h-100 " href="/store"><img className=" ms-3 w-50  "
                        src="http://localhost/laravelprojects/classNameified/directdeals/storage/images/logo/95041649224209.png"
                        alt="" /></a>
                </nav>
            </div>
        </>
    )
}

export default ShopHeader