import React, { useState, useEffect } from "react";
import LoginModal from "../Modal/LoginModal";
import { FaUser } from "react-icons/fa6";
import { BiSolidLogOutCircle } from "react-icons/bi";
import LogOutmodal from "../Modal/LogOutmodal";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [localStoragedata, setLocalStoragedata] = useState(null);
  const [Dropdown, setDropdown]=useState(false)
  const [showLogoutModal, setshowLogoutModal]=useState(false)

  useEffect(() => {
    const data = localStorage.getItem("MyPofile");
    if (data) {
      setLocalStoragedata(JSON.parse(data));
    }
  }, []);

 

  return (
    <>
       <LogOutmodal show={showLogoutModal} handleClose={()=>setshowLogoutModal(false)}/>
      <LoginModal show={showModal} handleClose={() => setShowModal(false)} />

      <header className="header">
        <div className="logo">
          <span>Resume</span>Builder
        </div>

        {localStoragedata === null ? (
          <button
            className="login-btn"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        ) : (
          <>
          
          <span className="useProfile"  
          onClick={()=>setDropdown(!Dropdown)}
          ><FaUser /></span>
          {Dropdown &&(
            <span className="DropUser">
            <div className="UserValue">
               <FaUser />User Profile
            </div>
            <hr />
            <div className="UserValue">
              <span onClick={()=>setshowLogoutModal(true)}>
                <BiSolidLogOutCircle style={{fontSize:"25px"}}/> Logout
              </span>
            </div>
          </span>
          )}
          </>
        )}
      </header>
    </>
  );
}

export default Header;
