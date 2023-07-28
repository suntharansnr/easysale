import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Createreport({products}) {

    const [reason, setReason] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [validationError, setValidationError] = useState({})
    const [ad,setAd] = useState('');

    const createContact = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('ad_id', ad)
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
      <Form
        onSubmit={createContact}
        class="contact-form"
        id="contactForm"
        data-toggle="validator"
      >
        {Object.keys(validationError).length > 0 && (
          <div className="row">
            <div className="col-12">
              <div className="alert alert-danger">
                <ul className="mb-0">
                  {Object.entries(validationError).map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className='form-group'>
        <select className='form-control' onChange={(e) => setAd(e.target.value)}>
                {
                  products && products.map((product,i) => (
                    <option value={product.id}>{product.title}</option>
                  ))
                }
        </select>
        </div>
        <div className='form-group'>
        <input
          type="text"
          value={reason}
          onChange={(event) => {
            setReason(event.target.value);
          }}
          class="form-control"
          id="reason"
          name="reason"
          placeholder="Reason"
          data-error="Please enter your reason"
        />  
        </div>
        <div className='form-group'>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          class="form-control"
          id="email"
          placeholder="Email"
          data-error="Please enter your email"
        />  
        </div>
        <div className='form-group'>
        <input
          type="text"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          class="form-control"
          id="message"
          name="message"
          placeholder="Message"
          data-error="Please enter your message"
        />  
        </div>
        <p>
          I'm interested in this property [ID 123456] and I'd like to know more
          details.
        </p>
        <button className="btn btn-common fullwidth mt-4" type="submit">
          Send Message
        </button>
      </Form>
    </div>
  );
}
