import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Stores() {
  const [stores, setProducts] = useState([])

  useEffect(() => {
      fetchStores()
  }, [])

  const fetchStores = async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/stores`).then(({ data }) => {
          setProducts(data['stores']);
      })
  }
  return (
    <section className="featured section-padding">
      <div className="container">
        <h1 className="section-title">Latest Products</h1>
        <div className="row">
          {
            stores.length > 0 && (
              stores.map((row, key) => (
                <div key={key} className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                  <div className="featured-box">
                    <figure>
                      <a href="#"><img className="img-fluid" src={row.theme.logo ? `/${row.theme['logo']}` : '/assets/img-not-found.jpg'} alt="" /></a>
                    </figure>
                    <div className="feature-content">
                      <h4><a href="ads-details.html">{row.name}</a></h4>
                      <p className="dsc">{row.description}</p>
                      <div className="listing-bottom">
                        <h3 className="price float-left">{row.price}</h3>
                        <Link to={`/store/${row.id}`}>
                          <a href="ads-details.html" className="btn btn-common float-right">Visit shop</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Stores