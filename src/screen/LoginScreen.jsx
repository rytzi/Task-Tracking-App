import { useState } from 'react';
import { LoginWidget } from '../widgets/LoginWidget';
import { GreetingWidget } from '../widgets/GreetingWidget';
import { SignupWidget } from '../widgets/SignupWidget';
import PropTypes from 'prop-types'
import '../style/Login.css';

export const LoginScreen = ({ setIsAuthenticated, setUser, users, updateUserData}) => {
  const [mode, setMode] = useState('login');

  const handleLogin = (email, password) => {
      const user = users.find(user => user.email === email);

      if (user && user.password === password) {
          setIsAuthenticated(true);
          setUser(user);
      } else {
          console.log("Wrong credentials");
      }
  };

  return (
    <div className="loginScreen">
      <LoginWidget handleLogin={handleLogin} />
      <GreetingWidget mode={mode} setMode={setMode} />
      <div className="signupForm centerY">
        <SignupWidget setMode={setMode} users={users} updateUserData={updateUserData}/>
      </div>
    </div>
  );
}

LoginScreen.propTypes = {
  setIsAuthenticated: PropTypes.func,
  setUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
  updateUserData: PropTypes.func
}