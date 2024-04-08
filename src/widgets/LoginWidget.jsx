import PropTypes from 'prop-types'

// export const LoginWidget = ({ toggleActiveComponent }) => {
//     const handleLogin = () => {
//         toggleActiveComponent();
//     };
//     return (
//         <div className="loginForm centerY">
//             <div className="form">
//                 <div className="title text">Log In</div>
//                 <div className="label text">Email</div>
//                 <input className="email input" type="text"></input>
//                 <div className="label text">Password</div>
//                 <input className="password input" type="text"></input>
//                 <div className="text button" onClick={handleLogin}>Log In</div>
//             </div>
//         </div>
//     )
// }

// LoginWidget.propTypes = {
//   toggleActiveComponent: PropTypes.func,
// }

import { useState } from 'react';

export const LoginWidget = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call handleLogin function with email and password
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
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="label text">Password</div>
        <input
          className="password input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="text button" type="submit" onClick={handleSubmit}>Log In</div>
      </form>
    </div>
  );
};

// export default LoginWidget;

LoginWidget.propTypes = {
  handleLogin: PropTypes.func,
}