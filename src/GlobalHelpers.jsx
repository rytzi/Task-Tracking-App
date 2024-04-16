import { useState } from 'react';

export const LocalStorage = () => {
    const [userData, setUserData] = useState(() => {
        const userData = localStorage.getItem('userData');
        return JSON.parse(userData);
    });

    const [taskData, setTaskData] = useState(() => {
        const taskData = localStorage.getItem('taskData');
        return JSON.parse(taskData);
    });

    const updateUsersData = (updatedData) => {
        localStorage.setItem('userData', JSON.stringify(updatedData));
        setUserData(updatedData);
    };
    
    const updateTasksData = (updatedData) => {
        localStorage.setItem('taskData', JSON.stringify(updatedData));
        setTaskData(updatedData);
    };

    return [userData, updateUsersData, taskData, updateTasksData];
};