import React, { useEffect } from 'react';
import './LoginPage.css';
import googleIcon from './download.png'; // Ensure the correct path to your image

const LoginPage = () => {
    useEffect(() => {
        // Check if the token is present in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            // Store the token in local storage
            localStorage.setItem('jwtToken', token);
            // Redirect to the Onebox page
            window.location.href = '/onebox';
        }
    }, []);

    const handleGoogleLogin = () => {
        // Redirect to the Google login URL
        const googleLoginUrl = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000'; // Adjust the redirect URL to your frontend URL
        window.location.href = googleLoginUrl;
    };

    return (
        <div className="containerr">
            <header className="header">
                <h1 className="logo">REACHINBOX</h1>
            </header>
            <main className="main-contentt">
                <div className="login-box">
                    <h2>Create a new account</h2>
                    <button className="google-signup" onClick={handleGoogleLogin}>
                        <img src={googleIcon} alt="Google Icon" /> Sign Up with Google
                    </button>
                    <button className="signup-btn">Create an Account</button>
                    <p className="signin-link">Already have an account? <a href="#">Sign In</a></p>
                </div>
            </main>
            <footer className="footer">
                <p>© 2023 Reachinbox. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LoginPage;
