import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import Sidebar from '../components/Sidebar';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Breadcrumb from '../components/Breadcrumb';

function Profile(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState('');
    const [sellerDescription, setSellerDescription] = useState('');
  
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
      success: successUpdate,
      error: errorUpdate,
      loading: loadingUpdate,
    } = userUpdateProfile;

    const dispatch = useDispatch();
    useEffect(() => {
      if (!user) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(detailsUser(userInfo['data']['id']));
      } else {
        setName(user['name']);
        setEmail(user['email']);
      }
    }, [dispatch, userInfo._id, user]);

 const bodyFormData = new FormData();
    
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    bodyFormData.append('image', file);
  };

    const submitHandler = (e) => {
      e.preventDefault();
      bodyFormData.append('name', name);
      bodyFormData.append('email', email);
      // dispatch update profile
      if (password !== confirmPassword) {
        alert('Password and Confirm Password Are Not Matched');
      } else {
        dispatch(
          updateUserProfile(bodyFormData)
        );
      }
    };

    return (
        <div>
            <Breadcrumb activePage="Profile"/>
            <div id="content" class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-3 page-sidebar">
                            <Sidebar />
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-9">
                            <div class="row page-content">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                                    <div class="inner-box">
                                        <div class="dashboard-box">
                                            <h2 class="dashbord-title">Profile {userInfo['data']['name']}</h2>
                                        </div>
                                        <div class="dashboard-wrapper">
                                            <form onSubmit={submitHandler} multipart="form-data">
                                            <div class="form-group mb-3">
                                                <label class="control-label">Name</label>
                                                <input class="form-control 
                                                       input-md" name="Title" 
                                                       placeholder="name" 
                                                       type="text"               
                                                       value={name}
                                                       onChange={(e) => setName(e.target.value)}/>
                                            </div>
                                            <div class="form-group mb-3">
                                                <label class="control-label">Email address</label>
                                                <input class="form-control input-md" name="price" placeholder="Email address" type="text"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <label class="tg-fileuploadlabel" for="tg-photogallery">
                                                <span>Drop files anywhere to upload</span>
                                                <span>Or</span>
                                                <span class="btn btn-common">Select File</span>
                                                <span>Maximum upload file size: 500 KB</span>
                                                <input id="tg-photogallery" class="tg-fileinput" type="file" name="file"
                                                                  onChange={uploadFileHandler}
                                                                  />
                                            </label>
                                            <button class="btn btn-common" type="submit">Update</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                                    <div class="inner-box">
                                        <div class="tg-contactdetail">
                                            <div class="dashboard-box">
                                                <h2 class="dashbord-title">Contact Detail</h2>
                                            </div>
                                            <div class="dashboard-wrapper">
                                                <div class="form-group mb-3">
                                                    <strong>I’m a:</strong>
                                                    <div class="tg-selectgroup">
                                                        <span class="tg-radio">
                                                            <input id="tg-sameuser" type="radio" name="usertype" value="same user" checked=""/>
                                                                <label for="tg-sameuser">Same User</label>
                                                        </span>
                                                        <span class="tg-radio">
                                                            <input id="tg-someoneelse" type="radio" name="usertype" value="someone else"/>
                                                                <label for="tg-someoneelse">Someone Else</label>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">First Name*</label>
                                                    <input class="form-control input-md" name="name" type="text"/>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">Last Name*</label>
                                                    <input class="form-control input-md" name="name" type="text"/>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">Phone*</label>
                                                    <input class="form-control input-md" name="phone" type="text"/>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">Enter Address</label>
                                                    <input class="form-control input-md" name="address" type="text"/>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label class="control-label">Enter Address</label>
                                                    <input class="form-control input-md" name="address" type="text"/>
                                                </div>
                                                <div class="form-group mb-3 tg-inputwithicon">
                                                    <label class="control-label">Country</label>
                                                    <div class="tg-select form-control">
                                                        <select>
                                                            <option value="none">Select Country</option>
                                                            <option value="none">New York</option>
                                                            <option value="none">California</option>
                                                            <option value="none">Washington</option>
                                                            <option value="none">Birmingham</option>
                                                            <option value="none">Chicago</option>
                                                            <option value="none">Phoenix</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3 tg-inputwithicon">
                                                    <label class="control-label">State</label>
                                                    <div class="tg-select form-control">
                                                        <select>
                                                            <option value="none">Select State</option>
                                                            <option value="none">Select State</option>
                                                            <option value="none">Select State</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3 tg-inputwithicon">
                                                    <label class="control-label">City</label>
                                                    <div class="tg-select form-control">
                                                        <select>
                                                            <option value="none">Select State</option>
                                                            <option value="none">Select State</option>
                                                            <option value="none">Select State</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="tg-checkbox">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="tg-agreetermsandrules"/>
                                                            <label class="custom-control-label" for="tg-agreetermsandrules">I agree to all <a href="javascript:void(0);">Terms of Use &amp; Posting Rules</a></label>
                                                    </div>
                                                </div>
                                                <button class="btn btn-common" type="button">Post Ad</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile