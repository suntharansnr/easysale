import React from 'react'
import Testimonial from '../components/Testimonial'

function Testimonials() {
    return (
        <div>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumb-wrapper">
                                <h2 class="product-title">Testimonial</h2>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home /</a></li>
                                    <li class="current">Testimonial</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
        </div>
    )
}

export default Testimonials