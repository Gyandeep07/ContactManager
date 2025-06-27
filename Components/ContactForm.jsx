import React, { useState } from "react";
export default function ContactForm({addContact}){

  const [contactdata,setcontactdata]=useState({name:"",email:""})
  function handledata(e){
    
    if(e.target.name==="name"){
       setcontactdata({...contactdata,name:e.target.value})
    }
    else{
      setcontactdata({...contactdata,email:e.target.value})
    }
  }
  function handlesubmit(e){
    e.preventDefault();
if(contactdata.name === "" || contactdata.email === ""){
  alert("Please fill all the details")
  return ;
}

addContact(contactdata)
setcontactdata({name:"",email:""})

  }
return(
 <div className="d-flex justify-content-center bg-light py-5 ">
        <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <h3 className="text-center mb-4">ADD CONTACT</h3>
          
          <form >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">NAME</label>
              <input type="text" onChange={handledata} value={contactdata.name} name='name' className="form-control shadow-none" id="name" placeholder="Enter Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" onChange={handledata} name='email' value={contactdata.email} className="form-control shadow-none" id="email" placeholder="Enter Email" />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={handlesubmit} >ADD</button>
          </form>
        </div>
      </div>
)
}
