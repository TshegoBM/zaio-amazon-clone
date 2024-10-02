import React, { useState, useRef, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn")

    
    if (user) {
        setIsLoggedIn(true);
    }
  }, []);


  const signIn = (e) => {
    e.preventDefault(); //Prevents refreshing when sign in button is clicked
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log("Email: ", enteredEmail + " Password: ", enteredPassword);
    localStorage.setItem('isLoggedIn', '1') 
    setIsLoggedIn(true);
  };
  const signOut = ()=> {
    setIsLoggedIn(false)
    localStorage.removeItem("isLoggedIn");
  }
  return (
    <div className="login">
        {isLoggedIn && (
            <p>You are logged in <button onClick={signOut}>Sign out</button></p>
        )}
        
      <Link to="/">
        <img
          src="http://my.linefor.com/wp-content/uploads/2015/08/amazon.png"
          alt="Amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            ref={emailRef}
          />
          <h5>Password</h5>
          <input
            type="password"
            ref={passwordRef}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
