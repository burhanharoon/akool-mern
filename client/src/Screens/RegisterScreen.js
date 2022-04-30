import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveUserInfo } from '../actions/userActions'
import { useSelector } from 'react-redux'


const RegisterScreen = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const [confirmRegistration, setConfirmRegistration] = useState(false)
    const userLoggedIn = useSelector(state => state.userInfo)
    const handleRegister = (e) => {
        e.preventDefault()
        setLoading(true)
        if (password !== confirmPassword) {
            setWrongPassword(true)
            setLoading(false)
        } else {
            const data = {
                email,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                password
            }
            axios.post('https://api.akool.com/api/v1/public/register', data)
                .then((res) => {
                    // dispatch(saveUserInfo(data.user))
                    setLoading(false)
                    console.log(res);
                    // navigate('/')
                })
                .catch(err => console.log(err))
        }
    }

    // If ths user is already logged in then redirect to home screen
    if (userLoggedIn)
        return <Navigate to='/' />
    return <div className="hero-aera login-hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="login-wrap">
                        <div className="login-title">
                            <h3>Get Started</h3>
                            <p>10G free storage, 20 free processing api call, 1k free visits</p>
                        </div>
                        <div className="login-single-box">
                            <h6>Build content solution on Akool</h6>
                            <div className="login-icon">
                                <a href="true" data-aos="zoom-in" data-aos-delay={50} data-aos-duration={1100}><img src="/images/login/l1.png" alt="" /> Video</a>
                                <a href="true" data-aos="zoom-in" data-aos-delay={150} data-aos-duration={1300}><img src="/images/login/l3.png" alt="" /> 3D</a>
                                <a href="true" data-aos="zoom-in" data-aos-delay={200} data-aos-duration={1400}><img src="/images/login/l4.png" alt="" /> Rendering</a>
                            </div>
                        </div>
                        <div className="login-single-box">
                            <h6>Deploy easily with</h6>
                            <div className="login-icon">
                                <a href="true" data-aos="zoom-in" data-aos-delay={250} data-aos-duration={1500}><img src="/images/login/l5.png" alt="" /> Android</a>
                                <a href="true" data-aos="zoom-in" data-aos-delay={300} data-aos-duration={1600}><img src="/images/login/l6.png" alt="" /> iOS</a>
                                <a href="true" data-aos="zoom-in" data-aos-delay={350} data-aos-duration={1700}><img src="/images/login/l7.png" alt="" /> Web</a>
                                <a href="true" data-aos="zoom-in" data-aos-delay={400} data-aos-duration={1800}><img src="/images/login/l8.png" alt="" /> Unity</a>
                            </div>
                        </div>
                        <div className="login-single-box log-las">
                            <h6>Trusted by thousands of customers globally</h6>
                            <div className="login-icon">
                                <a href="true" data-aos="zoom-in" data-aos-delay={450} data-aos-duration={1900}><img src="/images/login/l9.png" alt="" /> Nreal</a>
                                <a href="true" data-aos="zoom-in" data-aos-delay={500} data-aos-duration={2000}><img src="/images/login/l10.png" alt="" /> DreamGlass</a>
                                <a href="true" data-aos="zoom-in" data-aos-delay={550} data-aos-duration={2100}><img src="/images/login/l11.png" alt="" /> Shopify</a>
                                <a href="true" data-aos="zoom-in" data-aos-delay={600} data-aos-duration={2200}><img src="/images/login/l12.png" alt="" /> Tencent</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="login-form rounded" data-aos="zoom-in" data-aos-delay={650} data-aos-duration={2300}>
            <div className="login-form-title">
                <h4>Register</h4>
            </div>
            <form onSubmit={(e) => { handleRegister(e) }}>
                <div className="login-inp">
                    <div className='d-flex gap-2 flex-column flex-sm-row'>
                        <input value={firstName} onChange={(e) => { setFirstName(e.target.value) }} type="text" placeholder="First Name" />
                        <input value={lastName} onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder="Last Name" />
                    </div>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" type="Email" placeholder="Your Email" />
                    <div className="input-group">
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" type="password" placeholder="Password" />
                    </div>
                    <div className="input-group mb-3">
                        <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} className="form-control" type="password" placeholder="Confirm Password" />
                    </div>
                    {wrongPassword &&
                        <div className="alert alert-warning " role="alert">
                            Passwords didn't match. Please try again!
                        </div>
                    }
                    {confirmRegistration &&
                        <div className="alert alert-success " role="alert">
                            Registration Successful!
                        </div>
                    }
                </div>
                <div className="form-group my-2">
                    <input type="checkbox" style={{ width: '1rem', height: '1rem' }} id="css" />
                    <label className='mx-2 text-white fs-5' htmlFor="css">Remember Me </label>
                </div>

                <div className="log-bt">
                    <button type="submit">
                        {loading && <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>}
                        Register
                    </button>
                </div>

                <div className="log-btn">
                    <p>Already have an account?</p>
                    <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    </div>

}

export default RegisterScreen