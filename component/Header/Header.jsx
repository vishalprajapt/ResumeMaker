import React from "react";
import LoginModal from "../Login/LoginModal";

function Header() {
  return (
  <>
    <LoginModal/>
    <header className="header">
      {/* Left side logo */}
      <div className="logo">
        <span>Resume</span>Builder
      </div>

      {/* Right side login button */}
      <button className="login-btn"
      
      
      >Login</button>
    </header>
  
  </>
  );
}

export default Header;
