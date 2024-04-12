import PropTypes from 'prop-types'
import { useState } from 'react';
import { Dashboard, Employees, Logout, Tasks } from '../assets/Icons';
import { DashboardWidget } from '../widgets/Dashboard';
import taskMap from '../data/Task.json';
import userMap from '../data/User.json'
import '../style/Body.css'

export const Body = ({ setIsAuthenticated, user }) => {
  const [selectedBody, setSelectedBody] = useState('Dashboard');
  const handleSidebar = (selected) => {
    setSelectedBody(selected);
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className='bodyContainer'>
        <div className='sidebar'>
          <div className='optionsContainer'>
            <div className='logoContainer'>
              <div className='logo subtitle text centerY'><i><span>TASK</span>TRACKER</i></div>
            </div>
            <div className='options' onClick={() => handleSidebar('Dashboard')}>
                <div className='icon'><Dashboard/></div>
                <div className='text option'>Dashboard</div>
            </div>
            <div className='options' onClick={() => handleSidebar('Tasks')}>
                <div className='icon'><Tasks/></div>
                <div className='text option'>Tasks</div>
            </div>
            <div className='options' onClick={() => handleSidebar('Employees')}>
                <div className='icon'><Employees/></div>
                <div className='text option'>Employees</div>
            </div>
          </div>
          <div className='options' onClick={handleLogout}>
              <div className='icon'><Logout/></div>
              <div className='text option'>Logout</div>
          </div>
        </div>
        <div className='mainBody'>
            <div className='navbar'>
              <div className='title text'>Welcome Back, {user.name} 🤟</div>
            </div>
            <div className='selected'>
              <SelectedBody select={selectedBody}/>
            </div>
        </div>
    </div>
  );
}

Body.propTypes = {
  setIsAuthenticated: PropTypes.func,
  user: PropTypes.object
}


const SelectedBody = ({select}) => {
  switch (select) {
    case 'Dashboard':
      return (
        <DashboardWidget tasks={taskMap} users={userMap}/>       
      );
    case 'Tasks':
      return (
        <h1>hello tasks</h1>
      );
    case 'Employees':
      return (
        <h1>hello Employees</h1>
      );
  }
}

  
SelectedBody.propTypes = {
  select: PropTypes.string,
}