import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';

export default function Store() {
    const navigate = useNavigate();

    const { id } = useParams()

    const [products, setProducts] = useState([])

    const [services, setServices] = useState([])

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/store/${id}`).then(({ data }) => {
            setProducts(data['ads'])
            setServices(data['services'])
        })
    }

    return (
        <div className="container">
            <div className='row'>
                {
                    products.length > 0 && (
                        products.map((row, key) => (
                            <div key={key} className='col-md-4 mb-1'>
                                <Link to={`/product/${row.id}`}>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <h3>{row.title}:<span className='btn btn-info btn-sm'>{row.price}</span></h3>
                                        </div>
                                        <div className='card-body'>
                                            <img className="img-fluid" src={row.feature_img ? `/uploads/images/thumbs/${row.feature_img['media_name']}` : '/assets/img-not-found.jpg'} />
                                        </div>
                                        <div className='card-footer'>
                                            {row.store_id ? <Link to={`/store/${row.id}`}>view store</Link> : ''}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )
                }
            </div>
            <div className='row'>
                {
                    services.length > 0 && (
                        services.map((row, key) => (
                            <div key={key} className='col-md-4 mb-1'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h3>{row.title}</h3>
                                    </div>
                                    <div className='card-body'>
                                        <img className="img-fluid" src={row.img_path ? `/${row.img_path}` : '/assets/img-not-found.jpg'} />
                                        <p>{row.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}