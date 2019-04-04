import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { taskFormOptions } from '_Utils_/constants/constants';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import styles from './TaskStatusMenu.styles';



const TaskStatusMenu = ({
  onChange,
  currentValue,
  classes,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = !!anchorEl;

  function handleClose() {
    setAnchorEl(null);
  }

  function handleSelect(option) {
    (option !== currentValue) && onChange(option);
    handleClose();
  }

  return (
    < >
      <Button
        className={classes.root}
        aria-label='Больше'
        aria-owns={open ? 'status-menu' : undefined}
        aria-haspopup='true'
        onClick={e => setAnchorEl(e.currentTarget)}
        color='inherit'
        size='small'
        title='обновить статус'
        fullWidth
      >
        {currentValue}
        <MoreVertIcon />
      </Button>
      <Menu
        id='status-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200,
          },
        }}
      >
        {
          taskFormOptions.status.map(option => (
            <MenuItem
              key={option}
              selected={option === currentValue}
              onClick={() => handleSelect(option)}
              value={option}
            >
              {option}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );
};

TaskStatusMenu.propTypes = {
  currentValue:  PropTypes.string.isRequired,
  onChange:      PropTypes.func.isRequired,
  classes:       PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskStatusMenu);
