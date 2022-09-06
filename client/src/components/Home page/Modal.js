import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn">
        read more <span className="fas fa-chevron-right"></span>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {/* <h2>ADHD</h2> */}
            <p>
              The symptoms of attention deficit hyperactivity disorder (ADHD)
              can be categorised into 2 types of behavioural problems:
              inattentiveness (difficulty concentrating and focusing)
              hyperactivity and impulsiveness Many people with ADHD have
              problems that fall into both these categories, but this is not
              always the case. For example, around 2 to 3 in 10 people with the
              condition have problems with concentrating and focusing, but not
              with hyperactivity or impulsiveness. This form of ADHD is also
              known as attention deficit disorder (ADD). ADD can sometimes go
              unnoticed because the symptoms may be less obvious.
            </p>
            <button className="btn" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
