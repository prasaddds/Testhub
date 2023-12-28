import React, { useState,useEffect, useContext } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { Mycontext } from '../Context/ContextApi';
import checkmark from '../images/checkmark.png';
import './Navbar.css';
import cross from '../images/cross .png';
import menu from '../images/menu.png';
const Navbar = () => {
  const navigate=useNavigate();
  const {authcheck,setAuthcheck}=useContext(Mycontext);
  const [status,setStatus]=useState(false);
  const [setsignature,setsignaturefunc]=useState(false);
  const [cat,setCat]=useState("");


  const Logout=async()=>{
    const log=await fetch('/logout',{
      method:"Get",
      headers:{
        'content-type':'application/json'
      }
    });
    const res=await log.json();
    navigate('/login');
    setAuthcheck(false);
    alert(res.msg);
  }

  const check=async()=>{
    const checking=await fetch('/check',{
      method:"get",
      headers:{
        "Active":"application/json",
        "Content-Type":"application/json"
      }
    });
    const res= await checking.json()
    if( res.val==="admin" && res.status===200){
      setCat("admin");
      setStatus(true);
    }
    else if( res.val==="student" &&res.status===200){
      setStatus(true);
      setCat("student");
    }
    else if( res.val==="recruiter" && res.status===200){
      setCat("recruiter");
      setStatus(true);
    }
  }
  useEffect(()=>{
    check();
  },[]);

  
 
  return (
    <div className="whole-navbar-containes">
    <div className="navbar-container">
        <div className="logo">
            <img src={checkmark} alt="logo-img" className="navbar-logo-img"/>
            <h1 className="logo-header"><NavLink to={'/'}>TestHub</NavLink></h1>
        </div>
      <div className='options'>
        <ul>
            <li><NavLink to={'/'} >home</NavLink></li>
            <li><NavLink to={'/about'} >about</NavLink></li>
            {
              cat==="recruiter"?<li><NavLink to={'/addtests'}>AddTests</NavLink></li>
              :cat==="student"?<li><NavLink to={'/displayAllTests'}>Taketest</NavLink></li>
              :cat==="admin"?<li><NavLink to={'/adminpanel'}>Adminpanel</NavLink></li>
              :<li><NavLink to={'/tests'}>Tests</NavLink></li>
            }
            {
              status&&cat==="student"||status&&cat==="recruiter"?<li><NavLink to={'/profile'}>Profile</NavLink></li>:""
            }
            {
              status?<li onClick={Logout}>logout</li>:<li><NavLink to={'/login'} >Login</NavLink></li>
            }
        </ul>
      </div>
      <div className='options-inresponse'>
        
        <img src={menu} alt="menu" className={setsignature===true?'cross-menu-icon':'menu-three-lines-icon'} onClick={()=>setsignaturefunc(!setsignature)}/>
        <img src={cross} alt="cross" className={setsignature===true?'menu-three-lines-icon':'cross-menu-icon'} onClick={()=>setsignaturefunc(!setsignature)}/>
       
      </div>
    </div>
        <div className={setsignature===true?'display-response-navbar':'non-display-navbar'}>
        
        <ul>
            <li onClick={()=>setsignaturefunc(!setsignature)}><NavLink to={'/'} >home</NavLink></li>
            <li><NavLink to={'/about'} onClick={()=>setsignaturefunc(!setsignature)}>about</NavLink></li>
            {
              cat==="recruiter"?<li><NavLink to={'/addtests'}>AddTests</NavLink></li>
              :cat==="student"?<li><NavLink to={'/Taketest'}>Taketest</NavLink></li>
              :cat==="admin"?<li><NavLink to={'/adminpanel'}>Adminpanel</NavLink></li>
              :<li><NavLink to={'/tests'}>Tests</NavLink></li>
            }
            {
              status&&cat==="student"||status&&cat==="recruiter"?<li><NavLink to={'/profile'}>Profile</NavLink></li>:""
            }
            {
              status?<li onClick={Logout}>logout</li>:<li><NavLink to={'/login'} onClick={()=>setsignaturefunc(!setsignature)}>Login</NavLink></li>
            }
        </ul>
        </div>
    </div>

  );
}


export default Navbar;