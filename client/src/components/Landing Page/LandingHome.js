import React from 'react'
import { ReactComponent as Logo } from '../image/home-img-1.svg';
import { useNavigate } from 'react-router-dom';

export default function LandingHome() {
  const navigate=useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();
      navigate('/login')
  }

  const handleReg = (event) => {
    event.preventDefault();
      navigate('/register')
  }

  return (
    <section className="home" id="home">
      <div className="image">
        <Logo />
      </div>

      <div className="content">
        <h3>Live your todays</h3>
        <p>
          The Neurofeedback Institute Romania has the support and guarantee of
          the Othmer Method - international leader in neurofeedback. We are
          exclusive distributors of BeeMedic systems approved by the European
          Union.
        </p>
        <a href="#" className="btn" onClick={handleLogin}>
          Log in <span className="fas fa-chevron-right"></span>
        </a>
        <a href="#" className="btn" onClick={handleReg}>
          Register <span className="fas fa-chevron-right"></span>
        </a>
      </div>
    </section>

  )
}