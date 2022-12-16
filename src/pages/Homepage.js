import React from 'react';
import Catslider from "../components/catslider";
import Latest from "../components/latest";
import Featured from "../components/featured";
import Works from "../components/works";
import Service from "../components/service";
import Pricing from "../components/pricing";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Subscribes from "../components/Subscribes";

function Homepage() {
  return (
    <div>
        <Catslider />
        <Latest/>
        <Featured/>
        <Works/>
        <Service />
        <Pricing />
        <Testimonial/>
        <Blog />
        <Subscribes />
    </div>
  )
}

export default Homepage