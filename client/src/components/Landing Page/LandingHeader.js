import React from 'react'
import { Link } from 'react-router-dom'
export default function LandingHeader() {
  return (

<header className="headerland">
      <Link to="/" className="logo"><img src={require('../image/braon.png')} alt="" /> Tysk </Link>

      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#review">Review</Link>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  )
}