import React from 'react'
import Subscribes from '../components/Subscribes'
import Breadcrumb from '../components/Breadcrumb';

function Packages() {
    return (
        <div>
            <Breadcrumb activePage="Pricing Packages"/>
            <section id="pricing-table" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="section-title">Pricing Plan</h2>
                        </div>
                        <div class="col-lg-4 col-md-6 col-xs-12">
                            <div class="table">
                                <div class="icon">
                                    <i class="lni-gift"></i>
                                </div>
                                <div class="pricing-header">
                                    <p class="price-value">$29</p>
                                </div>
                                <div class="title">
                                    <h3>Basic</h3>
                                </div>
                                <ul class="description">
                                    <li>Web UI Design</li>
                                    <li>App UI Design</li>
                                    <li>Responsive Design</li>
                                    <li>Ipad UI Design</li>
                                    <li>Branding Identity</li>
                                </ul>
                                <button class="btn btn-common">Purchase</button>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-xs-12">
                            <div class="table" id="active-tb">
                                <div class="icon">
                                    <i class="lni-leaf"></i>
                                </div>
                                <div class="pricing-header">
                                    <p class="price-value">$49</p>
                                </div>
                                <div class="title">
                                    <h3>Standard</h3>
                                </div>
                                <ul class="description">
                                    <li>Web UI Design</li>
                                    <li>App UI Design</li>
                                    <li>Responsive Design</li>
                                    <li>Ipad UI Design</li>
                                    <li>Branding Identity</li>
                                </ul>
                                <button class="btn btn-common">Purchase</button>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-xs-12">
                            <div class="table">
                                <div class="icon">
                                    <i class="lni-layers"></i>
                                </div>
                                <div class="pricing-header">
                                    <p class="price-value">$69</p>
                                </div>
                                <div class="title">
                                    <h3>Premium</h3>
                                </div>
                                <ul class="description">
                                    <li>Web UI Design</li>
                                    <li>App UI Design</li>
                                    <li>Responsive Design</li>
                                    <li>Ipad UI Design</li>
                                    <li>Branding Identity</li>
                                </ul>
                                <button class="btn btn-common">Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Subscribes />
        </div>
    )
}

export default Packages