import React from 'react';

import { useStore } from '../store/store';
import {
  openTaskForm,
  deleteTask,
  updateTask,
} from '../store/actionCreators';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TaskListLayout from '../components/TaskList/TaskListLayout/TaskListLayout';
import Task from '../components/TaskList/Task/Task';



const tableFields = ['id', 'статус', 'название', 'описание', 'дата', 'важность', 'тег', 'действие'];

const Tasks = () => {
  const [{ tasks }, dispatch] = useStore();

  return (
    !!tasks.length && (
      <TaskListLayout>
        <TableHead>
          <TableRow>
            {
              tableFields.map(value => (
                <TableCell key={value}>
                  {value}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tasks.map(task => (
              <Task
                key={task.id}
                data={task}
                onStatusUpdate={value => dispatch(updateTask(task.id, { status: value }))}
                onEdit={() => dispatch(openTaskForm(task.id))}
                onDelete={() => dispatch(deleteTask(task.id))}
              />
            ))
          }
        </TableBody>
      </TaskListLayout>
    )
  );
};

Tasks.propTypes = {};

export default Tasks;
