import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gettheme } from '../actions/themeActions';

function ShopFooter() {

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
                        <footer className="sc-fFeiMQ kimBkk  background-yellow">
                            <div className="Footer-wrapper row  gy-5 pt-5  ">
                                <div className="col-lg-6">
                                    <div className="sc-ksdxgE dDyNMD mt-4  footer-detail-item display-flex align-items-center">
                                        <div className="font-1-6 w-25 fw-bold">Address</div>
                                        <div className="ms-2 w-75 mt-2 ">
                                            <div className="font-1-6   ">jaffna</div>
                                        </div>
                                    </div>
                                    <div className="sc-ksdxgE dDyNMD mt-4  footer-detail-item display-flex align-items-center">
                                        <div className="font-1-6 w-25 fw-bold">E-mail</div>
                                        <div className="ms-2 w-75 mt-2 ">
                                            <div className="font-1-6 ">raj@dxdy.tech</div>
                                        </div>
                                    </div>
                                    <div className="sc-ksdxgE dDyNMD mt-4  footer-detail-item display-flex align-items-center">
                                        <div className="font-1-6 w-25 fw-bold">Mobile</div>
                                        <div className="ms-2 w-75 mt-2 ">
                                            <div className="font-1-6 ">0773956880</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15849.76750389885!2d80.77686055000001!3d6.7158074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1587663928635!5m2!1sen!2slk" allowfullscreen="" aria-hidden="false" tabindex="0" width="600" height="450" frameborder="0"></iframe></div>
                                <div className=" text-color-ccc col text-center ">© plusiune devs. All rights reserved.<span> | </span>Copyright © 2022 Oneradio</div>
                            </div>
                        </footer>
                    </>
                    :
                    <p>loading........</p>
            }
        </footer>
    )
}

export default ShopFooter