import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import { base_url } from '../utils';
import Favoritebtn from '../components/Favoritebtn';
import Breadcrumb from '../components/Breadcrumb';

export default function SearchScreen(props) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const paged = parseInt(query.get('page') || '1', 10);
  const navigate = useNavigate();
  const {
    name = 'all',
    category = 'all',
    sub_category = 'all',
    brand = 'all',
    district = 'all',
    city = 'all',
    min_price = 0,
    max_price = 0,
    rating = 0,
    order = 'newest',
    pageNumber = 1,
  } = useParams();

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products,categories,sub_categories,brands,districts,cities, page,links,pages,total } = productList;

  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        sub_category: sub_category !== 'all' ? sub_category : '',
        brand: brand !== 'all' ? brand : '',
        district: district !== 'all' ? district : '',
        city: city !== 'all' ? city : '',
        min_price,
        max_price,
        rating,
        order,
      })
    );
  }, [category,brand, dispatch, max_price, min_price, name, order, rating, pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.pageNumber || pageNumber;
    const filterCategory = filter.category || category;
    const filterSub_Category = filter.sub_category || sub_category;
    const filterBrand = filter.brand || brand;
    const filterDistrict = filter.district || district;
    const filterCity = filter.city || city;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min_price ? filter.min_price : filter.min_price === 0 ? 0 : min_price;
    const filterMax = filter.max_price ? filter.max_price : filter.max_price === 0 ? 0 : max_price;
    return `/search/category/${filterCategory}/sub_category/${filterSub_Category}/brand/${filterBrand}/district/${filterDistrict}/city/${filterCity}/name/${filterName}/min_price/${filterMin}/max_price/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };

  return (
    <div>
      <Breadcrumb activePage="Listings" />
      <div className="main-container section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-xs-12 page-sidebar">
              <aside>
                <div className="bg-white">
                  <div className="sidebar-filter-wrapper">
                    <form action="" id="listingFilterForm" method="get">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={name}
                          onChange={(e) => {
                            navigate(getFilterUrl({ name: e.target.value }));
                          }}
                          placeholder="Search keywords"
                        />
                      </div>

                      <hr />
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="category"
                          value={category}
                          onChange={(e) => {
                            navigate(
                              getFilterUrl({ category: e.target.value })
                            );
                          }}
                        >
                          <option value="">Select a Category</option>
                          {categories?.map((c) => (
                            <option value={c.id}>{c.category_name_en}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <select
                          className="form-control"
                          name="sub_category"
                          value={sub_category}
                          onChange={(e) => {
                            navigate(
                              getFilterUrl({ sub_category: e.target.value })
                            );
                          }}
                        >
                          <option value="">Select a Sub Category</option>
                          {sub_categories?.map((c) => (
                            <option value={c.id}>{c.category_name_en}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <select
                          className="form-control"
                          name="category"
                          value={brand}
                          onChange={(e) => {
                            navigate(getFilterUrl({ brand: e.target.value }));
                          }}
                        >
                          <option value=""> Select a brand </option>
                          {brands?.length > 0 &&
                            brands.map((row, key) => (
                              <option value={row.id}>{row.brand_name}</option>
                            ))}
                        </select>
                      </div>

                      <hr />

                      <div className="form-group">
                        <select
                          className="form-control"
                          name="district"
                          value={district}
                          onChange={(e) => {
                            navigate(
                              getFilterUrl({ district: e.target.value })
                            );
                          }}
                        >
                          <option value=""> Select a district </option>
                          {districts?.length > 0 &&
                            districts.map((row, key) => (
                              <option value={row.id}>{row.name_en}</option>
                            ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <select
                          className="form-control"
                          name="city"
                          value={city}
                          onChange={(e) => {
                            navigate(getFilterUrl({ city: e.target.value }));
                          }}
                        >
                          <option value=""> Select a city </option>
                          {cities?.length > 0 &&
                            cities.map((row, key) => (
                              <option value={row.id}>{row.name_en}</option>
                            ))}
                        </select>
                      </div>

                      <hr />
                      <div className="form-group">
                        <label>Price (Min-Max)</label>

                        <div className="row">
                          <div className="col-xs-6 col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              name="min_price"
                              value={min_price}
                              onChange={(e) => {
                                navigate(
                                  getFilterUrl({ min_price: e.target.value })
                                );
                              }}
                              placeholder="Min price"
                            />
                          </div>
                          <div className="col-xs-6 col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              name="max_price"
                              value={max_price}
                              onChange={(e) => {
                                navigate(
                                  getFilterUrl({ max_price: e.target.value })
                                );
                              }}
                              placeholder="Max price"
                            />
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div className="form-group">
                        <label>Condition</label>
                        <div className="checkbox">
                          <label>
                            <input
                              type="radio"
                              name="condition"
                              id="new"
                              value="new"
                            />
                            New{" "}
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="radio"
                              name="condition"
                              id="used"
                              value="used"
                            />
                            Used{" "}
                          </label>
                        </div>
                      </div>

                      <hr />
                      <div className="form-group">
                        <div className="row">
                          <div className=" col-sm-6 col-xs-12">
                            <button className="btn btn-primary btn-block">
                              <i className="fa fa-search"></i> Filter
                            </button>
                          </div>
                          <div className="col-sm-6 col-xs-12">
                            <a
                              href="http://localhost/laravelprojects/classNameified/maaaz/listing"
                              className="btn btn-default btn-block"
                            >
                              <i className="fa fa-refresh"></i> Reset
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-lg-9 col-md-12 col-xs-12 page-content">
              <div className="product-filter">
                <div className="short-name">
                  <span>
                    Showing (1 - 12 products of {total ? total : ""} products)
                  </span>
                </div>
                <div className="Show-item">
                  <span>Show Items</span>
                  <form className="woocommerce-ordering" method="post">
                    <label>
                      <select
                        name="order"
                        className="orderby"
                        value={order}
                        onChange={(e) => {
                          navigate(getFilterUrl({ order: e.target.value }));
                        }}
                      >
                        <option selected="selected" value="menu-order">
                          49 items
                        </option>
                        <option value="latest">Time :More recent</option>
                        <option value="price_low_to_high">
                          Price: Lowest first
                        </option>
                        <option value="price_high_to_low">
                          Price : Highest first
                        </option>
                      </select>
                    </label>
                  </form>
                </div>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#grid-view">
                      <i className="lni-grid"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#list-view"
                    >
                      <i className="lni-list"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="adds-wrapper">
                <div className="tab-content">
                  <div id="grid-view" className="tab-pane fade">
                    <div className="row">
                      {products?.length > 0 &&
                        products.map((row, key) => (
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="featured-box">
                              <figure>
                                <div className="icon">
                                  <span className="bg-green">
                                    <i className="lni-heart"></i>
                                  </span>
                                  <span>
                                    <i className="lni-bookmark"></i>
                                  </span>
                                </div>
                                <a href="#">
                                  <img
                                    className="img-fluid"
                                    src={
                                      row.feature_img
                                        ? base_url +
                                          `/uploads/images/thumbs/${row.feature_img["media_name"]}`
                                        : base_url + "/assets/img-not-found.jpg"
                                    }
                                    alt=""
                                  />
                                </a>
                              </figure>
                              <div className="feature-content">
                                <div className="product">
                                  <a href="#">Electronic &gt; </a>
                                  <a href="#">Apple</a>
                                </div>
                                <h4>
                                  <a href="ads-details.html">{row.title}</a>
                                </h4>
                                <div className="meta-tag">
                                  <span>
                                    <a href="#">
                                      <i className="lni-user"></i> John Smith
                                    </a>
                                  </span>
                                  <span>
                                    <a href="#">
                                      <i className="lni-map-marker"></i> New
                                      York, US
                                    </a>
                                  </span>
                                  <span>
                                    <a href="#">
                                      <i className="lni-tag"></i> Apple
                                    </a>
                                  </span>
                                </div>
                                <p className="dsc">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry.
                                </p>
                                <div className="listing-bottom">
                                  <h3 className="price float-left">$249.00</h3>
                                  <a
                                    href="ads-details.html"
                                    className="btn btn-common float-right"
                                  >
                                    View Details
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div id="list-view" className="tab-pane fade active show">
                    <div className="row">
                      {products?.length > 0 &&
                        products.map((row, key) => (
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="featured-box">
                              <figure>
                                <div className="icon">
                                  <Favoritebtn slug={row.slug} />
                                  <span>
                                    <i className="lni-bookmark"></i>
                                  </span>
                                </div>
                                <a href="#">
                                  <img
                                    className="img-fluid"
                                    src={
                                      row.feature_img
                                        ? base_url +
                                          `/uploads/images/thumbs/${row.feature_img["media_name"]}`
                                        : base_url + "/assets/img-not-found.jpg"
                                    }
                                    alt=""
                                  />
                                </a>
                              </figure>
                              <div className="feature-content">
                                <div className="product">
                                  <a
                                    href="#"
                                    onClick={() =>
                                      navigate(
                                        `/search/category/${row.category_id}`
                                      )
                                    }
                                  >
                                    {row.category?.category_name_en} &gt;{" "}
                                  </a>
                                  <a
                                    href="#"
                                    onClick={() =>
                                      navigate(
                                        `/search/category/${row.category_id}/sub_category/${row.subcategory_id}`
                                      )
                                    }
                                  >
                                    {row.sub_category?.category_name_en}
                                  </a>
                                </div>
                                <h4>
                                  <a
                                    href="#"
                                    onClick={() =>
                                      navigate(`/product/${row.id}`)
                                    }
                                  >
                                    {row.title}
                                  </a>
                                </h4>
                                <div className="meta-tag">
                                  <span>
                                    <a href="#">
                                      <i className="lni-user"></i>{" "}
                                      {row.seller_name}
                                    </a>
                                  </span>
                                  <span>
                                    <a href="#">
                                      <i className="lni-map-marker"></i>{" "}
                                      {row.address}
                                    </a>
                                  </span>
                                  <span>
                                    <a href="#">
                                      <i className="lni-tag"></i> Apple
                                    </a>
                                  </span>
                                </div>
                                <p className="dsc">
                                  {row.description.substring(0, 100) + "..."}
                                </p>
                                <div className="listing-bottom">
                                  <h3 className="price float-left">
                                    ${row.price}
                                  </h3>
                                  <Link
                                    to={`/product/${row.id}`}
                                    className="btn btn-common float-right"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              {products?.length > 1 ? (
                <div className="pagination-bar">
                  <nav>
                    <ul className="pagination justify-content-center">
                      {
                        links.map((link,key) => (
                          link.url != null ?
                          <li className={`page-item ${link.label === pageNumber ? 'active' : ''}`} key={key}>
                            <a className="page-link" onClick={() => {navigate(getFilterUrl({ pageNumber: link?.label }) )}}>
                              {link.label}
                            </a>
                          </li>
                          : ''
                        ))
                      }
                    </ul>
                  </nav>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
