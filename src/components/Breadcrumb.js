import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({activePage}) {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumb-wrapper">
              <h2 className="product-title">{activePage}</h2>
              <ol className="breadcrumb">
                <li>
                    <Link to={`/`}>Home /</Link>
                </li>
                <li className="current">{activePage}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
