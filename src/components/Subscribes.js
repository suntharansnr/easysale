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
        <section class="subscribes section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="subscribes-inner">
                            <div class="icon">
                                <i class="lni-pointer"></i>
                            </div>
                            <div class="sub-text">
                                <h3>Subscribe to Newsletter</h3>
                                <p>and receive new ads in inbox</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <Form onSubmit={createSubscribe} class="contact-form" id="contactForm" data-toggle="validator">
                            <div class="subscribe">
                                <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} class="form-control" id="email" placeholder="Email" data-error="Please enter your email" />
                                <button class="btn btn-common" type="submit">Subscribe</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribes