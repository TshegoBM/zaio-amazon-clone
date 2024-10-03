import React, { useState, useEffect, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthContext from "../context/authContext";
import ShoppingContext from "../context/shopping/shoppingContext";
import shoppingContext from "../context/shopping/shoppingContext";

const reducer = (state, action) => {
    const {basket, user} = shoppingContext;
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }

  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }

  return {emailValue: "", passwordValue: ""};
};

const Login = () => {
    const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  // useReducer for managing form state
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });

  const { emailValue: email, passwordValue: password } = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
      setFormIsValid(email.includes("@") && password.trim().length > 6);
    }, 500);

    return () => {
        console.log("CLEANUP HERE")
      clearTimeout(identifier); // Cleanup on each render
    };
  }, [email, password]);

  // Handlers for email and password changes
  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  };

  // Sign in handler
  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email: ", state.emailValue);
    console.log("Entered Password: ", state.passwordValue);
    ctx.onLogin(state.emailValue, state.passwordValue)
  };

  return (
    <div className="login">
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
            value={email}
            onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          <button
            type="submit"
            className="login_signInButton"
            onClick={signIn}
          >
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
