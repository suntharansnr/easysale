import React from 'react'
import Counter from '../components/Counter'
import Cta from '../components/Cta'
import Service from '../components/service'
import Breadcrumb from '../components/Breadcrumb'

function Services() {
  return (
    <div>
      <Breadcrumb activePage="Services"/>

      <Service/>
      <Counter />
      <Cta />
    </div>
  )
}

export default Services