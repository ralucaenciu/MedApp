import React, { useState } from 'react'
import moment from 'moment';
import { createJournal, userJournal } from '../auth';
import { Link } from 'react-router-dom';
export default function Journal({ user }) {
    let yourDate = new Date();
    const [dataB, setDataB] = useState();

    if (!dataB) {
        userJournal(user.userID).then(
            data => setDataB(data.Data.data)
        )
    }
    const [journal, setJournal] = useState({
        date: yourDate.toISOString().split('T')[0],
        details: "",
        userID: user.userID
    });
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

    // previous code
    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState('');
    const [showJor, setJor] = useState(false);
    const [bodyShow, setbodyShow] = useState('');


    const show_Form = () => {
        setShowForm(!showForm);
    }

    const showjournal = (event) => {
        var flag = false
        for (var i = 0; i < dataB.length; i++) {
            moment(date).format("YYYY-MM-DD")
            if (dataB[i].date === moment(date).format("YYYY-MM-DD")) {
                flag = true
                setbodyShow(dataB[i].details)
                setJor(!showJor)
            }
        }

        if (!flag) {

            alert("No result Found")
        }
    }

    const clickSubmit = event => {
        event.preventDefault();

        setValues({ ...values, error: false });
        createJournal(journal).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setDataB([
                    ...dataB,
                    journal
                ])
                setJournal({
                    date: yourDate.toISOString().split('T')[0],
                    details: "",
                    userID: user.userID
                })
            }
        });
    };
    return (
        <section className="blogs" id="journal">
            <h1 className="heading">My <span>Journals</span></h1>

            <div className="box-container">
                <div className="box">
                    <Link to="/home/journal" className=' btn ' onClick={show_Form}>
                        Create Journal <span className='fas fa-plus' ></span>
                    </Link>
                    {showForm && (
                        <div className='text_div' >
                            <textarea value={journal.details}  cols="30" rows="5" onChange={(e) => setJournal({ ...journal, details: e.target.value })}>
                            </textarea>
                            <br></br>
                            <button className='btn' onClick={clickSubmit}>Save</button>
                        </div>
                    )}
                </div>

                <div className="box">
                    <h3 >
                        Show Journal
                    </h3>
                    <input type="date" className="formInput" placeholder='Date of Appointment' onChange={(e) => setDate(e.target.value)} />
                    <button className='btn' onClick={showjournal}>Find Journal</button>
                    {showJor && (
                        <div >
                            <textarea  className='text_div'  cols="30" rows="5" value={bodyShow}>
                            </textarea>
                        </div>
                    )}
                </div>


            </div>
        </section>
    )
}
