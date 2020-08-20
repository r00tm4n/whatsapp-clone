import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";

function Login() {
  const signIn = () => {

  }
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