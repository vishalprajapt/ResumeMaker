import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Login1 from "../LoginForm/Login1";
import FirebaseForm from "../Firebase/FirebaseForm";
import axios from "axios";

function LoginModal({ show, handleClose }) {

  const [typeForm, setTypeForm]=useState("")
  
  useEffect(()=>{
    
    const apidata=async()=>{
    const dataget=await axios.get("https://resumebackend-v68m.onrender.com/api/login-type")
    console.log("datagetdataget",dataget?.data)
    setTypeForm(dataget?.data)
  }

  apidata()
  },[])

if(typeForm.length>0){
  return <h2>Loading</h2>
}
 

  return (
    
    <Modal 
    show={show} 
    onHide={handleClose}
    centered
    dialogClassName="custom-login-modal"
    contentClassName="custom-login-content"
     >
       
       {typeForm.type==0?
      <Login1 
        onClose={handleClose}
        
        />
        :
         <FirebaseForm  onClose={handleClose}/>
      }
        
    </Modal>
  );
}

export default LoginModal;
