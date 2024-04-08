import { useState } from 'react';
import { LoginWidget } from '../widgets/LoginWidget';
import { GreetingWidget } from '../widgets/GreetingWidget';
import { SignupWidget } from '../widgets/SignupWidget';
import PropTypes from 'prop-types'
import '../Login.css';

export const LoginScreen = ({ setIsAuthenticated }) => {
  const [mode, setMode] = useState('login');

  const handleLogin = () => {
    setIsAuthenticated(true);
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
}