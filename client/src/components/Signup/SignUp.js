import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import './Signup.css';
import Navbar from '../Navbar/Navbar';
import Regs from '../images/registration.gif';
const Signup = () => {
    const [display,setDisplay]=useState("student");

  return (
   <>
   <div>
    <Navbar/>
    <div className="signup-container">
       {/* <img src={Regs} alt="Registration-gif" className="register-class"/>*/} 
        <div className="signup-container-box">
            <div className="signup-choose-buttons">
                <div onClick={()=>setDisplay("student")} className={display==="student"?"buttons-div-active":"buttons-div-inactive"}>Student</div>
                <div onClick={()=>setDisplay("recruiter")} className={display==="student"?"buttons-div-inactive":"buttons-div-active"}>recruiter</div>
                
            </div>
            {display==="student"?<StudentStructure/>:<RecruiterStructure/>}
        </div>
    </div>
   </div>
   </>
  )
}

const StudentStructure=()=>{
    const navigate=useNavigate();
    const [studentdata,setStudentdata]=useState({
        studentname:"",
        studentgmail:"",
        studentqualification:"",
        studentcollege:"",
        studentpercentage:"",
        studentyear:"",
        studentskills:"",
        studentpass:"",
        studentcnfrm:""
    });
    let name,value;
    const studentvals=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setStudentdata({...studentdata,[name]:value});
    }

    const sendstudent=async(e)=>{
        e.preventDefault();
        console.log(studentdata)
        const{studentname,studentgmail,studentqualification,studentcollege,studentpercentage,studentyear,studentskills,studentpass,studentcnfrm}=studentdata;
        if(studentname&&studentgmail&&studentpass&&studentcnfrm){
            if(studentpass===studentcnfrm){
                const data=await fetch('/studentregister',{
                    method:"Post",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        vals:studentdata
                    })
                });
                const res=await data.json();
                alert(res);
                navigate('/login');

            }
            else{
                alert("password and cnfrm should be same");
            }
        }
        else{
            alert("all fields are required");
        }
    }

    return(
        <>
        <div className="studentform">
        <h1>Student Register</h1>

        <div className="studentform-form">
       
        <form action="">
        {/*<label htmlFor="">Name:</label>*/}
        <input type="text" className="gmail-input-class-1" name='studentname' placeholder='enter name' value={studentdata.studentname} onChange={studentvals} />
        <br />
        <input type="text" className="gmail-input-class-1" name='studentgmail' placeholder='enter gmail' value={studentdata.studentgmail} onChange={studentvals}/><br />
        {/*<label htmlFor="">Qualification</label>*/}
        {/* <input type="text" className="gmail-input-class-1" name='studentqualification' placeholder='enter the qualification' value={studentdata.studentqualification} onChange={studentvals}/><br /> */}
        {/*<label htmlFor="">collegeName</label>*/}
        {/* <input type="text" className="gmail-input-class-1" name='studentcollege' placeholder='enter the college/university name' value={studentdata.studentcollege} onChange={studentvals}/><br /> */}
        {/*<label htmlFor="">Percentage</label>*/}
        {/* <input type="Number" className="gmail-input-class-1" name='studentpercentage' placeholder='enter percentage' value={studentdata.studentpercentage} onChange={studentvals}/><br /> */}
        {/*<label htmlFor="">Graduation Year</label>*/}
        {/* <input type="Number" className="gmail-input-class-1" name='studentyear' placeholder='enter Graduation year' value={studentdata.studentyear} onChange={studentvals}/><br /> */}
        
        {/* <div className="student-text-area">
            <label htmlFor="">Skills</label>
            <textarea name="studentskills" id="" cols="35" rows="3" value={studentdata.studentskills} onChange={studentvals} ></textarea><br />
       </div> */}
       {/*<label htmlFor="">password</label>*/}
       <input type="password" className="gmail-input-class-1" name='studentpass' placeholder='enter password' value={studentdata.studentpass} onChange={studentvals}/><br />
       {/*<label htmlFor="">Confirm password</label>*/}
       <input type="password" className="gmail-input-class-1" name='studentcnfrm' placeholder='enter confirm password' value={studentdata.studentcnfrm} onChange={studentvals}/><br />
        </form>
        </div>
       <button onClick={sendstudent} className="student-submit-button">Submit</button>
       <div className="already-account-login">
                <p>Already you have an account?<NavLink to={'/login'}>Login</NavLink></p>
                </div>
        </div>
        </>
    )
}
const RecruiterStructure=()=>{
    const navigate=useNavigate();
    const[recruiterdata,setRecruiterdata]=useState({
        Rname:"",
        Rgmail:"",
        Rcompanyname:"",
        Rpass:"",
        Rcnfrmpass:""
    });
    
    let name,value;
    const recruitervals=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setRecruiterdata({...recruiterdata,[name]:value});
    }

    const sendRecruiter=async(e)=>{
        e.preventDefault();
        const {Rname,Rgmail,Rcompanyname,Rpass,Rcnfrmpass}=recruiterdata;
        if(Rname&&Rgmail&&Rcompanyname&&Rpass&&Rcnfrmpass){
            if(Rpass===Rcnfrmpass){
                const data=await fetch('/recruiterregister',{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        vals:recruiterdata
                    })
                });
                const res=await data.json();
                alert(res);
                navigate('/login');

            }
            else{
                alert("password and cnfrm password should be same")
            }
        }
        else{
            alert("all fields are required");
        }
    }
    return(
        <>
        <div className="recruiterstucture">
            <h1>Recruiter Register</h1>
            <div className="studentform-form">
            <form action="">
                {/*<label htmlFor="">Name</label>*/}
                <input type="text" className="gmail-input-class-1" placeholder='enter name' name="Rname"  value={recruiterdata.Rname} onChange={recruitervals}/> <br/>
                {/*<label htmlFor="">Gmail:</label>*/}
                <input type="text" className="gmail-input-class-1" placeholder='enter company gmail' name='Rgmail' value={recruiterdata.Rgmail} onChange={recruitervals}/><br/>
                {/*<label htmlFor="">Comapny Name</label>*/}
                <input type="text" className="gmail-input-class-1" placeholder='enter company name' name='Rcompanyname' value={recruiterdata.Rcompanyname} onChange={recruitervals}/><br/>
                {/*<label htmlFor="">password</label>*/}
                <input type="password" className="gmail-input-class-1" placeholder='enter password' name='Rpass'  value={recruiterdata.Rpass} onChange={recruitervals}/><br/>
                {/*<label htmlFor="">confirm password</label>*/}
                <input type="password" className="gmail-input-class-1" placeholder='enter confirm password' name='Rcnfrmpass'  value={recruiterdata.Rcnfrmpass} onChange={recruitervals}/><br/>
            </form>
            <button onClick={sendRecruiter} className="student-submit-button">submit</button>
            <div className="already-account-login">
                <p>Already you have an account?<NavLink to={'/login'}>Login</NavLink></p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Signup