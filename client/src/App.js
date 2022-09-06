import './App.css';
import './components/Home page/Home'
import Home from './components/Home page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth Page/Login';
import Register from './components/Auth Page/Register';
import LandingPage from './components/Landing Page/LandingPage';
import Appointment from './components/Home page/Appointment';
import Profile from './components/Home page/Profile';
import Portfolio from './components/Home page/Portfolio';
import Contact from './components/Home page/Contact';
import Blog from './components/Home page/Blog';
import Workshop from './components/Home page/Workshop';
import Information from './components/Home page/Information';
import Journal from './components/Home page/Journal';
import { isAuthenticated } from './components/auth';
import Quiz from './components/Home page/Quiz';
function App() {

  // console.log(isAuthenticated())

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          {isAuthenticated()&&<Route path='/home/' element={<Home ChildComponent={Information} />}></Route>}
          {isAuthenticated()&&<Route path='/home/appointment' element={<Home ChildComponent={Appointment} />}></Route>}
          {isAuthenticated()&&<Route path='/home/profile' element={<Home ChildComponent={Profile} />}></Route>}
          {isAuthenticated()&&<Route path='/home/portfolio' element={<Home ChildComponent={Portfolio} />}></Route>}
          {isAuthenticated()&&<Route path='/home/blog' element={<Home ChildComponent={Blog} />}></Route>}
          {isAuthenticated()&&<Route path='/home/journal' element={<Home ChildComponent={Journal} />}></Route>}
          {isAuthenticated()&&<Route path='/home/quiz' element={<Home ChildComponent={Quiz} />}></Route>}
          {isAuthenticated()&&<Route path='/home/workshops' element={<Home ChildComponent={Workshop} />}></Route>}

          <Route path="*" element={<Login />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
