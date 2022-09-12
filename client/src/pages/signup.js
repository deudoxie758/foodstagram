import React from "react";
import "../styles/signup.css";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <div className="signupParent">
      <div className="signupPic">
        <img src="/foodpost.png" alt="iphone" id="iphone1" />
        <img src="/foodpost.png" alt="iphone" id="iphone2" />
      </div>

      <div className="signupForm">
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
