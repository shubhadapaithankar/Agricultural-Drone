import React, { useState, useEffect } from "react";
import "./RegisterFarmer.css"
import TextField from "@material-ui/core/TextField";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from '../components/Success'
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default function RegisterFarmerScreen() {
  const [name, setname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [birthday, setbirthday] = useState("");
  const[gender, setgender]=useState("");
  const[loading, setloading]=useState(false)
  const[error, seterror]=useState(false)
  const[success, setsuccess]=useState(false) 
  
   async function saveFarmerDetails(){
  
    console.log("hello");

    const farmer={
      name,
      phoneNumber,
      email,
      birthday,
      gender
     }
  
  try {
    console.log("hello");
    console.log(name)
    
    setloading(true)
    const result = await axios.post('/api/farmers/farmerDetails',farmer)
    setloading(false)
    setsuccess(true)
    setemail('')
    setname('')
    setPhoneNumber('')
    setbirthday('')
    setgender('')
  } catch (error) {
    seterror(true)
    setloading(false)
    console.log(error);
  }
  }
  return (
    <div className="farmer-register-1 flex-col-hstart-vstart clip-contents">
      <p className="txt-111">Select Role to Register As</p>
      <div className="header flex-row-vstart-hstart clip-contents">
        <p className="txt-544">Home Contact Profile</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/72o21d8j7zs-1415%3A1907?alt=media&token=ecbb4d40-fdf0-4f29-a690-3430f3e85ab5"
          alt="Not Found"
          className="search"
        />
      </div> 
      


      <div className="group-844 flex-col-hend">
        <div className="contents-1 flex-col-hstart-vstart">
          <div className="step-3 flex-col-hstart-vstart">
            <div className="title flex-col-hstart-vstart"> ;
            

            <div className="button-sign-up1 flex-row-vcenter-hcenter">
            <div class="container text-center">
              <p className="txt-984">
              
              </p> 
              </div>
              </div> 
              
              <p className="txt-277" flex-row-vcenter-hcenter> Update Farmer Information</p>
            </div> &ensp; &ensp;

            <div className="space flex-col-hstart-vstart">
              <div className="field flex-col-hstart-vstart">
              
               <input required type="text" value={name} placeholder="name" onChange={(e)=>{setname(e.target.value)}} />
                <div className="input flex-col-hstart-vstart"></div>
              </div>
              <div className="fields flex-row-vstart-hstart">
                <div className="field-1 flex-col-hstart-vstart">
                  <input required type="text" value={phoneNumber} placeholder="Phone Number" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                  <div className="input flex-col-hstart-vstart"></div>
                </div>
              </div>
              <div className="fields flex-row-vstart-hstart">
                <div className="field-1 flex-col-hstart-vstart">
                <input required type="text" value={email} placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
                  <div className="input flex-col-hstart-vstart"></div>
                </div>
              </div>
              <div className="fields flex-row-vstart-hstart">
                <div className="field-1 flex-col-hstart-vstart">

          <p className=""><div style={{
           margin: 'auto',
          display: 'block',
          width: 'fit-content'
          }}>
        <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        value={birthday} placeholder="Birthday" onChange={(e)=>{setbirthday(e.target.value)}}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div></p>
                  
                </div>
              </div>
              <div className="fields-1 flex-row-vstart-hstart">
                <div className="field-1 flex-col-hstart-vstart" value={gender} placeholder="gender" onChange={(e)=>{setgender(e.target.value)} }>
                  <p className="txt-1100"> Gender</p>
                  <div>

       <select>
      <label> "Gender" </label>
      <option value="Male">Male</option>
       <option value="Female">Female</option> 
     </select>    

   </div>
                  
                </div>
              </div>
            </div>
            
          </div>
          {/* <div className="progress-bar flex-row-vcenter-hstart">
            <div className="active-indicator" />
            <div className="active-line" />
            
            <div className="default-indicator" />
            <div className="active-line" />
            <div className="default-indicator" />
            <div className="active-line" />
            <div className="default-indicator-1" />
          </div> */}
        </div>
        <div className="button-sign-up1 flex-row-vcenter-hcenter">
            <p className="txt-574">
            <button onClick={saveFarmerDetails} className="button-sign-up1 flex-row-vcenter-hcenter"> BACK </button></p>
          </div>
          &ensp;  &ensp;
          <div className="button-sign-up1 flex-row-vcenter-hcenter">
            <p className="txt-574">
            <button onClick={saveFarmerDetails} className="button-sign-up1 flex-row-vcenter-hcenter"> REGISTER</button></p>
          </div>
      </div> 
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/72o21d8j7zs-1415%3A1964?alt=media&token=f0b531c4-82d6-4013-9925-c014b66a061b"
        alt="Not Found"
        className="muted-button"
      />
    </div>
  )
}
