import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

export default function Header({user}) {
  const navigate = useNavigate()
  const [value, setvalue] = useState(
    {
        firstName: user.firstName,
        lastName: user.lastName,
    })

    const { firstName, lastName} = value;

  const backToHome = (event) => {
    event.preventDefault();
    navigate('/')
  }

  return (
    <header className="header">
    <div className="user">
      <img  className='img_change' src={require('../image/user-139-256.png')} alt="" />
      <h3>{firstName} {lastName}</h3>
    </div>

    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/home/profile">My profile</Link>
      <Link to="/home/portfolio">Services</Link>
      <Link to="/home/appointment">Book Appointment</Link>
      <Link to="/home/blog">Learn to prevent</Link>
      <Link to="/home/journal">Journal</Link>
      <Link to="/home/workshops">Workshops</Link>

    </nav>
  </header>
  )
}
