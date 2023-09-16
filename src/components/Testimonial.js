import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Loader from './UI/Loader/Loader';

function Testimonial() {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetchTestimonials()
    }, [])

    const fetchTestimonials = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/testimonials`).then(({ data }) => {
            setTestimonials(data['data']);
        })
    }

    const options = {
        loop: true,
        margin: 10,
        items: 2,
        autoplay: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    };

    return (
        <section className="testimonial section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {
                            testimonials.length > 0 ?
                                <OwlCarousel id="testimonials" className="owl-theme" {...options}>
                                    {
                                        testimonials.map((row, key) => (
                                            <div className="item" key={key}>
                                                <div className="img-thumb">
                                                <img className="img-fluid" src={row.img_path ? `${process.env.REACT_APP_API_URL}/${row.img_path}` : `${process.env.REACT_APP_API_URL}/assets/img-not-found.jpg`} alt="" />
                                                </div>
                                                <div className="testimonial-item">
                                                    <div className="content">
                                                        <p className="description">
                                                            {row.content}
                                                        </p>
                                                        <div className="info-text">
                                                            <h2><a href="#">{row.name}</a></h2>
                                                            <h4><a href="#">CEO of Fiverr</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </OwlCarousel>
                                : <Loader/>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial