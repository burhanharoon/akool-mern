import React, { useState } from 'react'

const LoginScreen = () => {
    const [show, setshow] = useState(false)
    const login = () => {
        localStorage.setItem("token", "123")
        setshow(true)
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center '>

            {/* <div class="mb-3">
                <label class="form-label">Email address:</label>
                <input type="email" class="form-control" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label class="form-label">Password:</label>
                <input type="password" class="form-control" />
            </div> */}
            <button onClick={login}>Login</button>
            {show &&
                <div>DONE</div>
            }
        </div>
    )
}

export default LoginScreen