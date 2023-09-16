import React from 'react'
import Testimonial from '../components/Testimonial'
import Breadcrumb from '../components/Breadcrumb'

function Testimonials() {
    return (
        <div>
            <Breadcrumb activePage="Testimonial"/>
            <Testimonial />
        </div>
    )
}

export default Testimonials