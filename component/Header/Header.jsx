import React from "react";

function Header() {
  return (
    <header className="header">
      {/* Left side logo */}
      <div className="logo">
        <span>Resume</span>Builder
      </div>

      {/* Right side login button */}
      <button className="login-btn">Login</button>
    </header>
  );
}

export default Header;
