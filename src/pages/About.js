import React from 'react'
import Service from '../components/service'
import Counter from '../components/Counter'
import Testimonial from '../components/Testimonial'
import about from '../assets/img/about/about.png'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <Breadcrumb activePage="About us"/>
            <section id="about" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-xs-12">
                            <div class="about-wrapper">
                                <h2 class="intro-title">Why We Are Unique</h2>
                                <p class="intro-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum, doloremque quaerat sit tempora eius est reiciendis accusamus magnam quae. Explicabo dolore officia, iure a ullam aliquam nemo excepturi, repellat. uod ut delectus ad tempora.
                                </p>
                                <Link to={'/product/create'} class="btn btn-common btn-lg">Add Listing</Link>
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