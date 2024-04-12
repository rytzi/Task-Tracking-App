import { useState } from 'react';
import { LoginWidget } from '../widgets/LoginWidget';
import { GreetingWidget } from '../widgets/GreetingWidget';
import { SignupWidget } from '../widgets/SignupWidget';
import PropTypes from 'prop-types'
import users from '../data/User.json'
import '../style/Login.css';

export const LoginScreen = ({ setIsAuthenticated, setUser }) => {
  const [mode, setMode] = useState('login');

  const handleLogin = (email, password) => {
    if (users.find(user => user.email === email).password === password){
      setIsAuthenticated(true);
      setUser(users.find(user => user.email === email))
    } else {
      console.log("wrong credentials")
    }
  };

  return (
    <div className="loginScreen">
      <LoginWidget mode={mode} handleLogin={handleLogin} />
      <GreetingWidget mode={mode} setMode={setMode} />
      <div className="signupForm centerY">
        <SignupWidget mode={mode} />
      </div>
    </div>
  );
}

LoginScreen.propTypes = {
  setIsAuthenticated: PropTypes.func,
  setUser: PropTypes.func
}