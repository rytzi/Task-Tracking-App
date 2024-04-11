import PropTypes from 'prop-types'
import { useState } from 'react';
import { Card } from "../widgets/Card"
import { AddNewTask, Completed, Dashboard, Employees, InProgress, Logout, Pending, Tasks } from '../assets/Icons';
import '../Body.css'

export const Body = ({ setIsAuthenticated }) => {
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
              <div className='title text'>Welcome Back, User 🤟</div>
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
}


const SelectedBody = ({select}) => {
  switch (select) {
    case 'Dashboard':
      return (
        <div className='dashboardContainer'>
          <div className='text'>Dashboard</div>
          <div className='cards'>
            <Card 
            className='addNewTask'
            cardWidth={"15rem"}
            content={
                <div className='addNewTask'>
                  <div className='icon centerY' style={{width: '30%', padding: '2rem'}}>
                    <AddNewTask/>
                  </div>
                  <div className='text option'>Add New Task</div>
                </div>
              }
            />
            <Card
            cardWidth={"25rem"}
            content={
                <div className='dashboardCards'>
                  <div className='text and illus'>
                    <div className='number text'>12</div>
                    <div className='iconContainer centerY' style={{backgroundColor: 'rgba(51, 173, 209, 0.5)'}}>
                      <Pending/>
                    </div>
                  </div>
                  <div className='band text' style={{backgroundColor: 'rgba(51, 173, 209, 0.5)', borderColor: 'rgba(51, 173, 209, 1)'}}>Pending Tasks</div>
                </div>
              }
            />
            <Card
            cardWidth={"25rem"}
            content={
                <div className='dashboardCards'>
                  <div className='text and illus'>
                    <div className='number text'>10</div>
                    <div className='iconContainer centerY' style={{backgroundColor: 'rgba(246, 145, 52, 0.5)'}}>
                      <InProgress/>
                    </div>
                  </div>
                  <div className='band text' style={{backgroundColor: 'rgba(246, 145, 52, 0.5)', borderColor: 'rgba(246, 145, 52, 1)'}}>In Progress Tasks</div>
                </div>
              }
            />
            <Card
            cardWidth={"25rem"}
            content={
                <div className='dashboardCards'>
                  <div className='text and illus'>
                    <div className='number text'>15</div>
                    <div className='iconContainer centerY' style={{backgroundColor: 'rgba(100, 218, 105, 0.5)'}}>
                      <Completed/>
                    </div>
                  </div>
                  <div className='band text' style={{backgroundColor: 'rgba(100, 218, 105, 0.5)', borderColor: 'rgba(100, 218, 105, 1)'}}>Pending Tasks</div>
                </div>
              }
            />
          </div>
          <Card cardHeight={'35%'}/>
          <Card cardHeight={'35%'}/>
        </div>        
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