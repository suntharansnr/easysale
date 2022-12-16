import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Catslider() {
    const [top_categories, setTop_categories] = useState([])

    useEffect(() => {
        fetchTop_categories()
    }, [])

    const fetchTop_categories = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/top_categories`).then(({ data }) => {
            setTop_categories(data['top_categories']);
        })
    }

    const options = {
        loop: true,
        margin: 10,
        items: 5,
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
                items:5
            }
        }
    };

    const navigate = useNavigate();

    return (
        <section id="categories">
            {
                top_categories.length > 0 ?
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-12 col-xs-12">
                                <OwlCarousel id="categories-icon-slider" className="categories-wrapper owl-theme" {...options}>
                                    {
                                        top_categories.map((row, key) => (
                                            <div className="item" key={key}>
                                                <a href="#" onClick={() => navigate(`/search/category/${row.id}`)}>
                                                    <div className="category-icon-item">
                                                        <div className="icon-box">
                                                            <div className="icon">
                                                                <img className='img-fluid' src={row.img_path ? `${process.env.REACT_APP_API_URL}/${row.img_path}` : `${process.env.REACT_APP_API_URL}/assets/img-not-found.jpg`} alt="" />
                                                            </div>
                                                            <h4>{row.category_name_en}</h4>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div> : ''
            }
        </section>
    )
}

export default Catslider