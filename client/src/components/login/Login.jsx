import React, { useEffect, useState } from "react";
// import "./login.scss";
import "../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import PlantVideo from "../../assets/leaves.mp4";
import Logo from "../../assets/Logo2.png";
import Axios from "axios";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  const [statusHolder, setStatusHolder] = useState("message");

  const LoginUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/login", {
      LoginEmail: loginEmail,
      LoginPassword: loginPassword,
    }).then((response) => {
      if (response.data.message) {
        // Show error message
        setLoginStatus(response.data.message);
      } else {
        // Navigate to dashboard
        navigateTo("/dashboard");
      }
    }).catch((error) => {
      // Handle network or server errors
      setLoginStatus('Login failed: ' + error.message);
    });
  };
  

  useEffect(() => {
    if (loginStatus !== "") {
      setStatusHolder("showMessage");
      setTimeout(() => {
        setStatusHolder("message");
      }, 3000);
    }
  }, [loginStatus]);

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={PlantVideo} autoPlay loop muted></video>

          <div className="textDiv">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>

            <Link to="/register">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={Logo} alt={Logo} />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid" onSubmit={LoginUser}>
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <i className="ri-user-fill icon"></i>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Your Name..."
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
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
                    setLoginPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Login</span>
              <i class="ri-login-circle-line icon"></i>
            </button>
            <Link to="/dashboard">
              <button className="btn">Dashboard</button>
            </Link>
            <span className="forgetPassword">
              Forget your password <a href="#">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
