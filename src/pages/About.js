import React from 'react'
import Service from '../components/service'
import Counter from '../components/Counter'
import Testimonial from '../components/Testimonial'
import about from '../assets/img/about/about.png'

function About() {
    return (
        <div>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumb-wrapper">
                                <h2 class="product-title">About Us</h2>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home /</a></li>
                                    <li class="current">About Us</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="about" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-xs-12">
                            <div class="about-wrapper">
                                <h2 class="intro-title">Why We Are Unique</h2>
                                <p class="intro-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum, doloremque quaerat sit tempora eius est reiciendis accusamus magnam quae. Explicabo dolore officia, iure a ullam aliquam nemo excepturi, repellat. uod ut delectus ad tempora.
                                </p>
                                <a href="#" class="btn btn-common btn-lg">Add Listing</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xs-12">
                            <img class="img-fluid" src={about} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Counter />

            <Service />

            <Testimonial/>

        </div>
    )
}

export default About