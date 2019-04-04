import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';

import AddNewTaskStyles from './AddNewTask.styles';



const styles = theme => AddNewTaskStyles(theme);


const AddNewTask = ({
  showTaskForm,
  onClick,
  classes,
}) => (
  <Button
    className={classes.button}
    aria-owns={showTaskForm ? 'toDo-form' : undefined}
    aria-haspopup='true'
    onClick={onClick}
    variant='contained'
    color='primary'
    title='добавить задачу'
  >
    <Add className={classes.leftIcon} />
    добавить задачу
  </Button>
);

AddNewTask.propTypes = {
  showTaskForm: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddNewTask);
