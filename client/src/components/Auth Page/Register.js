import React, { useState } from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { signup } from '../auth';
import { Link } from 'react-router-dom';
import LandingHeader from '../Landing Page/LandingHeader';
export default function Register() {



  const navigate = useNavigate()
  // const [firstName, setfirstName] = useState('');
  // const [lastName, setlastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setCnfrm] = useState('');
  // const [phone, setPhone] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (firstName === "" || lastName === "" || email === "" || phone === "" ||
  //     password === "" || confirmPassword === "") {
  //     alert("Complete the Form before Submitting")
  //   } else {
  //     if (password === confirmPassword) {
  //       var obj = {
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: email,
  //         password: password,
  //         phone: phone
  //       }

  //       var data = []
  //       data.push(obj)
  //       alert("You have been Registered")
  //       navigate('/home', { email: email, password: password })
  //     } else {
  //       alert("Confirm Password does not matches")
  //     }
  //   }


  // }
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    cpassword: '',
    gender: '',
    dateOfbirth: '',
    error: '',
    success: false
  });
  console.log(values)
  const { firstName, lastName, phone, email, password, cpassword, gender, dateOfbirth, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = event => {
    event.preventDefault();
    
    setValues({ ...values, error: false });
    signup({ firstName, lastName, password, email, gender, phone, dateOfbirth }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        navigate('/login', { email: email, password: password })
        setValues({
          ...values,
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          password: '',
          cpassword: '',
          gender: '',
          dateOfbirth: '',
          error: '',
          success: true
        });
      }
    });
  };
  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );
  return (
    <div className="book pad_form_reg" id="book">
      <LandingHeader/>
      <div className="row">
        <form onSubmit={clickSubmit}>
          <h3>Create account</h3>
          <input type="text" placeholder="First Name" className="box" value={firstName} onChange={handleChange('firstName')} required />
          <input type="text" placeholder="Last Name" className="box" value={lastName} onChange={handleChange('lastName')} required />
          <input type="number" placeholder="Phone Number" className="box" value={phone} onChange={handleChange('phone')} required />
          <input type="email" placeholder="Email" className="box" value={email} onChange={handleChange('email')} required />
          <input type="password" placeholder="Password" className="box" value={password} onChange={handleChange('password')} required />
          <input type="password" placeholder="Confirm Password" className="box" value={cpassword} onChange={handleChange('cpassword')} required />
          <select className="box" name="gender" id="gender" value={gender} onChange={handleChange('gender')} required >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="date" placeholder="dateOfbirth" className="box" value={dateOfbirth} onChange={handleChange('dateOfbirth')} required />
          <input type="submit" value="submit" className="btn" />
        </form>
      </div>
      {showSuccess()}
      {showError()}
    </div>
  )
}
