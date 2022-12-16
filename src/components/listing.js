import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

function List() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/AllAds`).then(({ data }) => {
            setProducts(data['ads']);
        })
    }

    return (
        <div>
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
        </div>
    )
}

export default List