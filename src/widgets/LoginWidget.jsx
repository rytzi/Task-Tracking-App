import PropTypes from 'prop-types'
import { useState } from 'react';

export const LoginWidget = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="loginForm centerY">
      <form className="form">
        <div className="title text">Log In</div>
        <div className="label text">Email</div>
        <input
          className="email input"
          type="text"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          required
        />
        <div className="label text">Password</div>
        <input
          className="password input"
          type="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          required
        />
        <div className="text button" type="submit" onClick={handleSubmit}>Log In</div>
      </form>
    </div>
  );
};

LoginWidget.propTypes = {
  handleLogin: PropTypes.func,
}