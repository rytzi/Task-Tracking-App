import PropTypes from 'prop-types'
import { useRef, useState } from 'react';
import { Dashboard, Employees, Logout, PendingTasks, Tasks } from '../assets/Icons';
import { DashboardWidget } from '../widgets/Dashboard';
import { AllTasksWidget, MyTasksWidget, PendingTasksWidget } from '../widgets/Tasks';
import { EmployeesWidget } from '../widgets/Employees';
import { TaskFormModal } from '../widgets/TaskForm';
import { ViewTaskModal } from '../widgets/TaskView';
import '../style/Body.css';

export const Body = ({ setIsAuthenticated, user, users, tasks, updateTasksData}) => {
  const [selectedBody, setSelectedBody] = useState('Dashboard');
  const [toEdit, setToEdit] = useState(null);

  const handleSidebar = (selected) => {
    setSelectedBody(selected);
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  
  const modalRef = useRef();
  const [taskView, setTaskView] = useState([]);

  const openModal = () => {
    modalRef.current.style.display = 'flex';
  };

  const closeModal = () => {
    modalRef.current.style.display = 'none';
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
              <SelectedBody select={selectedBody} user={user} users={users} tasks={tasks} updateTasksData={updateTasksData} taskView={taskView} setTaskView={setTaskView} openModal={openModal} closeModal={closeModal}/>
            </div>
        </div>
        <div ref={modalRef} className='overlay centerY' style={{display: "none"}}>
          {taskView.mode == 'new' ? (
            <TaskFormModal closeModal={closeModal} tasks={tasks} users={users} user={user} updateTasksData={updateTasksData} ifEdit={toEdit}  setToEdit={setToEdit}/>
          ) : (
            <ViewTaskModal closeModal={closeModal} tasks={tasks} users={users} user={user} view={taskView.view} updateTasksData={updateTasksData} setTaskView={setTaskView} setToEdit={setToEdit}/>
          )}
        </div>
    </div>
  );
}

Body.propTypes = {
  setIsAuthenticated: PropTypes.func,
  user: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
  tasks: PropTypes.arrayOf(PropTypes.object),
  updateTasksData: PropTypes.func
}


const SelectedBody = ({select, user, users, tasks, updateTasksData, setTaskView, openModal}) => {
  switch (select) {
    case 'Dashboard':
      return (
        <DashboardWidget tasks={tasks} users={users} user={user} updateTasksData={updateTasksData} setTaskView={setTaskView} openModal={openModal}/>       
      );
    case 'AllTasks':
      return (
        <AllTasksWidget tasks={tasks} users={users} user={user} setTaskView={setTaskView} openModal={openModal}/>     
      );
    case 'MyTasks':
      return (
        <MyTasksWidget tasks={tasks} users={users} user={user} setTaskView={setTaskView} openModal={openModal}/>     
      );
    case 'PendingTasks':
      return (
        <PendingTasksWidget tasks={tasks} users={users} user={user} updateTasksData={updateTasksData}/>     
      );
    case 'Employees':
      return (
        <EmployeesWidget tasks={tasks} users={users} user={user}/>     
      );
  }
}

  
SelectedBody.propTypes = {
  select: PropTypes.string,
  user: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
  tasks: PropTypes.arrayOf(PropTypes.object),
  updateTasksData: PropTypes.func,
  setTaskView: PropTypes.func,
  openModal: PropTypes.func
}