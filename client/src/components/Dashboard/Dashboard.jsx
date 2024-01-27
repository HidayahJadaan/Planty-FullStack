import React from "react";
import SideBar from "../sideBar/SideBar";
import Body from "../BodyDashboard/Body";

export default function Dashboard() {
  return (
    <div className="BodyDSH">
      {/* <h5>Hello Dashboard</h5> */}
     <div className="containerDsh">
     <SideBar />
     <Body />
     </div>
    </div>
  );
}
