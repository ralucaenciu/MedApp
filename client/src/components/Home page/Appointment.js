import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import "./Appointment.css";
import { createAppointment, allAppointments, checkAvailabilty } from "../auth";
import useDropdown from "./useDropdown";

const options = [
  "Add/Adhd",
  "Trauma and stroke",
  "Autism",
  "Anxiety and panic attacks",
  "Bronchial asthma",
  "Addictions and substance abuse",
  "Depression",
  "Chronic pain",
  "Epilepsy",
  "Sleep disorders",
  "Nervous,verbal or motor tics",
  "Learnings disorder",
  "Mood disorders",
  "Migraine,headache",
  "Dizziness",
];

const timedata=[
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
  "6:00 pm",
  "7:00 pm",

]

const doctors = ["Alexandru Radu", "Emma Cristescu", "Frida Addams"];


export default function Appointment({ user }) {
  const [mark, setappointments] = useState();
  const [appointment, setappointment] = useState({
    userID: user.userID,
    department: "",
    doctorName: "",
    appointmentDate: "",
    aptTime: ""
  });

  const getDoctor = () => {
    //get index
    let index = -1;
    options.map((item, i) => {
      if (item === Department) {
        index = i;
      }
    });

    return doctors[parseInt(index / 5)];
  };

  const [Department, ShowDepartment] = useDropdown("", options,"Consultancy Department");
  const [time, ShowTime] = useDropdown("", timedata,"Time");


  useEffect(() => {
    if (!mark) {
      allAppointments().then((data) => setappointments(data.Data.data));
    }
  }, []);

  useEffect(() => {
    let appoint = appointment;
    appoint.department = Department;
    appointment.doctorName = getDoctor();
    appoint.aptTime=time
    setappointment(appoint);
  }, [Department,time]);

  const [value, onChange] = useState(new Date());
  const [showForm, setShowForm] = useState(true);

  const show_Form = () => {
    setShowForm(!showForm);
  };

  const handleChange = (event) => {
    onChange(event);
  };
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
    success: false,
  });

  const clickSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false });

    checkAvailabilty({
      doctorName: appointment.doctorName,
      appointmentDate: appointment.appointmentDate,
      aptTime:appointment.aptTime
    })
      .then((d) => {
        console.log(d);
        if (d.Data.message !== "Doctor Not Available") {
          console.log(appointment)
          createAppointment(appointment).then((data) => {
            if (data.error) {
              setValues({ ...values, error: data.error, success: false });
            } else {
              setappointments([...mark, appointment]);
              setappointment({
                userID: user.userID,
                department: "",
                doctorName: "",
                appointmentDate: "",
                aptTime:""
              });
            }
          });
        } else {
          alert("Doctor not available");
        }
      })
      .catch((error) => {
        alert("Doctor not available");
      });
  };

  return (
    <section className="blogs" id="appointment">
      <h1 className="heading">
        Make an <span>Appointment</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <Link to="/home/appointment" className=" btn " onClick={show_Form}>
            Make an Appointment <span className="fas fa-plus"></span>
          </Link>
          {showForm && (
            <form onSubmit={clickSubmit}>
              <ShowDepartment />
              <input
                type="text"
                placeholder="Doctor Availability"
                className="formInput"
                value={appointment.doctorName}
                onChange={(e) =>
                  setappointment({ ...appointment, doctorName: e.target.value })
                }
              />
              <input
                type="date"
                className="formInput"
                placeholder="Date of Appointment"
                value={appointment.appointmentDate}
                onChange={(e) =>
                  setappointment({
                    ...appointment,
                    appointmentDate: e.target.value,
                  })
                }
              />
              
              <ShowTime
              // onChange={(e) =>
              //   setappointment({
              //     ...appointment,
              //     aptTime: e.target.value,
              //   })}
                />
              <input type="submit" value="submit" className="btn" />
            </form>
          )}
        </div>

        {mark && (
          <div className="box">
            <Calendar
              tileClassName={({ date, view }) => {
                for (var i = 0; i < mark.length; i++) {
                  if (
                    mark[i].appointmentDate ===
                    moment(date).format("YYYY-MM-DD")
                  ) {
                    return "content_date";
                  }
                }
              }}
              onChange={handleChange}
              value={value}
            />
          </div>
        )}
      </div>
    </section>
  );
}
