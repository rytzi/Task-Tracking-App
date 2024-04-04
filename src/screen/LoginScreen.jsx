import { useState } from "react"
import { LoginWidget } from "../widgets/LoginWidget"
import { GreetingWidget } from "../widgets/GreetingWidget"
import { SignupWidget } from "../widgets/SignupWidget"
import "../Login.css"

function LoginScreen() {
  const [mode, setMode] = useState("login");

  return (
    <div className="loginScreen">
    <LoginWidget mode={mode}/>
    <GreetingWidget mode={mode} setMode={setMode}/>
    <SignupWidget mode={mode}/>
    </div>
  )
}

export default LoginScreen