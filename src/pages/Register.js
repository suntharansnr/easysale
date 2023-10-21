import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import Breadcrumb from '../components/Breadcrumb';
import Swal from 'sweetalert2';

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const userRegister = useSelector((state) => state.userRegister);
    const { data:data, loading:registerLoading, error:registerError } = userRegister;
  
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(register(name,email,password,c_password));
    };

    useEffect(() => {
      if (userInfo) {
        navigate('/dashboard');
      }
    }, [userInfo]);

    useEffect(() => {
       if(error || registerError){
        Swal.fire({
            text: error || registerError,
            icon: "error"
        })
       }
    }, [error,registerError])
    

    return (
        <div>
            <Breadcrumb activePage="Register"/>

            <section className="login section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-12 col-xs-12">
                            <div className="login-form login-area">
                                <h3>
                                Register 
                                </h3>
                                <form role="form" className="login-form" onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-user"></i>
                                            <input type="text" name="name" value={name}  onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-user"></i>
                                            <input type="text" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} id="sender-email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-lock"></i>
                                            <input type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-lock"></i>
                                            <input type="password" name="c_password" value={c_password}  onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm Password"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkedall"/>
                                                <label className="custom-control-label" for="checkedall">By registering, you accept our Terms & Conditions</label>
                                        </div>
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

export default Register