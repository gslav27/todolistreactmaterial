import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Loader.styles';



const Loader = ({ classes, size }) => (
  <div className={classes.root}>
    <CircularProgress size={size} />
  </div>
);

Loader.propTypes = {
  size:    PropTypes.number,
  classes: PropTypes.object.isRequired,
};

Loader.defaultProps = { size: 42 };

export default withStyles(styles)(Loader);
