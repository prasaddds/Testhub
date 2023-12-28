import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../Context/ContextApi';
import exportFromJSON from 'export-from-json'
import './Filteration.css';

const Filteration = () => {
  const[list,setList]=useState([]);
  const[filter,setFilter]=useState([]);
  const[shwfilter,setShowfilter]=useState(false);
  const {authcheck}=useContext(Mycontext);
  const mydata=async()=>{
    const data=await fetch(`/mytestsdata/${authcheck._id}`,{
      method:"get",
      headers:{
        "content-type":"application/json"
      }
    });
    const res=await data.json();
    if(res.status==200){
      setList(res.testdata);
    }
  }
  useEffect(()=>{
    mydata();
  },[])
  const filterstd=async(x)=>{
    const data=await fetch(`/liststds/${x}`,{
      method:"GET",
      headers:{
          "content-type":"application/json"
      }
  });
  const res=await data.json();
  if(res){
    setFilter(res.data);
    console.log(res.data);
    setShowfilter(true);
  }
  }
  const downloaddata=()=>{
    const fileName="Studentscores";
    const exportType=exportFromJSON.types.csv;
    const data=filter;
    exportFromJSON({data,fileName,exportType});
  }
  return (
   <>
   <div className='filter-container'><h1>Filteration</h1></div>
   <div className="filteration-two-parts">
   <div>
    {
      list&&list.map((data)=>{
        return(
          <>
          <h2>{data.testname}</h2>
          <button onClick={()=>filterstd(data._id)} className="filteration-btns">filter</button>
          </>
        )
      })
    }
   </div>
   <div>
   {
    filter.length==0? "No one took the test":
    <>
      <button onClick={downloaddata} className="filteration-btns">Download data</button>
    {
          shwfilter&&filter.map((data)=>{
            return(
              <>
                  <div className='filter-each-div-con'>
                  <h2>{data.student_name}</h2>
                  <h2>{data.student_gmail}</h2>
                  <h2>{data.score}</h2>
                 </div>
              </>
            )
          })
    }
    </>

   }
   </div>
   </div>
   </>
  )
}

export default Filteration