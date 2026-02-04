import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Login1 from "../LoginForm/Login1";

function LoginModal({ show, handleClose }) {


 

  return (
    <Modal 
    show={show} 
    onHide={handleClose}
    centered
    dialogClassName="custom-login-modal"
    contentClassName="custom-login-content"
     >
       
       <Login1 
        onClose={handleClose}
        
        />
        
    </Modal>
  );
}

export default LoginModal;
