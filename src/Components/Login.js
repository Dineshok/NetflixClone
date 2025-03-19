import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";

function Login() {
  function letsLogin() {
    signInWithPopup(auth, provider)
      .then(function () {
        console.log("done");
      })
      .catch(function () {
        console.log("notDone");
      });
  }
  return (
    <div>
      <button onClick={letsLogin}>Login</button>
    </div>
  );
}

export default Login;
