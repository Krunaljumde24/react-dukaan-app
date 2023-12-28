import React, { useContext, useState } from 'react'
import './App.css'

import UserContext from './context/UserContext';

function Login() {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleChange = (event) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value)
        }

        if (event.target.name === 'password') {
            setPassword(event.target.value)
        }
    }

    const handleSubmit = () => {
        // set the value of username in context
        setLoggedInUser(username);
    }
    return (
        <div className='login-form'>
            <h5>Login</h5>
            <label htmlFor="uName">Enter Username</label>
            <br />
            <input
                id='uName'
                type='text'
                name='username'
                value={username}
                onChange={(event) => handleChange(event)}
            />
            <br />
            <label htmlFor="uPass">Enter Password</label>
            <br />
            <input
                id='uPass'
                type='password'
                name='password'
                value={password}
                onChange={(event) => handleChange(event)}
            />
            <br />
            <br />
            <button type='button' className='btn btn-sm btn-primary'
                onClick={handleSubmit}
            >
                Login
            </button>
            {/* <p> New to app? <Link to="/signup">Sign Up</Link> </p> */}
        </div>
    )
}

export default Login