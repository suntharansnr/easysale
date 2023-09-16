import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Breadcrumb from '../components/Breadcrumb';
import Swal from 'sweetalert2';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
  
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(signin(email, password));
    };

    useEffect(() => {
      if (userInfo) {
        navigate('/dashboard');
      }
    }, [userInfo]);

    useEffect(() => {
       if(error){
        Swal.fire({
            text: error,
            icon: "error"
        })
       }
    }, [error])
    

    return (
        <div>
            <Breadcrumb activePage="Login"/>

            <section className="login section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-12 col-xs-12">
                            <div className="login-form login-area">
                                <h3>
                                    Login Now
                                </h3>
                                <form role="form" className="login-form" onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-user"></i>
                                            <input type="text" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} id="sender-email" className="form-control" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-lock"></i>
                                            <input type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkedall"/>
                                                <label className="custom-control-label" for="checkedall">Keep me logged in</label>
                                        </div>
                                        <a className="forgetpassword" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-common log-btn" disabled={loading ? 'true' : ''} type='submit' onClick={submitHandler}>
                                        {
                                            loading ? <LoadingBox/> : 'Submit'
                                        }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login