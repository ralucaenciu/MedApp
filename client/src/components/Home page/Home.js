import React from "react";
import Header from "./Header";
import "./Home.css";
import "./Home.scss";
import { signout } from "../auth";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Quiz from "./Quiz";

export default function Home({ ChildComponent }) {
  const navigate = useNavigate();
  
  const handleLogout = (event) => {
    event.preventDefault();
    signout()
    //alert("You are Logged Out");
    window.location.reload();
    navigate("/");
  };

  // my code area
  const data = isAuthenticated();
  
  
  
  return (
    <div className="homePad">
      <Header user={data.Data.data} />
      <div
        id="theme-toggler"
        className="fas fa-sign-out-alt"
        onClick={handleLogout}
      ></div>

      {/* <div className="headingWrapper" id="home">
        <a href="#" className="header_text header_text--pushDown">
          "If you take care of your mind, you take care of the world."
          <h5>Arianna Huffington</h5>
        </a>
      </div> */}
      <ChildComponent user={data.Data.data}/>
      
    </div>
  );
}
