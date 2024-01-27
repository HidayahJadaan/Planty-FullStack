import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

import img from "../../assets/user.png";
import leaves from "../../assets/leaves.mp4"

export default function TopSection() {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti</h1>
          <p>Hello Hidayah, Welcome Back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <IoNotificationsOutline className="icon" />

          <div className="adminImage">
            <img src={img} alt="Admin Image" className="adminImage" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fast growing industry today are natural made products!</p>
        
        <div className="buttons">
          <button className="explore-btn btn">Explore More</button>
          <button className="btn transparent">Top Sellers</button>
        </div>

        <div className="videoDiv">
          <video src={leaves} autoPlay loop muted></video>
        </div>
        </div>
      </div>
    </div>
  );
}
