import PropTypes from 'prop-types'
import { Card } from "../widgets/Card"
import { Message } from '../assets/Icons';

export const EmployeesWidget = ({tasks, users, user}) => {
    return(
      <div className='Employees Container'>
        <div className='subtitle text'>Employees</div>
        <Card cardHeight={'fit-content'} content={
          <div style={{padding: '1rem', boxSizing: 'border-box'}}>
            <table className="text full">
              <thead>
                <tr>
                  <th style={{flex: '1'}}>ID No.</th>
                  <th style={{flex: '1'}}>Role</th>
                  <th style={{flex: '2'}}>Name</th>
                  <th style={{flex: '2'}}>Email Address</th>
                  <th style={{flex: '1'}}>Department</th>
                  <th style={{flex: '1', textAlign: 'center'}}>Pending Tasks</th>
                  <th style={{flex: '1', textAlign: 'center'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.filter((employee) => employee.id != user.id).map((employee, index) => (
                  <tr key={index}>
                    <td style={{flex: '1'}}>{employee.id}</td>
                    <td style={{flex: '1'}}>{employee.role}</td>
                    <td style={{flex: '2'}}>{employee.name}</td>
                    <td style={{flex: '2'}}>{employee.email}</td>
                    <td style={{flex: '1'}}>{employee.department}</td>
                    <td style={{flex: '1', textAlign: 'center'}}>
                      {tasks.filter(task => task.status === "In Progress" && task.assignee === employee.id && task.assigner === user.id).length}
                    </td>
                    <td style={{flex: '1', textAlign: 'center'}}><Message/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }/>
      </div>
    )
}

EmployeesWidget.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};