import PropTypes from 'prop-types'

export const ViewTaskModal = ({closeModal, tasks, users, user, view, updateTasksData, setTaskView, setToEdit}) => {
    const updateTask = ({st}) => {
        const updatedTask = { ...view, status: st };
        updateTasksData(tasks.map(t => t.task === view.task && t.created === view.created ? updatedTask : t));
    };

    const deleteTask = () => {
        const updatedTasks = tasks.filter(t => !(t.task === view.task && t.created === view.created));
        updateTasksData(updatedTasks);
    };

    return(
        <div style={{position: 'relative', boxSizing: 'border-box'}} className="modal">
            <div style={{position: 'relative',minHeight: '35%',maxHeight: '45%', height: 'fit-content'}} className="assign">
                <div style={{boxSizing:' border-box', position: 'absolute', right: 0, top: 0, padding: '1rem'}} className="subtitle close text fit" onClick={() => {closeModal();}}>
                    &times;
                </div>
                <div style={{boxSizing:' border-box', padding: '1.5rem'}} className="subtitle text">Task Details</div>
                <div className='inline text taskDetails'>
                    <div className='fit text'>Status</div>
                    <div style={{backgroundColor: 'unset'}} className={'fit text ' + view?.status}>{view?.status}</div>
                </div>
                <div className='inline text taskDetails'>
                    <div className='fit text'>Assigner</div>
                    <div style={{backgroundColor: 'unset'}} className='fit text '>{users.find(user => user.id === view?.assigner)?.name}</div>
                </div>
            </div>
            <div className='task'>
                <><div className='inputLabel label text'>Task</div>
                <div className='fit text'>{view?.task}</div>
                <div className='inputLabel label text'>Description</div>
                <div style={{textAlign: 'start'}} className='fit text'>{view?.details}</div>
                <div className='inputLabel label text'>Date Created</div>
                <div style={{textAlign: 'start'}} className='fit text'>{view?.created}</div>
                </>
                {view?.status === "Pending" && (
                    user.role === "Assignee" ? (
                        <div className='update add text' onClick={(e) => {
                                    e.preventDefault();
                                    closeModal();
                                    updateTask({ st: "In Progress" });
                                }
                            }>Start Task
                        </div>
                    ) : (
                        <div className='update edit text'>
                        <div style={{backgroundColor: '#FF5A79'}} className='add text' onClick={(e) => {
                                    e.preventDefault();
                                    closeModal();
                                    deleteTask();
                                }
                            }>Delete Task
                        </div>
                        <div className='add text' onClick={(e) => {
                                    e.preventDefault();
                                    setTaskView({mode: 'new'});
                                    setToEdit(view);
                                }
                            }>Edit Task
                        </div>
                        </div>
                    ) 
                )}
                {user.role === "Assignee" && view?.status === "In Progress" && (
                    <div className='update add text' onClick={(e) => {
                                e.preventDefault();
                                closeModal();
                                updateTask({ st: "Completed" });
                            }
                        }>Mark as Done
                    </div>
                )}
            </div>
        </div>
    )
}

ViewTaskModal.propTypes = {
  closeModal: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  view: PropTypes.object,
  updateTasksData: PropTypes.func,
  setTaskView: PropTypes.func,
  setToEdit: PropTypes.func
};