import PropTypes from 'prop-types'
import { useState } from 'react';
import { Dashboard, Employees, Logout, PendingTasks, Tasks } from '../assets/Icons';
import { DashboardWidget } from '../widgets/Dashboard';
import { AllTasksWidget, MyTasksWidget, PendingTasksWidget } from '../widgets/Tasks';
import { EmployeesWidget } from '../widgets/Employees';
import taskMap from '../data/Task.json';
import userMap from '../data/User.json';
import '../style/Body.css';

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
            {user.role === "Assigner" && (
              <>
                <div className='options' onClick={() => handleSidebar('AllTasks')}>
                  <div className='icon'><Tasks /></div>
                  <div className='text option'>Tasks</div>
                </div>
                <div className='options' onClick={() => handleSidebar('Employees')}>
                  <div className='icon'><Employees/></div>
                  <div className='text option'>Employees</div>
                </div>
              </>
            )}
            {user.role === "Assignee" && (
              <>
                <div className='options' onClick={() => handleSidebar('MyTasks')}>
                  <div className='icon'><Tasks/></div>
                  <div className='text option'>My Tasks</div>
                </div>
                <div className='options' onClick={() => handleSidebar('PendingTasks')}>
                  <div className='icon'><PendingTasks/></div>
                  <div className='text option'>Pending Tasks</div>
                </div>
              </>
            )}
          </div>
          <div className='options' onClick={handleLogout}>
              <div className='icon'><Logout/></div>
              <div className='text option'>Logout</div>
          </div>
        </div>
        <div className='mainBody'>
            <div className='navbar'>
              <div className='title text'>Welcome Back, {user.name.split(" ")[0]} 🤟</div>
            </div>
            <div className='selected'>
              <SelectedBody select={selectedBody} user={user}/>
            </div>
        </div>
    </div>
  );
}

Body.propTypes = {
  setIsAuthenticated: PropTypes.func,
  user: PropTypes.object
}


const SelectedBody = ({select, user}) => {
  switch (select) {
    case 'Dashboard':
      return (
        <DashboardWidget tasks={taskMap} users={userMap}/>       
      );
    case 'AllTasks':
      return (
        <AllTasksWidget tasks={taskMap} users={userMap}/>     
      );
    case 'MyTasks':
      return (
        <MyTasksWidget tasks={taskMap} users={userMap} user={user}/>     
      );
    case 'PendingTasks':
      return (
        <PendingTasksWidget tasks={taskMap} users={userMap} user={user}/>     
      );
    case 'Employees':
      return (
        <EmployeesWidget tasks={taskMap} users={userMap}/>     
      );
  }
}

  
SelectedBody.propTypes = {
  select: PropTypes.string,
  user: PropTypes.object
}