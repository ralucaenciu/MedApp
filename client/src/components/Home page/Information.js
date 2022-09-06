import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import "./Appointment.css";
import Chart from "react-apexcharts";
import { createAppointment, userbyId, dltAppointment } from "../auth";
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import LineChart from "./LineChart";

export default function Information({ user }) {
  const navigate = useNavigate();
  const [quizMark, setData] = useState(false);

  const quizStart = (e) => {
    e.preventDefault();
    setData(!quizMark);
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

  const [userData, setUserData] = useState({
    labels: values.quizzes.map((data) => data.quizDate),
    datasets: [
      {
        label: "Users Gained",
        data: values.quizzes.map((data) => data.score),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const getById = async () => {
      const fromDb = await userbyId(user.userID);
      setValues(fromDb.Data.data);
      setUserData({
        labels: fromDb.Data.data.quizzes.map((data) => data.quizDate),
        datasets: [
          {
            label: "Quiz Scores",
            data: fromDb.Data.data.quizzes.map((data) => data.score),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    };
    getById();
  }, []);

  const aptDelete = async (id) => {
    const res = await dltAppointment(id);
    if (res.Status.code == 200) {
      alert("Appointment Deleted");
      window.location.reload(false);
      setValues([...values]);
    } else {
      alert("Error on Deleting Appointment");
    }
  };

  const scores = values.quizzes.map((data, id) => {
    return (
      <tr>
        <td>
          <h3 key={id}>{data.score}</h3>
        </td>
        <td>
          <h3 key={id}>{data.quizDate}</h3>
        </td>
      </tr>
    );
  });

  const apt = values.appointments.map((data, id) => {
    return (
      <div className="box">
        <div className="image">
          <img src={require("../image/Doctor-PNG.png")} alt="" />
        </div>
        <div className="content">
          <div className="btn">
            <a>
              {" "}
              <i className="fas fa-calendar"></i> {data.appointmentDate}{" "}
            </a>
          </div>
          <h3>Dr {data.doctorName}</h3>
          <p>Consultancy: {data.department}</p>

          <div
            className="btn dlt"
            onClick={() => {
              aptDelete(data.appointmentsID);
            }}
          >
            <a>
              {" "}
              <i className="fas fa-trash-alt"></i> Delete{" "}
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {values && (
        <section className="blogs">
          <h1 className="heading">
            <span>Hello </span>
            {values.firstName} {values.lastName}
          </h1>
          <div className="box-container">
            <div className="box">
              <div className="content">
                <h3>Take a quiz and measure your social anxiety</h3>
                <a href="#" className="btn" onClick={quizStart}>
                  Start Quiz <span className="fas fa-chevron-right"></span>
                </a>
                <br></br>
                {quizMark && <Quiz />}
                <div
                  style={{
                    width: 700,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <LineChart chartData={userData} />
                </div>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>
                        <h3>Score</h3>
                      </th>
                      <th>
                        <h3>Date</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{scores}</tbody>
                </table>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <h3>Appointments</h3>
          {values.appointments.length == 0 ? (
            <h3>No Appointments</h3>
          ) : (
            <div className="box-container">{apt}</div>
          )}
        </section>
      )}
    </>
  );
}
