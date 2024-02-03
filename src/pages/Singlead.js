import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Subscribes from "../components/Subscribes";
import MyOwlCarousel from "../components/owlCarousel";
import Swal from 'sweetalert2';
import Breadcrumb from "../components/Breadcrumb";

function Singlead() {

    const navigate = useNavigate();

    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [medias, setMedias] = useState([])
    const [related, setRelated] = useState([])
    const [custom_arr,setCustomArr] = useState([])
    const [custom_arr_multi_check,setCustomArrMultiCheck] = useState([])
    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/ad/${id}`).then(({ data }) => {
            setProduct(data['ad'])
            setMedias(data['medias'])
            setRelated(data['related_ads'])
            setCustomArr(data['custom_arr'])
            setCustomArrMultiCheck(data['custom_arr_multi_check'])
        }).catch(({ response }) => {
            if (response.status === 422) {
                navigate('/404')
            } 
        })
    }

    const [ad_id, setAdId] = useState("")
    const [reason, setReason] = useState()
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState()
    const [validationError, setValidationError] = useState({})

    const createContact = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('ad_id', product.id)
        formData.append('reason', reason)
        formData.append('email', email)
        formData.append('message', message)

        await axios.post(`${process.env.REACT_APP_API_URL}/api/report`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
        }).catch(({ response }) => {
            if (response.status === 422) {
                setValidationError(response.data.errors)
            } else {
                Swal.fire({
                    text: response.data.message,
                    icon: "error"
                })
            }
        })
    }

    return (
        <div>
            <Breadcrumb activePage="Details"/>
            <div className="section-padding">
                <div className="container">
                    <div className="product-info row">
                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <div className="ads-details-wrapper">
                                <MyOwlCarousel medias={medias} />
                            </div>
                            <div className="details-box">
                                <div className="ads-details-info">
                                    <h2>{product.title}</h2>
                                    <div className="details-meta">
                                        <span><a href="#"><i className="lni-alarm-clock"></i> {product.created_at}</a></span>
                                        <span><a href="#"><i className="lni-map-marker"></i> {product.district_name}</a></span>
                                        <span><a href="#"><i className="lni-eye"></i> {product.view} View</a></span>
                                    </div>
                                    <p className="mb-4">{product.description}</p>

                                    {Object.keys(custom_arr_multi_check).map((key, index) => {
                                        return (
                                            <>
                                                <h4 className="title-small mb-3">{key}:</h4>
                                                <ul className="list-specification">
                                                    {custom_arr_multi_check[key].map((row, key) => (
                                                        <li><i className="lni-check-mark-circle"></i> {row.option}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        );
                                    })}


                                </div>
                                <div className="tag-bottom">
                                    <div className="float-left">
                                        <ul className="advertisement">
                                            {
                                                custom_arr.length > 0 && (
                                                    custom_arr.map((row, key) => (
                                                        <li>
                                                            <p><strong><i className={row['icon']}></i> {row['field_name']}:</strong> <a href="#">{row['value']}</a></p>
                                                        </li>
                                                    ))
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="float-right">
                                        <div className="share">
                                            <div className="social-link">
                                                <a className="facebook" data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="facebook"><i className="lni-facebook-filled"></i></a>
                                                <a className="twitter" data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="twitter"><i className="lni-twitter-filled"></i></a>
                                                <a className="linkedin" data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="linkedin"><i className="lni-linkedin-fill"></i></a>
                                                <a className="google" data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="google plus"><i className="lni-google-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">

                            <aside className="details-sidebar">
                                <div className="widget">
                                    <h4 className="widget-title">Ad Posted By</h4>
                                    <div className="agent-inner">
                                        <div className="agent-title">
                                            <div className="agent-photo">
                                                <a href="#"><img src={product.seller_img ? `${process.env.REACT_APP_API_URL}/${product.seller_img}` : '/assets/img-not-found.jpg'} alt="" /></a>
                                            </div>
                                            <div className="agent-details">
                                                <h3><a href="#">{product.seller_name}</a></h3>
                                                <span><i className="lni-phone-handset"></i>{product.seller_phone}</span>
                                            </div>
                                        </div>
                                        <Form onSubmit={createContact} class="contact-form" id="contactForm" data-toggle="validator">
                                            {
                                                Object.keys(validationError).length > 0 && (
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="alert alert-danger">
                                                                <ul className="mb-0">
                                                                    {
                                                                        Object.entries(validationError).map(([key, value]) => (
                                                                            <li key={key}>{value}</li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <input type="hidden" value={ad_id} onChange={(event) => { setAdId(event.target.value) }} class="form-control" id="ad_id" name="ad_id" placeholder="Reason" data-error="Please enter your reason" />
                                            <input type="text" value={reason} onChange={(event) => { setReason(event.target.value) }} class="form-control" id="reason" name="reason" placeholder="Reason" data-error="Please enter your reason" />
                                            <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} class="form-control" id="email" placeholder="Email" data-error="Please enter your email" />
                                            <input type="text" value={message} onChange={(event) => { setMessage(event.target.value) }} class="form-control" id="message" name="message" placeholder="Message" data-error="Please enter your message" />
                                            <p>I'm interested in this property [ID 123456] and I'd like to know more details.</p>
                                            <button className="btn btn-common fullwidth mt-4" type="submit">Send Message</button>
                                        </Form>
                                    </div>
                                </div>

                                <div className="widget">
                                    <h4 className="widget-title">More Ads From Seller</h4>
                                    <ul className="posts-list">
                                        {
                                            related.length > 0 && (
                                                related.map((row, key) => (
                                                    <li>
                                                        <div className="widget-thumb">
                                                            <a href="#"><img src={row.feature_img ? `${process.env.REACT_APP_API_URL}/${row.feature_img}` : '/assets/img-not-found.jpg'} alt="" /></a>
                                                        </div>
                                                        <div className="widget-content">
                                                            <h4><a href="#">
                                                                {row.title.length > 20 ?
                                                                    `${row.title.substring(0, 20)}...` : row.title
                                                                }
                                                                </a></h4>
                                                            <div className="meta-tag">
                                                                <span>
                                                                    <a href="#"><i className="lni-user"></i> {row.seller_name}</a>
                                                                </span>
                                                                <span>
                                                                    <a href="#"><i className="lni-map-marker"></i> {row.city ? row.city.name_en : ''}</a>
                                                                </span>
                                                                <span>
                                                                    <a href="#"><i className="lni-tag"></i> {row.category ? row.category.category_name_en : ''}</a>
                                                                </span>
                                                            </div>
                                                            <h4 className="price">{row.price}</h4>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </li>
                                                ))
                                            )
                                        }
                                    </ul>
                                </div>
                            </aside>

                        </div>
                    </div>

                </div>
            </div>
            <Subscribes />
        </div>
    )
}

export default Singlead