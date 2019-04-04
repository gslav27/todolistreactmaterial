import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TaskFormLayoutStyles from './TaskFormLayout.styles';



const styles = theme => TaskFormLayoutStyles(theme);


const TaskFormLayout = ({
  showForm,
  onSubmit,
  onClose,
  children,
  classes,
}) => (
  <Drawer
    id='toDo-form'
    open={showForm}
    onClose={onClose}
    anchor='right'
  >
    <form
      className={classes.form}
      onSubmit={onSubmit}
    >
      <AppBar
        className={classNames(classes.topToolBar, classes.toolBar)}
        position='static'
        elevation={2}
        color='default'
      >
        <Toolbar color='default'>
          <Typography
            variant='h5'
            color='inherit'
          >
            Новая задача
          </Typography>
        </Toolbar>
      </AppBar>
      <section className={classes.formBody}>
        {children}
      </section>
      <Toolbar className={classNames(classes.bottomToolBar, classes.toolBar)}>
        <Button
          className={classes.button}
          type='submit'
          variant='contained'
          color='primary'
        >
          Сохранить
        </Button>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={onClose}
        >
          Отмена
        </Button>
      </Toolbar>
    </form>
  </Drawer>
);


TaskFormLayout.propTypes = {
  showForm: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose:  PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  classes:  PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskFormLayout);
