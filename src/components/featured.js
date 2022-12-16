import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Featured() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/AllAds`).then(({ data }) => {
            setProducts(data['ads']['data']);
        })
    }

    const options = {
        loop: true,
        margin: 10,
        items: 3,
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

    return (
        <section className="featured-lis section-padding">
            {
                products.length > 0 ?
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 wow fadeIn animated" data-wow-delay="0.5s">
                                <h3 className="section-title">Featured Products</h3>
                                <OwlCarousel id="categories-icon-slider" className="categories-wrapper owl-theme" {...options}>
                                    {
                                        products.map((row, key) => (
                                            <div className="item">
                                                <div className="product-item">
                                                    <div className="carousel-thumb">
                                                        <img className="img-fluid" src={row.feature_img ? `${process.env.REACT_APP_API_URL}/uploads/images/thumbs/${row.feature_img['media_name']}` : `${process.env.REACT_APP_API_URL}/assets/img-not-found.jpg`} alt="" />
                                                        <div className="overlay">
                                                            <div>
                                                                <Link to={`/product/${row.id}`} className="btn btn-common">
                                                                View Details
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product bg-sale">
                                                            <a href="#">{row.type}</a>
                                                        </div>
                                                        <span className="price">{row.price}</span>
                                                    </div>
                                                    <div className="product-content">
                                                        <h3 className="product-title"><Link to={`/product/${row.id}`}>{row.title}</Link></h3>
                                                        <span>{row.category ? row.category.category_name_en : ''} / {row.sub_category ? row.sub_category.category_name_en : ''}</span>
                                                        <div className="icon">
                                                            <span><i className="lni-bookmark"></i></span>
                                                            <span><i className="lni-heart"></i></span>
                                                        </div>
                                                        <div className="card-text">
                                                            <div className="float-left">
                                                                <span className="icon-wrap">
                                                                    <i className="lni-star-filled"></i>
                                                                    <i className="lni-star-filled"></i>
                                                                    <i className="lni-star-filled"></i>
                                                                    <i className="lni-star-filled"></i>
                                                                    <i className="lni-star-filled"></i>
                                                                    <i className="lni-star"></i>
                                                                </span>
                                                                <span className="count-review">
                                                                    (12 Review)
                                                                </span>
                                                            </div>
                                                            <div className="float-right">
                                                                <a className="address" href="#"><i className="lni-map-marker"></i>{row.city ? row.city.name_en : ''}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default Featured