import PropTypes from 'prop-types'
import { Card } from "./Card"
import { Done } from '../assets/Graphics';

export const AllTasksWidget = ({tasks, users, user}) => {
    return(
      <div className='tasksContainer'>
        <div className='subtitle text'>All Tasks</div>
        <Card className={'allTask'} cardHeight={'fit-content'} content={
          <div style={{padding: '1rem', boxSizing: 'border-box'}}>
            {tasks.filter((task) => task.assigner === user.id).length === 0 ? (
                <div className='noData'><Done/>No Pending Tasks</div>
              ) : ( <table className="text full">
              <thead>
                <tr>
                  <th style={{flex: '1'}}>No.</th>
                  <th style={{flex: '2'}}>Task</th>
                  <th style={{flex: '4'}}>Details</th>
                  <th style={{flex: '2'}}>Assignee</th>
                  <th style={{flex: '2'}}>Department</th>
                  <th style={{flex: '2'}}>Date Created</th>
                  <th style={{flex: '2', textAlign: 'center'}}>Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.filter((task) => task.assigner === user.id).reverse().map((task, index) => (
                  <tr key={index}>
                    <td style={{flex: '1'}}>{index+1}</td>
                    <td style={{flex: '2'}}>{task.task}</td>
                    <td style={{flex: '4'}}>{task.details}</td>
                    <td style={{flex: '2'}}>{users.find(user => user.id === task.assignee).name}</td>
                    <td style={{flex: '2'}}>{users.find(user => user.id === task.assignee).department}</td>
                    <td style={{flex: '2'}}>{task.created}</td>
                    <td style={{flex: '2', textAlign: 'center', paddingTop: '0px', paddingBottom: '0px'}}>
                      <div className={task.status + ' status'}>{task.status}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>)}
          </div>
        }/>
      </div>
    )
}

AllTasksWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};

export const MyTasksWidget = ({tasks, user}) => {
  const myTasks = tasks.filter((task) => (task.assignee === user.id));
  return(
    <div className='tasksContainer'>
      <div className='subtitle text'>My Tasks</div>
      <Card cardHeight={'fit-content'} content={
        <div style={{padding: '1rem', boxSizing: 'border-box'}}>
          {myTasks.length === 0 ? (
                <div className='noData'><Done/>No Task Found</div>
              ) : ( <table className="text full">
            <thead>
              <tr>
                <th style={{flex: '1'}}>No.</th>
                <th style={{flex: '2'}}>Task</th>
                <th style={{flex: '4'}}>Details</th>
                <th style={{flex: '2'}}>Date Created</th>
                <th style={{flex: '2', textAlign: 'center'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.reverse().map((task, index) => (
                <tr key={index}>
                  <td style={{flex: '1'}}>{index+1}</td>
                  <td style={{flex: '2'}}>{task.task}</td>
                  <td style={{flex: '4'}}>{task.details}</td>
                  <td style={{flex: '2'}}>{task.created}</td>
                  <td style={{flex: '2', textAlign: 'center', paddingTop: '0px', paddingBottom: '0px'}}>
                    <div className={task.status + ' status'}>{task.status}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>)}
        </div>
      }/>
    </div>
  )
}

MyTasksWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};

export const PendingTasksWidget = ({tasks, users, user, updateTasksData}) => {
  const myTasks = tasks.filter((task) => (task.assignee === user.id && task.status === "Pending"));
  return(
    <div className='tasksContainer'>
      <div className='subtitle text'>Pending Tasks</div>
      <Card cardHeight={'fit-content'} content={
        <div style={{padding: '1rem', boxSizing: 'border-box'}}>
          {myTasks.length === 0 ? (
                <div className='noData'><Done/>No Pending Tasks</div>
              ) : ( <table className="text full">
            <thead>
              <tr>
                <th style={{flex: '1'}}>No.</th>
                <th style={{flex: '2'}}>Task</th>
                <th style={{flex: '4'}}>Details</th>
                <th style={{flex: '2'}}>Date Created</th>
                <th style={{flex: '2'}}>Assigner</th>
                <th style={{flex: '1', textAlign: 'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.reverse().map((task, index) => (
                <tr key={index}>
                  <td style={{flex: '1'}}>{index+1}</td>
                  <td style={{flex: '2'}}>{task.task}</td>
                  <td style={{flex: '4'}}>{task.details}</td>
                  <td style={{flex: '2'}}>{task.created}</td>
                  <td style={{flex: '2'}}>{users.find(user => user.id === task.assigner).name}</td>
                  <td style={{flex: '1', paddingTop: '.3rem', paddingBottom: '.3rem'}}>
                    <div className='startBtn' onClick={() => {task.status = 'In Progress'; updateTasksData([...tasks])}}>Start</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>)}
        </div>
      }/>
    </div>
  )
}

PendingTasksWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  updateTasksData: PropTypes.func
};