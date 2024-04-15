import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

export const NewTaskModal = ({closeModal, tasks, users}) => {
    const [newTask, setNewTask] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("placeholder");
    const [selectedAssignee, setSelectedAssignee] = useState("placeholder");    
    const [taskInput, setTaskInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [assignee, setAssignee] = useState([]);
    const [departments, setDepartments] = useState([]);

    const resetState = () => {
        setSelectedDepartment("placeholder");
        setSelectedAssignee("placeholder");
        setTaskInput("");
        setDescriptionInput("");
    }

    useEffect(() => {
        const departmentSet = new Set(users.map(user => user.department));
        const departmentArray = Array.from(departmentSet);
        setDepartments(departmentArray);
    }, [users]);

    useEffect(() => {
        const assigneeSet = users.filter(user => user.department === selectedDepartment);
        const assigneeArray = assigneeSet.map(assignee => assignee.name)
        setAssignee(assigneeArray);
    }, [selectedDepartment, users]);

    useEffect(() => {
        setNewTask({
            task: taskInput,
            details:  descriptionInput,
            assignee: selectedAssignee,
            department: selectedDepartment,
            created: new Date().toLocaleString(),
            status: "Pending"
        });
    }, [taskInput, descriptionInput, selectedAssignee, selectedDepartment]);

    return(
        <div className="modal">
            <div className="assign">
                <div className="newTask text">
                    <div className="subtitle text fit">Create New Task</div>
                    <div className="subtitle close text fit" onClick={() => {closeModal(); resetState();}}>
                        &times;
                    </div>
                </div>
                <div className='select'>
                    <div className='inputLabel'>Select Department</div>
                    <select value={selectedDepartment} className='departmentSelect' onChange={(e) => {setSelectedDepartment(e.target.value)}}>
                        <option value="placeholder" disabled>Select Department</option>
                        {departments.map((department, index) => (
                                    <option key={index} value={department}>{department}</option>
                                )
                            )
                        }
                    </select>
                    <div className='inputLabel'>Select Assignee</div>
                    <select value={selectedAssignee} onChange={(e) => {setSelectedAssignee(e.target.value)}}>
                        <option value="placeholder" disabled>Select Assignee</option>
                        {assignee.map((assignee, index) => (
                                    <option key={index} value={assignee}>{assignee}</option>
                                )
                            )
                        }
                    </select>
                </div>
            </div>
            <div className='task'>
                <div className='inputLabel'>Task</div>
                <input value={taskInput} type='text' onChange={(e) => {setTaskInput(e.target.value)}}></input>
                <div className='inputLabel'>Description</div>
                <textarea value={descriptionInput} cols="10" rows="4" onChange={(e) => {setDescriptionInput(e.target.value)}}></textarea>
                <div className='add text' onClick={(e) => {
                            e.preventDefault();
                            closeModal();
                            resetState();
                            if (selectedDepartment != "placeholder" && selectedAssignee != "placeholder" && taskInput != "" && descriptionInput != "") {
                                console.log([...tasks, newTask]);
                            } else {
                                console.log("kulang input");
                            }
                        }
                    }>Add Task</div>
            </div>
        </div>
    )
}

NewTaskModal.propTypes = {
  closeModal: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object)
};