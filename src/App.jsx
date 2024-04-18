import { useEffect, useState } from 'react';
import { LoginScreen } from './screen/LoginScreen.jsx';
import { Body } from './screen/Body.jsx';
import taskJSON from './data/Task.json';
import userJSON from './data/User.json';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userJSON));
    localStorage.setItem('taskData', JSON.stringify(taskJSON));
  }, []);

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
