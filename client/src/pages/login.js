import React from "react";
import "../styles/login.css";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="signupParent">
      <div className="signupPic">div1</div>

      <div className="signupForm">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
