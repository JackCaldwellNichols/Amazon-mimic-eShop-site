import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth } from "../Firebase";
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth';


import "../../styles/login.css";



const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const history = useNavigate()

const signIn = e => {
    e.preventDefault(); 
        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
            history("/")
        })
        .catch(error => alert(error.message))
}

const createAccount = e => {
    e.preventDefault(); 
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if (auth) {
                history("/")
            }
        })
        .catch(error => alert(error.message))
}



    return (
        <div className="login">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="login_logo">
                    <StorefrontIcon className="login_logo_image" fontSize="large"/>
                    <h2 className="login_logo_title">eShop</h2>
                </div>
            </Link>

            <div className="login_container">
                <form>
                    <h1>Sign In</h1>
                    <h5>Email</h5>
                    <input type = "text" placeholder = "Email" onChange = {e => setEmail(e.target.value)} value={email} />

                    <h5>Password</h5>
                    <input type = "password" placeholder = "Password" onChange = {e => setPassword(e.target.value)} value={password} />

                    <button type="submit" className="login_button" onClick={signIn}>Sign in</button>

                </form>
                <p>Don't have an account?</p>
                <button type="submit" className="create_account_button" onClick={createAccount}>Create account</button>
            </div>
        </div>
    )

}

export default Login;