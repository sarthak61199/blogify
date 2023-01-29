import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const initialLoginVal = {
    email: "",
    password: "",
  };
  const [loginVal, setLoginVal] = useState(initialLoginVal);
  const [error, setError] = useState({});
  const handleChange = (e) => {
    setLoginVal({
      ...loginVal,
      [e.target.name]: e.target.value,
    });
  };
  const validation = () => {
    let isValid = true;
    let valid = {};
    if (loginVal.email === "" || loginVal.email.length === 0) {
      valid["email"] = "Email is Requried.";
      isValid = false;
    }
    if (loginVal.password === "" || loginVal.password.length === 0) {
      valid["password"] = "Password is Requried.";
      isValid = false;
    }
    setError(valid);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
    }
  };
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            autoFocus
            value={loginVal.email}
            onChange={handleChange}
          />
          <p className="error">{error?.email}</p>
        </div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="new-password"
            value={loginVal.password}
            onChange={handleChange}
          />
          <p className="error">{error?.password}</p>
        </div>
        <input type="submit" value="Login" />
        <p className="or-text">or</p>
        <p className="bottom-text">
          Need an Account?{" "}
          <Link to="/register" className="cta">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
