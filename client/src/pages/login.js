import React from "react";
import "../styles/login.css";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="signupParent">
      <div className="signupPic">
        <img src="/foodpost.png" alt="iphone" id="iphone1" />
        <img src="/foodpost.png" alt="iphone" id="iphone2" />
      </div>

      <div className="signupForm">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
