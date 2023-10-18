import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Swal from 'sweetalert2';



function Subscribes() {
    const [email, setEmail] = useState("")
    const [validationError, setValidationError] = useState({})
    const createSubscribe = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
    
        formData.append('email', email)
    
        await axios.post(`${process.env.REACT_APP_API_URL}/api/subscribe`, formData).then(({ data }) => {
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
        <section className="subscribes section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="subscribes-inner">
                            <div className="icon">
                                <i className="lni-pointer"></i>
                            </div>
                            <div className="sub-text">
                                <h3>Subscribe to Newsletter</h3>
                                <p>and receive new ads in inbox</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <Form onSubmit={createSubscribe} className="contact-form" id="contactForm" data-toggle="validator">
                            <div className="subscribe">
                                <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} className="form-control" id="email" placeholder="Email" data-error="Please enter your email" />
                                <button className="btn btn-common" type="submit">Subscribe</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribes