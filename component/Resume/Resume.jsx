import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


function Resume() {
  const ResumeArray = [
    { id: 1, type: "Resume 1", img: "/img/resume1.png" },
    { id: 2, type: "Resume 2", img: "/img/resume2.png" },
    { id: 3, type: "Resume 3", img: "/img/resume3.png" },
    { id: 4, type: "Resume 4", img: "/img/resume4.png" },
    { id: 5, type: "Resume 5", img: "/img/resume5.png" },
    { id: 6, type: "Resume 6", img: "/img/resume6.png" },
    { id: 7, type: "Resume 7", img: "/img/resume7.png" },
  ];

  const router=useRouter()
  const [showForm, setshowForm]=useState(false)

  const handleCreatResume=(id)=>{
    router.push(`UserForm/${id}`)
  }

  useEffect(()=>{
    setTimeout(() => {
      // localStorage.removeItem("resumeData")
    }, 3000);

  },[])
   


  return (
    <div className="resume-wrapper">
      <div className="resume-grid">
        {ResumeArray.map((item) => (
          <div className="resume-card" key={item.id}>
            <img src={item.img} alt={item.type} />
            <div className="card-footer" style={{margin:"15px 0px"}}>
              {/* <h3>{item.type}</h3> */}
              <button onClick={()=>handleCreatResume(item.id)}>Use Template</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
