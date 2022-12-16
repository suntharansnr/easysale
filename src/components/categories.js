import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

function Categories() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/browse-by-categories`).then(({ data }) => {
            setProducts(data['data']['allcategories']);
        })
    }

    const deleteProduct = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        });

        if (!isConfirm) {
            return;
        }

        await axios.delete(`http://localhost:8000${process.env.REACT_APP_API_URL}/api/products/${id}`).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            fetchProducts()
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }

    return (
        <div>
            <div className='row'>
                {
                    products.length > 0 && (
                        products.map((row, key) => (
                            <div key={key} className='col-md-4 mb-1'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h3>{row.collectionName}:<span className='btn btn-info btn-sm'>{row.AdsAmount}</span></h3>
                                    </div>
                                    <div className='card-body'>
                                        <img className="img-fluid" src={row.Img ? `/${row.Img}` : '/assets/img-not-found.jpg'} />
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

export default Categories 