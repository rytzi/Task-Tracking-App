import PropTypes from 'prop-types'
import { Dashboard } from '../assets/Icons';
import '../Body.css'

export const Body = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    // <div>
    //   <div className='title text'>Hello World</div>
    //   <div className='subtitle text'>This is the body of the application.</div>
    //   <div className='button text' onClick={handleLogout}>Logout</div>
    // </div>
    <div className='bodyContainer'>
        <div className='sidebar'>
            <div className='subtitle text centerY'><i><span>TASK</span>TRACKER</i></div>
            <div className='options'>
                <div className='icon'><Dashboard color={"white"}/></div>
                <div className='text option'>Dashboard</div>
            </div>
        </div>
        <div className='mainBody'>
            <div className='navbar'>
                <div className='title text'>Hello</div>
            </div>
        </div>
    </div>
  );
}

Body.propTypes = {
  setIsAuthenticated: PropTypes.func,
}