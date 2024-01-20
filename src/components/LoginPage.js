import React, { useState } from 'react';
import FormInput from './FormInput.js'

const LoginPage = ({ setLoginStatus }) => {

    const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
    const [submittedDetails, setSubmittedDetails] = useState({ username: "", password: "" });

    const { username, password } = loginDetails;
    console.log(loginDetails);

    function onChange(e) {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }
    function submitHandler(e) {
        e.preventDefault();        


        // make api call
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username,
                password: password,
                // expiresInMins: 60, // optional
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else throw new Error('bad credentials');
            })
            .then((responseBody) => {
                // save to local
                localStorage.setItem("userPrimaryDetails", JSON.stringify(responseBody));
                // update loginStatus
                setLoginStatus("SUCCESS");
            })
            .catch(e => {
                sessionStorage.setItem("loginError", "Invalid Credentials");
                setLoginStatus("ERROR")
            });

    }

    return (
        <div className="login-form-outer-container">

            <div className="login-form-header">
                <p className="greeting">Welcome back! 👋</p>
                <h1 className="heading">Sign in to your account</h1>
            </div>

            <form className="signup-form-main" onSubmit={(e) => submitHandler(e)}>

                <FormInput labelText="Username"
                    inputType="text"
                    name="username"
                    stateValue={username}
                    onChange={onChange}
                ></FormInput>

                <FormInput labelText="Password"
                    inputType="password"
                    name="password"
                    stateValue={password}
                    onChange={onChange}
                ></FormInput>

                <button type="submit" className="form-submit-button">CONTINUE</button>

            </form>

            <div className="forgot-password-container"><a href="#">Forgot your password?</a></div>
        </div>
    )
}

export default LoginPage;