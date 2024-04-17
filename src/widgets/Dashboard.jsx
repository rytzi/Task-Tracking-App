import PropTypes from 'prop-types'
import { Card } from "../widgets/Card"
import { AddNewTask, Completed, InProgress, Message, Pending} from '../assets/Icons';
import { useRef } from 'react';
import { NewTaskModal } from './NewTask';
import { Done } from '../assets/Graphics';

export const DashboardWidget = ({tasks, users, user, updateTasksData}) => {
    const modalRef = useRef();

    const openModal = () => {
      modalRef.current.style.display = 'flex';
    };

    const closeModal = () => {
      modalRef.current.style.display = 'none';
    };

    return(
      <div className='dashboardContainer'>
        <div className='subtitle text'>Dashboard</div>
        <div className='cards'>
          {user.role === "Assigner" && (
            <Card
              onClick={openModal}
              className='addNewTask'
              cardWidth={"45rem"}
              content={
                  <div className='addNewTask'>
                    <div className='icon centerY' style={{width: '30%', padding: '2rem'}}>
                      <AddNewTask/>
                    </div>
                    <div className='text option'>Add New Task</div>
                  </div>
                }
            />)
          }
          <Card
          content={
              <div className='dashboardCards'>
                <div className='text and illus'>
                  <div className='number text'>{tasks.filter(task => (task.assignee == user.id || task.assigner == user.id) && task.status === "Pending").length}</div>
                  <div className='iconContainer centerY' style={{backgroundColor: 'rgba(51, 173, 209, 0.5)'}}>
                    <Pending/>
                  </div>
                </div>
                <div className='band text' style={{backgroundColor: 'rgba(51, 173, 209, 0.5)', borderColor: 'rgba(51, 173, 209, 1)'}}>Pending Tasks</div>
              </div>
            }
          />
          <Card
          content={
              <div className='dashboardCards'>
                <div className='text and illus'>
                  <div className='number text'>{tasks.filter(task => (task.assignee == user.id || task.assigner == user.id) && task.status === "In Progress").length}</div>
                  <div className='iconContainer centerY' style={{backgroundColor: 'rgba(246, 145, 52, 0.5)'}}>
                    <InProgress/>
                  </div>
                </div>
                <div className='band text' style={{backgroundColor: 'rgba(246, 145, 52, 0.5)', borderColor: 'rgba(246, 145, 52, 1)'}}>In Progress Tasks</div>
              </div>
            }
          />
          <Card
          content={
              <div className='dashboardCards'>
                <div className='text and illus'>
                  <div className='number text'>{tasks.filter(task => (task.assignee == user.id || task.assigner == user.id) && task.status === "Completed").length}</div>
                  <div className='iconContainer centerY' style={{backgroundColor: 'rgba(100, 218, 105, 0.5)'}}>
                    <Completed/>
                  </div>
                </div>
                <div className='band text' style={{backgroundColor: 'rgba(100, 218, 105, 0.5)', borderColor: 'rgba(100, 218, 105, 1)'}}>Completed Tasks</div>
              </div>
            }
          />
        </div>
        <Card content={
          user.role === "Assigner" ? (
          <div style={{padding: '1rem', boxSizing: 'border-box'}}>
            <div className="content text">Recent Tasks</div>
            {tasks.filter((task) => task.assignee == user.id || task.assigner == user.id).length === 0 ? (
                <div className='noData'><Done/>No Tasks Found</div>
              ) : (<table className="text full">
              <thead>
                <tr>
                  <th style={{flex: '1'}}>No.</th>
                  <th style={{flex: '2'}}>Task</th>
                  <th style={{flex: '2'}}>Assignee</th>
                  <th style={{flex: '2'}}>Department</th>
                  <th style={{flex: '2'}}>Date Created</th>
                  <th style={{flex: '1', textAlign: 'center'}}>Status</th>
                  <th style={{flex: '1', textAlign: 'center'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.filter((task) => task.assignee == user.id || task.assigner == user.id).slice(-4).reverse().map((task, index) => (
                  <tr key={index}>
                    <td style={{flex: '1'}}>{index+1}</td>
                    <td style={{flex: '2'}}>{task.task}</td>
                    <td style={{flex: '2'}}>{users.find(user => user.id === task.assignee).name}</td>
                    <td style={{flex: '2'}}>{users.find(user => user.id === task.assignee).department}</td>
                    <td style={{flex: '2'}}>{task.created}</td>
                    <td style={{flex: '1', textAlign: 'center', paddingTop: '0px', paddingBottom: '0px'}}>
                      <div className={task.status + ' status'}>{task.status}</div>
                    </td>
                    <td style={{flex: '1', textAlign: 'center', color: 'grey', cursor: 'pointer'}}>View</td>
                  </tr>
                ))}
                </tbody>
            </table>)}
          </div>) : (
          <div style={{padding: '1rem', boxSizing: 'border-box'}}>
            <div className="content text">New Pending Tasks</div>
            {tasks.filter((task) => task.assignee === user.id && task.status === 'Pending').length === 0 ? (
                <div className='noData'><Done/>No Pending Tasks</div>
              ) : (
                <table className="text full">
                  <thead>
                    <tr>
                      <th style={{flex: '1'}}>No.</th>
                      <th style={{flex: '2'}}>Task</th>
                      <th style={{flex: '2'}}>Assigner</th>
                      <th style={{flex: '3'}}>Description</th>
                      <th style={{flex: '2'}}>Date Created</th>
                      <th style={{flex: '1', textAlign: 'center'}}>Status</th>
                      <th style={{flex: '1', textAlign: 'center'}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.filter((task) => task.assignee === user.id && task.status === 'Pending').slice(-4).reverse().map((task, index) => (
                      <tr key={index}>
                        <td style={{flex: '1'}}>{index+1}</td>
                        <td style={{flex: '2'}}>{task.task}</td>
                        <td style={{flex: '2'}}>{users.find(user => user.id === task.assigner).name}</td>
                        <td style={{flex: '3'}}>{task.details.length > 35 ? task.details.substring(0, 35) + '...' : task.details}</td>
                        <td style={{flex: '2'}}>{task.created}</td>
                        <td style={{flex: '1', textAlign: 'center', paddingTop: '0px', paddingBottom: '0px'}}>
                          <div className={task.status + ' status'}>{task.status}</div>
                        </td>
                        <td style={{flex: '1', paddingTop: '.3rem', paddingBottom: '.3rem'}}>
                          <div className='startBtn' onClick={() => {task.status = 'In Progress'; updateTasksData([...tasks])}}>Start</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>)}
          </div>)
        }/>
        <Card content={
         user.role === "Assigner" ? (<div style={{padding: '1rem', boxSizing: 'border-box'}}>
            <div className="content text">Assignees</div>
            <table className="text full">
              <thead>
                <tr>
                  <th style={{flex: '1'}}>No.</th>
                  <th style={{flex: '2'}}>Name</th>
                  <th style={{flex: '2'}}>Email Address</th>
                  <th style={{flex: '1'}}>Department</th>
                  <th style={{flex: '1', textAlign: 'center'}}>In Progress Tasks</th>
                  <th style={{flex: '1', textAlign: 'center'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.filter((assignee) => assignee.role === "Assignee").reverse().map((assignee, index) => (
                  <tr key={index}>
                    <td style={{flex: '1'}}>{index+1}</td>
                    <td style={{flex: '2'}}>{assignee.name}</td>
                    <td style={{flex: '2'}}>{assignee.email}</td>
                    <td style={{flex: '1'}}>{assignee.department}</td>
                    <td style={{flex: '1', textAlign: 'center'}}>
                      {tasks.filter(task => task.status === "In Progress" && task.assignee === assignee.id && task.assigner === user.id).length}
                    </td>
                    <td style={{flex: '1', textAlign: 'center'}}><Message/></td>
                  </tr>
                )).slice(-4)}
              </tbody>
            </table>
          </div>) : (
          <div style={{padding: '1rem', boxSizing: 'border-box'}}>
            <div className="content text">My Tasks</div>
            {tasks.filter((task) => (task.assignee === user.id && task.status != 'Pending')).length === 0 ? (
                <div className='noData'><Done/>No Tasks Found</div>
              ) : (<table className="text full">
              <thead>
                <tr>
                  <th style={{flex: '1'}}>No.</th>
                  <th style={{flex: '2'}}>Task</th>
                  <th style={{flex: '4'}}>Details</th>
                  <th style={{flex: '2'}}>Date Created</th>
                  <th style={{flex: '2', textAlign: 'center'}}>Status</th>
                  <th style={{flex: '1', textAlign: 'center'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.filter((task) => (task.assignee === user.id && task.status != 'Pending')).reverse().splice(0, 4).map((task, index) => (
                  <tr key={index}>
                    <td style={{flex: '1'}}>{index+1}</td>
                    <td style={{flex: '2'}}>{task.task}</td>
                    <td style={{flex: '4'}}>{task.details.length > 35 ? task.details.substring(0, 55) + '...' : task.details}</td>
                    <td style={{flex: '2'}}>{task.created}</td>
                    <td style={{flex: '2', textAlign: 'center', paddingTop: '0px', paddingBottom: '0px'}}>
                      <div className={task.status + ' status'}>{task.status}</div>
                    </td>
                    <td style={{flex: '1', textAlign: 'center', color: 'grey', cursor: 'pointer'}}>View</td>
                  </tr>
                ))}
              </tbody>
            </table>)}
          </div>)
        }/>
        <div ref={modalRef} className='overlay centerY' style={{display: "none"}}>
            <NewTaskModal closeModal={closeModal} tasks={tasks} users={users} user={user} updateTasksData={updateTasksData}/>
        </div>
      </div>
    )
}

DashboardWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  updateTasksData: PropTypes.func
};