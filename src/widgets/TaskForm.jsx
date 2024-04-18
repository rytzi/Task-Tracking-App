import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

export const TaskFormModal = ({closeModal, tasks, users, user, updateTasksData, ifEdit, setToEdit}) => {
    const [newTask, setNewTask] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(ifEdit ? users.find(user => user.id === ifEdit.assignee).department : "placeholder");
    const [selectedAssignee, setSelectedAssignee] = useState(ifEdit ? users.find(user => user.id === ifEdit.assignee).name : "placeholder");    
    const [taskInput, setTaskInput] = useState(ifEdit ? ifEdit.task : "");
    const [descriptionInput, setDescriptionInput] = useState(ifEdit ? ifEdit.details : "");
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
        const assigneeSet = users.filter(user => user.role === 'Assignee' && user.department === selectedDepartment);
        const assigneeArray = assigneeSet.map(assignee => assignee.name)
        setAssignee(assigneeArray);
    }, [selectedDepartment, users]);

    useEffect(() => {
        setNewTask({
            task: taskInput,
            details:  descriptionInput,
            assignee: users.find(user => user.name === selectedAssignee)?.id,
            assigner: user.id,
            created: new Date().toLocaleString('en-SG', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true}),
            status: "Pending"
        });
    }, [taskInput, descriptionInput, selectedAssignee, selectedDepartment, users, user.id]);

    return(
        <div className="modal">
            <div style={{position: 'relative'}} className="assign">
            {ifEdit ? (
                    <>
                        <div style={{ boxSizing: ' border-box', position: 'absolute', right: 0, top: 0, padding: '1rem' }} className="subtitle close text fit" onClick={() => { closeModal(); setToEdit(null); } }>
                            &times;
                        </div>
                        <div style={{ boxSizing: ' border-box', padding: '1rem' }} className="subtitle text">Task Details</div>
                    </>
                ) : (    
                    <>
                        <div style={{ boxSizing: ' border-box', position: 'absolute', right: 0, top: 0, padding: '1rem' }} className="subtitle close text fit" onClick={() => { closeModal(); setToEdit(null); } }>
                            &times;
                        </div>
                        <div style={{ boxSizing: ' border-box', padding: '1rem' }} className="subtitle text">Task Details</div>
                    </>
                )}
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
                {ifEdit ? (
                    <div className='add text' onClick={(e) => {
                            e.preventDefault();
                            closeModal();
                            resetState();
                           if (selectedDepartment !== "placeholder" && selectedAssignee !== "placeholder" && taskInput !== "" && descriptionInput !== "") {
                                const updatedTask = {
                                    ...ifEdit,
                                    task: taskInput,
                                    details: descriptionInput,
                                    assignee: users.find(user => user.name === selectedAssignee).id,
                                };
                                updateTasksData(tasks.map(t => t.created === ifEdit.created ? updatedTask : t));
                                setToEdit(null);
                            } else {
                                console.log("invalid input");
                            }
                        }
                    }>Edit Task</div>
                    //TODO: make ID for tasks to make editing and deleting simpler
                ) : (
                    <div className='add text' onClick={(e) => {
                            e.preventDefault();
                            closeModal();
                            resetState();
                            if (selectedDepartment != "placeholder" && selectedAssignee != "placeholder" && taskInput != "" && descriptionInput != "") {
                                updateTasksData([...tasks, newTask]);
                            } else {
                                console.log("invalid input");
                            }
                        }
                    }>Add Task</div>)}
            </div>
        </div>
    )
}

TaskFormModal.propTypes = {
  closeModal: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  updateTasksData: PropTypes.func,
  ifEdit: PropTypes.object,
  setToEdit: PropTypes.func
};