import React from 'react'
import Home from './home'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function index() {


    useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" || // F12
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || // Ctrl+Shift+I or Ctrl+Shift+J
        (e.ctrlKey && e.key === "U") // Ctrl+U
      ) {
        e.preventDefault();
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
  
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);


  return (
   <>
   
   <Home/>
   </>
  )
}
