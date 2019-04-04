import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

import styles from './TaskListLayout.styles';



const TaskListLayout = ({
  classes,
  children,
}) => (
  <Paper
    className={classes.root}
    elevation={0}
  >
    <Table
      className={classes.table}
      padding='dense'
    >
      {children}
    </Table>
  </Paper>
);

TaskListLayout.propTypes = {
  classes:  PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(TaskListLayout);
