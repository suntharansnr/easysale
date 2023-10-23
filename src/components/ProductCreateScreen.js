import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';
import Sidebar from './Sidebar';

import { createProduct, getData, listProductCategories, listProductImages } from '../actions/productActions';
import { getCity, listDistrict } from '../actions/locationActions';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ProductCreateScreen(props) {
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [ad_title, setTitle] = useState('');
  const [ad_description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [condition, setCondition] = useState('');
  const [negotiable, setNegotiable] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [price_plan, setPrice_plan] = useState('');
  const [seller_name, setSeller_name] = useState('');
  const [seller_email, setSeller_email] = useState('');
  const [seller_phone, setSeller_phone] = useState('');
  const [address, setSeller_address] = useState('');

  const navigate = useNavigate();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, errors, success, product } = productCreate;
  console.log(errors)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDistrict());
    dispatch(listProductCategories());
    dispatch(listProductImages());
    if (success) {
      toast('Ad added successfuly')
      navigate('/my-ads');
      dispatch({ type: PRODUCT_CREATE_RESET });
    } else {
      setCategory('');
      setBrand('');
      setTitle('');
      setDescription('');
      setPrice('');
      setImage('');
      setDistrict('');
      setCity('');
      setPrice_plan('');
      setSeller_name('');
      setSeller_email('');
      setSeller_phone('');
      setSeller_address('');
    }
  }, [product, dispatch, success, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      createProduct({
        category,
        brand,
        ad_title,
        ad_description,
        type,
        condition,
        negotiable,
        price,
        image,
        district,
        city,
        price_plan,
        seller_name,
        seller_email,
        seller_phone,
        address
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const uploadFileHandler = async (e) => {
    const files = e.target.files;
    const bodyFormData = new FormData();

    for (const key of Object.keys(files)) {
    bodyFormData.append('images[]', files[key]);
    }

    setLoadingUpload(true);
    try {
      const { data } = await Axios.post(`${process.env.REACT_APP_API_URL}/api/u/posts/upload-a-image`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo['data']['token']}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
      dispatch(listProductImages());
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  const getDataByCategory = useSelector((state) => state.getDataByCategory);
  const { loading: loadingData, error: errorData, datas } = getDataByCategory;

  const districtList = useSelector((state) => state.districtList);
  const {
    loading: loadingDistrict,
    error: errorDistrict,
    districts,
  } = districtList;

  const getCityByDistrict = useSelector((state) => state.getCityByDistrict);
  const {
    loading: loadingCity,
    error: errorCity,
    cities,
  } = getCityByDistrict;

  const productImageList = useSelector((state) => state.productImageList);
  const {
    loading: loadingImages,
    error: errorImages,
    images,
  } = productImageList;

  const brands = datas ? datas['brands'] : '';

  const getDatas = (categoryId) => {
    dispatch(getData(categoryId));
  }

  const getCities = (districtId) => {
    dispatch(getCity(districtId));
  }

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <h2 className="product-title">Dashbord</h2>
                <ol className="breadcrumb">
                  <li><a href="#">Home /</a></li>
                  <li className="current">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3 page-sidebar">
              <Sidebar />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9">
              <form className="form" onSubmit={submitHandler}>
                <div className="row page-content">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                    <div className="inner-box">
                      <div className="dashboard-box">
                        <h2 className="dashbord-title">Ad Detail</h2>
                      </div>
                      <div className="dashboard-wrapper">
                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">Categories</label>
                          <div className="tg-select form-control">
                            <select onChange={(e) => { setCategory(e.target.value); getDatas(e.target.value) }}>
                              <option value={category}>Select Categories</option>
                              {categories?.map((c) => (
                                <option value={c.id}>{c.collectionName}</option>
                              ))}
                            </select>
                          </div>
                          {
                              errors ? <p class="text-danger">{errors?.errors?.category}</p> : ''
                          }
                        </div>
                        {brands.length > 0 ?
                          <div className="form-group mb-3 tg-inputwithicon">
                            <label className="control-label">Brands</label>
                            <div className="tg-select form-control">
                              <select>
                                <option value="none">Select Brands</option>
                                {brands?.map((c) => (
                                  <option value={c.id}>{c.brand_name}</option>
                                ))}
                              </select>
                            </div>
                            {
                              errors ? <p class="text-danger">{errors?.errors?.condition}</p> : ''
                            }
                          </div>
                          : ''
                        }
                        <div className="form-group mb-3">
                          <label className="control-label">Ad Title</label>
                          <input className="form-control input-md" name="Title" placeholder="Title" type="text" onChange={(e) => setTitle(e.target.value)} />
                          {
                              errors ? <p class="text-danger">{errors?.errors?.ad_title}</p> : ''
                          }
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Ad Description</label>
                          <textarea className='form-control' onChange={(e) => setDescription(e.target.value)}></textarea>
                          {
                              errors ? <p class="text-danger">{errors?.errors?.ad_description}</p> : ''
                          }
                        </div>

                        <div className="form-group mb-3">
                          <strong>Ad Type</strong>
                          <div className="tg-selectgroup">
                            <span className="tg-radio">
                              <input id="tg-sameuser" type="radio" name="type" value="personal" onChange={(e) => setType(e.target.value)} />
                                <label for="tg-sameuser"> Private</label>
                            </span>
                            <span className="tg-radio ml-1">
                              <input id="tg-someoneelse" type="radio" name="type" value="business" onChange={(e) => setType(e.target.value)} />
                                <label for="tg-someoneelse"> Business</label>
                            </span>
                            {
                              errors ? <p class="text-danger">{errors?.errors?.type}</p> : ''
                            }
                          </div>
                        </div>

                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">Condition</label>
                          <div className="tg-select form-control">
                            <select onChange={(e) => setCondition(e.target.value)}>
                              <option value="new">New</option>
                              <option value="used">Used</option>
                            </select>
                          </div>
                          {
                              errors ? <p class="text-danger">{errors?.errors?.condition}</p> : ''
                          }
                        </div>

                        <div className="form-group mb-3">
                          <label className="control-label">Price</label>
                          <input className="form-control input-md" name="price" placeholder="Ad your Price" type="text" onChange={(e) => setPrice(e.target.value)} />
                          {
                              errors ? <p class="text-danger">{errors?.errors?.price}</p> : ''
                          }
                          <div className="tg-checkbox mt-3">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="tg-priceoncall" />
                              <label className="custom-control-label" for="tg-priceoncall" onChange={(e) => setNegotiable(e.target.value)}>Negotiable </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inner-box">
                      <div className="dashboard-box">
                        <h2 className="dashbord-title">Media</h2>
                      </div>
                      <div className="dashboard-wrapper">
                      <div className='row'>
                      {
                        images ?
                        images.length > 0 && (
                            images.map((row, key) => (
                                <div className='col-md-3 m-1'>
                                <img className="img-fluid" src={row['media_name'] ? `${process.env.REACT_APP_API_URL}/uploads/images/thumbs/${row['media_name']}` : `${process.env.REACT_APP_API_URL}/uploads/images/thumbs/${row['media_name']}/assets/img-not-found.jpg`} alt="" />
                                </div>
                            )))
                        :
                        ''
                      }
                      </div>
                      {
                        loadingUpload ? <LoadingBox/> : 
                        <label className="tg-fileuploadlabel" for="tg-photogallery">
                          <span>Drop files anywhere to upload</span>
                          <span>Or</span>
                          <span className="btn btn-common">Select Files</span>
                          <span>Maximum upload file size: 500 KB</span>
                          <input id="tg-photogallery" className="tg-fileinput" type="file" name="file" multiple="multiple" onChange={uploadFileHandler} />
                        </label> 
                      }
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                    <div className="inner-box">
                      <div className="tg-contactdetails">
                        <div className="dashboard-box">
                          <h2 className="dashbord-title">Location Info</h2>
                        </div>
                        <div className='dashboard-wrapper'>
                          <div className="form-group mb-3 tg-inputwithicon">
                            <label className="control-label">District</label>
                            <div className="tg-select form-control">
                              <select onChange={(e) => { setDistrict(e.target.value); getCities(e.target.value) }}>
                                <option value="none">Select districts</option>
                                {districts?.map((c) => (
                                  <option value={c.id}>{c.name_en}</option>
                                ))}
                              </select>
                            </div>
                            {
                              errors ? <p class="text-danger">{errors?.errors?.district}</p> : ''
                            }
                          </div>
                          <div className="form-group mb-3 tg-inputwithicon">
                            <label className="control-label">City</label>
                            <div className="tg-select form-control">
                              <select onChange={(e) => setCity(e.target.value)}>
                                <option value="none">Select city</option>
                                {cities?.map((c) => (
                                  <option value={c.id}>{c.name_en}</option>
                                ))}
                              </select>
                            </div>
                            {
                              errors ? <p class="text-danger">{errors?.errors?.city}</p> : ''
                            }
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="inner-box">
                      <div className="tg-contactdetail">
                        <div className="dashboard-box">
                          <h2 className="dashbord-title">Payment Info</h2>
                        </div>
                        <div className="dashboard-wrapper">
                          <div className="form-group mb-3">
                            <strong>Price plan:</strong>
                            <div className="tg-selectgroup">
                              <span className="tg-radio">
                                <input id="tg-regular" type="radio" name="usertype" value="regular" onChange={(e) => setPrice_plan(e.target.value)}/>
                                <label for="tg-regular">Regular</label>
                              </span>
                              <span className="tg-radio">
                                <input id="tg-premium" type="radio" name="usertype" value="premium" onChange={(e) => setPrice_plan(e.target.value)}/>
                                <label for="tg-premium">Premium</label>
                              </span>
                            </div>
                            {
                              errors ? <p class="text-danger">{errors?.errors?.price_plan}</p> : ''
                            }
                          </div>

                          <div className="tg-checkbox">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="tg-agreetermsandrules" />
                              <label className="custom-control-label" for="tg-agreetermsandrules">Mark ad as urgent</label>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="inner-box">
                      <div className="tg-contactdetail">
                        <div className="dashboard-box">
                          <h2 className="dashbord-title">Seller Info</h2>
                        </div>
                        <div className="dashboard-wrapper">
                          <div className="form-group mb-3">
                            <div className="form-group mb-3">
                              <label className="control-label">Seller name*</label>
                              <input className="form-control input-md" name="name" type="text" onChange={(e) => setSeller_name(e.target.value)} />
                              {
                               errors ? <p class="text-danger">{errors?.errors?.seller_name}</p> : ''
                              }
                            </div>
                            <div className="form-group mb-3">
                              <label className="control-label">Seller email*</label>
                              <input className="form-control input-md" name="name" type="text" onChange={(e) => setSeller_email(e.target.value)} />
                              {
                               errors ? <p class="text-danger">{errors?.errors?.seller_email}</p> : ''
                              }
                            </div>
                            <div className="form-group mb-3">
                              <label className="control-label">Seller phone*</label>
                              <input className="form-control input-md" name="phone" type="text" onChange={(e) => setSeller_phone(e.target.value)} />
                              {
                               errors ? <p class="text-danger">{errors?.errors?.seller_phone}</p> : ''
                              }
                            </div>
                            <div className="form-group mb-3">
                              <label className="control-label">Address</label>
                              <input className="form-control input-md" name="address" type="text" onChange={(e) => setSeller_address(e.target.value)} />
                              {
                               errors ? <p class="text-danger">{errors?.errors?.address}</p> : ''
                              }
                            </div>
                             
                            <button className="btn btn-common" type="submit">
                            {
                              loading ? 'Please wait' : 'Post Ad'
                            }
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
