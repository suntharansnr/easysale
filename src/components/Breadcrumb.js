import React from "react";

function Breadcrumb({activePage}) {
  return (
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="product-title">{activePage}</h2>
              <ol class="breadcrumb">
                <li>
                  <a href="#">Home /</a>
                </li>
                <li class="current">{activePage}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
