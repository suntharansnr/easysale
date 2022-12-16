import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Favoritebtn from './Favoritebtn';


function Latest() {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/AllAds`).then(({ data }) => {
            setProducts(data['ads']['data']);
        })
    }
    
    const navigate = useNavigate();

    return (
        <section className="featured section-padding">
            <div className="container">
                <h1 className="section-title">Latest Products</h1>
                <div className="row">
                    {
                        products.length > 0 && (
                            products.map((row, key) => (
                                <div key={key} className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                                    <div className="featured-box">
                                        <figure>
                                            <div className="icon">
                                                <Favoritebtn slug={row.slug}/>
                                                <span><i className="lni-bookmark"></i></span>
                                            </div>
                                            <a href="#" onClick={() => navigate(`/product/${row.id}`)}>
                                                <img className="img-fluid" style={{width: "100%"}} src={row.feature_img ? `${process.env.REACT_APP_API_URL}/uploads/images/thumbs/${row.feature_img['media_name']}` : `${process.env.REACT_APP_API_URL}/assets/img-not-found.jpg`} alt="" /></a>
                                        </figure>
                                        <div className="feature-content" style={{width: "100%"}}>
                                            <div className="product">
                                                <a href="#" onClick={() => navigate(`/search/category/${row.category_id}`)}>{row.category?.category_name_en} &gt; </a>
                                                <a href="#" onClick={() => navigate(`/search/category/${row.category_id}/sub_category/${row.subcategory_id}`)}>{row.sub_category?.category_name_en}</a>
                                            </div>
                                            <h4><a href="#" onClick={() => navigate(`/product/${row.id}`)}>{row.title}</a></h4>
                                            <div className="meta-tag">
                                                <span>
                                                    <a href="#"><i className="lni-user"></i> {row.seller_name}</a>
                                                </span>
                                                <span>
                                                    <a href="#"><i className="lni-map-marker"></i> {row.city ? row.city.name_en : 'not found'}</a>
                                                </span>
                                                <span>
                                                    <a href="#"><i className="lni-tag"></i></a>
                                                </span>
                                            </div>
                                            <p className="dsc">{row.description}</p>
                                            <div className="listing-bottom">
                                                <h3 className="price float-left">{row.price}</h3>
                                                <Link to={`/product/${row.id}`} className="btn btn-common float-right">
                                                View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Latest