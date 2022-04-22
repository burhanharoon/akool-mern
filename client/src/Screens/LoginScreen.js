import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const [show, setshow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        axios.post('https://api.akool.com/api/v1/public/login', data).then(res => console.log(res))
            .catch(err => console.log(err))
        // localStorage.setItem("token", "123")
        setshow(true)
    }
    return (
        <div className="hero-aera login-hero">
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
            <div className="login-form" data-aos="zoom-in" data-aos-delay={650} data-aos-duration={2300}>
                <div className="login-form-title">
                    <h4>Login</h4>
                </div>
                <form action="true">
                    <div className="login-inp">
                        <input value={email} name="email" type="Email" placeholder="Your Email" />
                        <div className="input-group mb-3">
                            <input value={password} className="form-control" name="password" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><i class="fa-solid fa-eye"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="css" />
                        <label htmlFor="css">Remember Me </label>
                    </div>
                    <div className="form-group">
                        <div className="icons">
                            {/* <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_KEY}
                                render={renderProps => (
                                    <i onClick={renderProps.onClick} className="fab fa-google google icon"></i>
                                )}
                                onSuccess={this.handleLogin}
                                onFailure={this.failLogin}
                                cookiePolicy={'single_host_origin'}
                            />
                            <FacebookLogin
                                fields="name,email,picture"
                                appId={process.env.REACT_APP_FB_APP_ID}
                                autoLoad={false}
                                render={renderProps => (
                                    <i onClick={renderProps.onClick} className="ml-2 fab fa-facebook-f facebook icon"></i>
                                )}

                                callback={this.responseFacebook}
                            /> */}

                            {/* <i className="ml-2 fab fa-facebook-f facebook icon"></i> */}
                        </div>
                    </div>
                    <div className="log-bt">
                        <button type="button" >Login</button>
                    </div>
                    <div className="log-btn">
                        <p>Don't have an account?</p>
                        <Link to="register">Register</Link>
                        <Link to="forget" className="ml-2">Forget Password</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginScreen