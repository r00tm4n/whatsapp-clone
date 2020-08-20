import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import {auth,provider} from "./firebase";

function Login() {
  const signIn = () => {
      auth.signInWithPopUp(provider)
      .then( result => console.log(result)
      .catch((error) => alert(error.message)));
  };
  
  return (
    <div className="login">
      <div className="login__container">"
        <img src="https://img.icons8.com/color/144/000000/whatsapp.png" alt="" />
        <div className="login__text">
          <h1>Sing in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}

export default Login;