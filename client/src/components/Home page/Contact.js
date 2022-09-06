import React, { useState } from "react";
import { ReactComponent as Logo } from "../image/book-img-1.svg";
import Popup from "reactjs-popup";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || number === "" || date === "") {
      alert("Field is Empty. Fill form completely");
    } else {
      alert("Thanks for making an appointment");
    }
  };

  return (
    <section className="book" id="book">
      <h1 className="heading">
        <span>Make a</span> Request
      </h1>

      <div className="row">
        <div className="image">
          <Logo />
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Online request</h3>
          <input
            type="text"
            placeholder="your name"
            className="box"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="your number"
            className="box"
            onChange={(e) => setnumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="your email"
            className="box"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="date"
            className="box"
            onChange={(e) => setDate(e.target.value)}
          />

          <input type="submit" value="submit" className="btn" />
        </form>
      </div>
    </section>
  );
}
