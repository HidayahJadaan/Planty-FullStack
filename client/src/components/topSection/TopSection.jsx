import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

import img from "../../assets/user.png";
import img2 from "../../assets/p5.jpg";
import leaves from "../../assets/leaves.mp4";

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
          <p>
            The world's fast growing industry today are natural made products!
          </p>

          <div className="buttons">
            <button className="explore-btn btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={leaves} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders </small>
                </span>
              </div>

              <div className="flex">
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="" />
            </div>

            
          </div>

          <div className="sideBarCard">
              <BsQuestionCircle className="icon" />

              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>
                  Having trouble in Planti, please contact us from more
                  questions.
                </p>

                <button className="Help-btn btn">Go to help center</button>
              </div>
            </div>

            
        </div>
      </div>
    </div>
  );
}
