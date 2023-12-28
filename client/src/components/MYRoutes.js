import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import AdminSignup from './Signup/AdminSignup'
import Signup from './Signup/SignUp'
import Profile from './profile/Profile.js'
import Test from './TEST/Test'
import About from './About/About.js';
import Testsdisplay from './TakeTest/Testsdisplay'
import LogoutTest from './LogoutTest/LogoutTest.js';
import Taketest from './TakeTest/Taketest'
import Navbar from './Navbar/Navbar'
const MYRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/tests' element={<LogoutTest/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/AdminSignup' element={<AdminSignup/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/addtests' element={<Test/>}></Route>
            <Route path='/displayAllTests' element={<Testsdisplay/>}></Route>
            <Route path='/start-test' element={<Taketest/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MYRoutes