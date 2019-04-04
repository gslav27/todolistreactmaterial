import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { taskInterface } from '_Utils_/types/interfaces';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Loader from '_Ui_/Loader/Loader';
import TaskStatusMenu from '../TaskStatusMenu/TaskStatusMenu';

import styles from './Task.styles';



const Task = ({
  data,
  onStatusUpdate,
  onEdit,
  onDelete,
  classes,
}) => {
  const [showLoader, setShowLoader] = useState(false);

  function handleDeleteTask() {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      onDelete();
    }, 2000);
  }

  return (
    <TableRow
      className={classes.root}
      key={data.id}
    >
      <TableCell
        component='th'
        scope='row'
      >
        {data.id}
      </TableCell>
      <TableCell>
        <TaskStatusMenu
          onChange={onStatusUpdate}
          currentValue={data.status}
        />
      </TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.description}</TableCell>
      <TableCell>{data.date}</TableCell>
      <TableCell>{data.priority}</TableCell>
      <TableCell>{data.tag}</TableCell>
      <TableCell
        className={classes.actionsCell}
        padding='none'
        align='center'
      >
        {showLoader && <Loader size={30} />}
        <IconButton
          className={classes.iconButton}
          aria-label='Редактировать'
          title='Редактировать'
          onClick={onEdit}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          aria-label='Удалить'
          title='Удалить'
          onClick={handleDeleteTask}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

Task.propTypes = {
  data:           PropTypes.shape(taskInterface).isRequired,
  onStatusUpdate: PropTypes.func.isRequired,
  onEdit:         PropTypes.func.isRequired,
  onDelete:       PropTypes.func.isRequired,
  classes:        PropTypes.object.isRequired,
};

export default memo(
  withStyles(styles)(Task),
  (prevProp, nextProp) => prevProp.data === nextProp.data,
);
