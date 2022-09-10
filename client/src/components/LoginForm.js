import React from "react";
function LoginForm() {
  return (
    <div className="formParent">
      <h1>Foodstagram</h1>
      <form className="mainForm">
        <input type="text" name="fullname" placeholder="Full Name" />
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="phonenumber" placeholder="Phone Number" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirmpwd"
          placeholder="Confirm Password"
        />
        <input id="signupBtn" type="submit" value="Sign Up" />
      </form>
      <div className="login">
        <p>Already have an account?</p>
        <a href="/">
          <input id="loginBtn" type="button" value="Login" />
        </a>
      </div>
    </div>
  );
}

export default LoginForm;
