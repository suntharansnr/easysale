import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

function Contact() {

    const themeDetails = useSelector((state) => state.themeDetails);
    const { themeInfo } = themeDetails;
    
    const htmlData = themeInfo ? themeInfo['google_map_embedded_code'] : ''

    const navigate = useNavigate();

    const [sender_name, setSenderName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()
    const [validationError, setValidationError] = useState({})

    const createContact = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('name', sender_name)
        formData.append('email', email)
        formData.append('subject', subject)
        formData.append('message', message)

        await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate("/")
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
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumb-wrapper">
                                <h2 class="product-title">Contact Us</h2>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home /</a></li>
                                    <li class="current">Contact Us</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id="google-map-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: htmlData
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section id="content" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-xs-12">
                            <Form onSubmit={createContact} class="contact-form" id="contactForm" data-toggle="validator">
                                <h2 class="contact-title">
                                    Send Message Us
                                </h2>
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
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <input type="text" value={sender_name} onChange={(event) => { setSenderName(event.target.value) }} class="form-control" id="name" name="name" placeholder="Name" data-error="Please enter your name" />
                                                    <div class="help-block with-errors">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} class="form-control" id="email" placeholder="Email" data-error="Please enter your email" />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <input type="text" value={subject} onChange={(event) => { setSubject(event.target.value) }} class="form-control" id="msg_subject" name="subject" placeholder="Subject" data-error="Please enter your subject" />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea value={message} onChange={(event) => { setMessage(event.target.value) }} class="form-control" placeholder="Massage" rows="7" data-error="Write your message" required></textarea>
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" id="submit" class="btn btn-common">Submit Now</button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                                    { themeInfo ? 
                        <div class="col-lg-4 col-md-4 col-xs-12">
                            <div class="information mb-4">
                                <h3>Address</h3>
                                <div class="contact-datails">
                                    <p>{themeInfo['footer_address']}</p>
                                </div>
                            </div>
                            <div class="information">
                                <h3>Contact Info</h3>
                                <div class="contact-datails">
                                    <ul class="list-unstyled info">
                                        <li><span>Address : </span><p> {themeInfo['footer_address']}</p></li>
                                        <li><span>Email : </span><p><a href="#"><span class="__cf_email__" data-cfemail="c0b3b5b0b0afb2b480ada1a9aceea3afad">[email&#160;protected]</span></a></p></li>
                                        <li><span>Phone : </span><p>{themeInfo['site_phone_number']}</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                                    : 'loading'
                                    }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact