import React, { useState } from "react";
import "./Modal.css";

export default function Modal1() {
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
            {/* <h2>probaaaaaaaaaa</h2> */}
            <p>
              A stroke is a medical condition in which poor blood flow to the
              brain causes cell death.There are two main types of stroke:
              ischemic, due to lack of blood flow, and hemorrhagic, due to
              bleeding. Both cause parts of the brain to stop functioning
              properly. Signs and symptoms of a stroke may include an inability
              to move or feel on one side of the body, problems understanding or
              speaking, dizziness, or loss of vision to one side. Signs and
              symptoms often appear soon after the stroke has occurred.
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
