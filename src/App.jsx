import { useState } from 'react';
import { LoginScreen } from './screen/LoginScreen.jsx';
import { Body } from './screen/Body.jsx';
import './GlobalHelpers.jsx'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  const [userData, setUserData] = useState(() => {
    const userData = localStorage.getItem('userData');
    return JSON.parse(userData);
  });

  const updateUserData = (updatedTasks) => {
    localStorage.setItem('userData', JSON.stringify(updatedTasks));
    setUserData(updatedTasks);
  };

  const [taskData, setTaskData] = useState(() => {
    const taskData = localStorage.getItem('taskData');
    return JSON.parse(taskData);
  });
  
  const updateTasksData = (updatedTasks) => {
    localStorage.setItem('taskData', JSON.stringify(updatedTasks));
    setTaskData(updatedTasks);
  };

  return (
    <>
      {isAuthenticated ? (
        <Body setIsAuthenticated={setIsAuthenticated} user={user} users={userData} tasks={taskData} updateTasksData={updateTasksData}/>
      ) : (
        <LoginScreen setIsAuthenticated={setIsAuthenticated} setUser={setUser} users={userData} updateUserData={updateUserData}/>
      )}
    </>
  );
}

export default App;
