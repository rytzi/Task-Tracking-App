import PropTypes from 'prop-types'
import { Card } from "../widgets/Card"
import { AddNewTask, Completed, InProgress, Pending} from '../assets/Icons';

export const DashboardWidget = ({tasks, users}) => {
    return(
        <div className='dashboardContainer'>
          <div className='subtitle text'>Dashboard</div>
          <div className='cards'>
            <Card 
            className='addNewTask'
            cardWidth={"15rem"}
            content={
                <div className='addNewTask'>
                  <div className='icon centerY' style={{width: '30%', padding: '2rem'}}>
                    <AddNewTask/>
                  </div>
                  <div className='text option'>Add New Task</div>
                </div>
              }
            />
            <Card
            cardWidth={"25rem"}
            content={
                <div className='dashboardCards'>
                  <div className='text and illus'>
                    <div className='number text'>{tasks.filter(task => task.status === "Pending").length}</div>
                    <div className='iconContainer centerY' style={{backgroundColor: 'rgba(51, 173, 209, 0.5)'}}>
                      <Pending/>
                    </div>
                  </div>
                  <div className='band text' style={{backgroundColor: 'rgba(51, 173, 209, 0.5)', borderColor: 'rgba(51, 173, 209, 1)'}}>Pending Tasks</div>
                </div>
              }
            />
            <Card
            cardWidth={"25rem"}
            content={
                <div className='dashboardCards'>
                  <div className='text and illus'>
                    <div className='number text'>{tasks.filter(task => task.status === "In Progress").length}</div>
                    <div className='iconContainer centerY' style={{backgroundColor: 'rgba(246, 145, 52, 0.5)'}}>
                      <InProgress/>
                    </div>
                  </div>
                  <div className='band text' style={{backgroundColor: 'rgba(246, 145, 52, 0.5)', borderColor: 'rgba(246, 145, 52, 1)'}}>In Progress Tasks</div>
                </div>
              }
            />
            <Card
            cardWidth={"25rem"}
            content={
                <div className='dashboardCards'>
                  <div className='text and illus'>
                    <div className='number text'>{tasks.filter(task => task.status === "Complete").length}</div>
                    <div className='iconContainer centerY' style={{backgroundColor: 'rgba(100, 218, 105, 0.5)'}}>
                      <Completed/>
                    </div>
                  </div>
                  <div className='band text' style={{backgroundColor: 'rgba(100, 218, 105, 0.5)', borderColor: 'rgba(100, 218, 105, 1)'}}>Completed Tasks</div>
                </div>
              }
            />
          </div>
          <Card cardHeight={'35%'} content={
            <div style={{padding: '1rem', boxSizing: 'border-box'}}>
              <div className="content text">Recent Tasks</div>
              <table className="text full">
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
                  {tasks.slice(-4).reverse().map((task, index) => (
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
              </table>
            </div>
          }/>
          <Card cardHeight={'35%'} content={
            <div style={{padding: '1rem', boxSizing: 'border-box'}}>
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
                  {users.slice(-4).reverse().map((user, index) => (
                    <tr key={index}>
                      <td style={{flex: '1'}}>{index+1}</td>
                      <td style={{flex: '2'}}>{user.name}</td>
                      <td style={{flex: '2'}}>{user.email}</td>
                      <td style={{flex: '1'}}>{user.department}</td>
                      <td style={{flex: '1', textAlign: 'center'}}>
                        {tasks.filter(task => task.status === "In Progress" & task.assignee === user.id).length}
                      </td>
                      <td style={{flex: '1', textAlign: 'center'}}>icon</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }/>
        </div> 
    )
}

DashboardWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object)
};