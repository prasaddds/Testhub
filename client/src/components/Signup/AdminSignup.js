import {React,useState} from 'react'
import Navbar from '../Navbar/Navbar'
const AdminSignup = () => {
    const [details,setDetails]=useState({
        name:"",
        gmail:"",
        contact:"",
        pass:"",
        cnfrmpass:""
    });
    let name,value;
    const HandleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setDetails({...details,[name]:value})
    }
    const RegisterData=async(e)=>{
        e.preventDefault();
        if(details.name && details.gmail && details.contact && details.pass && details.cnfrmpass){
           if(details.pass===details.cnfrmpass){
            const RegisterUser=await fetch('/AdminRegister',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:details.name,gmail:details.gmail,contact:details.contact,pass:details.pass,cnfrmpass:details.cnfrmpass
                })
            });
            const x=await RegisterUser.json();
            alert(x);
           }
           else{
            alert("password and confirm password should be same");
           }
        }
        else{
            alert("all fields are required");
        }
    }
  return (
    <div>
        <Navbar/>
        <div className="signup">
            <h1>Admin</h1>
            <form action="">
            <label htmlFor="">name</label>
                <input type="text"  placeholder='enter name' name="name" value={details.name} onChange={HandleInputs}/>
                <label htmlFor="">gmail</label>
                <input type="text" placeholder='enter gmail' name='gmail' value={details.gmail} onChange={HandleInputs}/>
                <label htmlFor="">contact</label>
                <input type="number"  placeholder='enter contact num' name='contact' value={details.contact} onChange={HandleInputs}/>
                <label htmlFor="">password</label>
                <input type="password" placeholder='enter password' name='pass' value={details.pass} onChange={HandleInputs}/>
                <label htmlFor="">cnfrm password</label>
                <input type="password" placeholder='enter cnfrm password' name='cnfrmpass' value={details.cnfrmpass} onChange={HandleInputs}/>
            </form>
            <button onClick={RegisterData}>signup</button>
        </div>
    </div>
  )
}

export default AdminSignup