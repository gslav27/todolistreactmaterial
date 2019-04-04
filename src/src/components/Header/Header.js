import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HeaderStyles from './Header.styles';



const styles = theme => HeaderStyles(theme);


const Header = ({ classes }) => (
  <AppBar
    className={classes.appBar}
    position='static'
    elevation={2}
    color='default'
  >
    <Toolbar className={classes.toolbar}>
      <Typography
        variant='h5'
        color='inherit'
      >
        Список задач
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(Header);
