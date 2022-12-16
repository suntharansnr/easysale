import React from 'react'
import Counter from '../components/Counter'
import Cta from '../components/Cta'
import Service from '../components/service'

function Services() {
  return (
    <div>
      <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="breadcrumb-wrapper">
                <h2 class="product-title">Services</h2>
                <ol class="breadcrumb">
                  <li><a href="#">Home /</a></li>
                  <li class="current">Services</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Service/>
      <Counter />
      <Cta />
    </div>
  )
}

export default Services