import React from 'react'

const LoginScreen = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center '>

            <div class="mb-3">
                <label class="form-label">Email address:</label>
                <input type="email" class="form-control" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label class="form-label">Password:</label>
                <input type="password" class="form-control" />
            </div>
        </div>
    )
}

export default LoginScreen