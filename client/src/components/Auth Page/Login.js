import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import data from "./data.js"
import LandingHeader from '../Landing Page/LandingHeader';
import { signin, authenticate, isAuthenticated } from '../auth';

export default function Login() {
  const Navigate = useNavigate()

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  // const { user } = isAuthenticated();
// console.log(isAuthenticated())
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then(data => {
      if (data.Status.code!=200) {
        alert(data.Status.message)
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true
          });
        });
      }
    });
  };
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      window.location.reload();
      return Navigate('/home');
    }
  };
  return (

    <div className="book pad_form" id="book">
      <LandingHeader/>
      <div className="row">
        <form >
          <h3>Login</h3>
          <input type="email"
            placeholder="Email"
            className="box"
            onChange={handleChange("email")}
            value={email}
          />
          <input type="password"
            placeholder="Password"
            className="box"
            onChange={handleChange("password")}
            value={password} />

          <button type="button" className="btn" onClick={clickSubmit}>
            Login
          </button>
          <h4 className=''>Or Create New Account</h4>
          <Link to="/register" className="btn">
            Register
          </Link>

        </form>
      </div>
      {showLoading()}
      {showError()}
      {redirectUser()}
    </div>
  )
}
