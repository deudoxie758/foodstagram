import React, { useState } from "react";

function LoginForm() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="LoginParent">
      <h1> Foodstagram</h1>
      <form className="LoginForm" onSubmit={submit}>
        <input
          type="text"
          name="usename"
          placeholder="Username"
          onChange={getUsername}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={getPassword}
        />
        <input id="loginBtn" type="submit" value="Log In" />
        <a href="/">Forgot password?</a>
      </form>
      <div id="loginRedirect">
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
