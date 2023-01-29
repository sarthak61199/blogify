import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const initialRegVal = {
    name: "",
    email: "",
    password: "",
  };
  const [regVal, setRegVal] = useState(initialRegVal);
  const [error, setError] = useState({});
  const handleChange = (e) => {
    setRegVal({
      ...regVal,
      [e.target.name]: e.target.value,
    });
  };
  const validation = () => {
    let isValid = true;
    let valid = {};
    if (regVal.name === "" || regVal.name.length === 0) {
      valid["name"] = "Name is Requried.";
      isValid = false;
    }
    if (regVal.email === "" || regVal.email.length === 0) {
      valid["email"] = "Email is Requried.";
      isValid = false;
    }
    if (regVal.password === "" || regVal.password.length === 0) {
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
        <h3>Sign up</h3>
        <label htmlFor="name">Name</label>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="off"
            autoFocus
            value={regVal.name}
            onChange={handleChange}
          />
          <p className="error">{error?.name}</p>
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            value={regVal.email}
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
            value={regVal.password}
            onChange={handleChange}
          />
          <p className="error">{error?.password}</p>
        </div>
        <input type="submit" value="Register" />
        <p className="or-text">or</p>
        <p className="bottom-text">
          Already a User?{" "}
          <Link to="/login" className="cta">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
