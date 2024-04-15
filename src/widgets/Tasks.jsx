import PropTypes from 'prop-types'
import { Card } from "./Card"

export const AllTasksWidget = ({tasks, users}) => {
    return(
      <div className='tasksContainer'>
        <div className='subtitle text'>All Tasks</div>
        <Card className={'allTask'} cardHeight={'fit-content'} content={
          <div style={{padding: '1rem', boxSizing: 'border-box'}}>
            <table className="text full">
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
                {tasks.reverse().map((task, index) => (
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
            </table>
          </div>
        }/>
      </div>
    )
}

AllTasksWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object)
};

export const MyTasksWidget = ({tasks, user}) => {
  const myTasks = tasks.filter((task) => (task.assignee === user.id));
  return(
    <div className='tasksContainer'>
      <div className='subtitle text'>My Tasks</div>
      <Card cardHeight={'fit-content'} content={
        <div style={{padding: '1rem', boxSizing: 'border-box'}}>
          <table className="text full">
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
          </table>
        </div>
      }/>
    </div>
  )
}

MyTasksWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};

export const PendingTasksWidget = ({tasks, user}) => {
  const myTasks = tasks.filter((task) => (task.assignee === user.id && task.status === "Pending"));
  return(
    <div className='tasksContainer'>
      <div className='subtitle text'>My Tasks</div>
      <Card cardHeight={'fit-content'} content={
        <div style={{padding: '1rem', boxSizing: 'border-box'}}>
          <table className="text full">
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
          </table>
        </div>
      }/>
    </div>
  )
}

PendingTasksWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};