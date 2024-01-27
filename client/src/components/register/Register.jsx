import React, { useState } from "react";
// import "./login.scss";
import "../../App.scss";
import { Link } from "react-router-dom";
import PlantVideo from "../../assets/leaves.mp4";
import Logo from "../../assets/Logo2.png";
import Axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const createUser = () => {
    Axios.post("http://localhost:3000/register", {
      Email: email,
      UserName: userName,
      Password: password,
    }).then((response) => {
      console.log(response.data.message);
    }).catch((error) => {
      console.error('Error:', error);
    });
    

  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={PlantVideo} autoPlay loop muted></video>

          <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>

            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={Logo} alt={Logo} />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid" 
          onSubmit={createUser}>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <i class="ri-mail-fill"></i>{" "}
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <i className="ri-user-fill icon"></i>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Your Name..."
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <i class="ri-shield-keyhole-fill"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password..."
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" >
              <span>Register</span>
              <i class="ri-login-circle-line icon"></i>
            </button>

            <span className="forgetPassword">
              Forget your password <a href="#">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
