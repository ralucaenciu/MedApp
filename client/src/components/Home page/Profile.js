import React, { useState } from 'react'
import { updateUser,signin,authenticate } from '../auth';
export default function Contact({ user }) {

    const [disabled, setDis] = useState(true);

    const handleClick = (event) => {
        event.preventDefault()
        setDis(!disabled)
    }
    const [values, setValues] = useState({
        userID: user.userID,
        appointments: user.appointments,
        dateOfbirth: user.dateOfbirth,
        email: user.email,
        firstName: user.firstName,
        gender: user.gender,
        journals: user.journals,
        lastName: user.lastName,
        password: user.password,
        phone: user.phone,
        quizzes: user.quizzes,
        error: false,
        success: false
    });

    const handleChange = (e, name) => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };
    const { userID,firstName, lastName, phone, email, gender, password, dateOfbirth, error, success } = values;

    const clickSubmit = event => {
        event.preventDefault();

        setValues({ ...values, error: false });
        updateUser(userID,{ firstName, lastName, password, email, gender, phone, dateOfbirth }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                signin({ email, password }).then(data => {
                    if (data.error) {
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
                setValues({
                    ...values,
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
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
            Profile Updated
        </div>
    );


    return (
        <section className="book" id="profile">
            <h1 className="heading"><span>My</span> Profile</h1>

            <div className="row ">
                <div className="image">
                    <img src={require('../image/fresh.jpeg')} alt="" />
                </div>
                {/* <div className="box"> */}

                <form onSubmit={clickSubmit}>
                    <div class="input-container">
                        <i class="fa fa-user icon icon-3x"></i>
                        <input class="input-field" type="text" placeholder="First Name" disabled={disabled} value={firstName} onChange={e => handleChange(e, 'firstName')} required />
                    </div>
                    <div class="input-container">
                        <i class="fa fa-user icon icon-3x"></i>
                        <input class="input-field" type="text" placeholder="Last Name" disabled={disabled} value={lastName} onChange={e => handleChange(e, 'lastName')} required />
                    </div>
                    <div class="input-container">
                        <i class="fa fa-phone icon icon-3x"></i>
                        <input class="input-field" type="text" placeholder="Phone" disabled={disabled} value={phone} onChange={e => handleChange(e, 'phone')} required />
                    </div>
                    <div class="input-container">
                        <i class="fa fa-envelope icon icon-3x"></i>
                        <input class="input-field" type="text" placeholder="Email" disabled={disabled} value={email} onChange={e => handleChange(e, 'email')} required />
                    </div>
                    <div class="input-container">
                        <i class="fa fa-calendar icon icon-3x"></i>
                        <input class="input-field" type="text" placeholder="Birthday" disabled={disabled} value={dateOfbirth} onChange={e => handleChange(e, 'dateOfbirth')} required />
                    </div>
                    <div class="input-container">
                        <i class="fa fa-venus-mars icon icon-3x"></i>
                        <input class="input-field" type="text" placeholder="Gender" disabled={disabled} value={gender} onChange={e => handleChange(e, 'gender')} required />
                    </div>
                    <input type="submit" value="Save" className="btn" disabled={disabled} style={{ margin: "5px" }} />
                    <input type="button" value="Edit" className="btn" onClick={handleClick} />
                </form>
                {/* </div> */}
            </div>
        {showError()}
        {showSuccess()}

        </section>
    )
}
