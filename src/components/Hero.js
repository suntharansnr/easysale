import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listDistrict } from '../actions/locationActions';

function Hero() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('all');
    const [district, setDistrict] = useState('all');
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/category/${category}/district/${district}/name/${name}`);
    };

    const [categories, setCategories] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategories();
        dispatch(listDistrict());
    }, [])

    const fetchCategories = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/browse-by-categories`).then(({ data }) => {
            setCategories(data['data']['allcategories']);
        })
    }

    const districtList = useSelector((state) => state.districtList);
    const {
      loading: loadingDistrict,
      error: errorDistrict,
      districts,
    } = districtList;

    return (
        <div id="hero-area">
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-9 col-xs-12 text-center">
                        <div className="contents">
                            <h1 className="head-title">Welcome to The Largest <span className="year">Marketplace</span></h1>
                            <p>Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more</p>
                            <div className="search-bar">
                                <div className="search-inner">
                                    <form className="search-form" onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <input type="text" name="q" className="form-control" placeholder="What are you looking for?"
                                                onChange={(e) => setName(e.target.value)} required />
                                        </div>
                                        <div className="form-group inputwithicon">
                                            <div className="select">
                                                <select onChange={(e) => { setDistrict(e.target.value); }}>
                                                    <option value="none">Select districts</option>
                                                    {districts?.map((c) => (
                                                        <option value={c.id}>{c.name_en}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <i className="lni-target"></i>
                                        </div>
                                        <div className="form-group inputwithicon">
                                            <div className="select">
                                                <select onChange={(e) => { setCategory(e.target.value); }}>
                                                    <option value={category}>Select Categories</option>
                                                    {categories?.map((c) => (
                                                        <option value={c.id}>{c.collectionName}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <i className="lni-menu"></i>
                                        </div>
                                        <button className="btn btn-common" type="submit"><i className="lni-search"></i> Search Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero