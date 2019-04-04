import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

import WarningMessageStyles from './WarningMessage.styles';



const styles = theme => WarningMessageStyles(theme);


const WarningMessage = ({
  open,
  onClose,
  classes,
}) => (
  <Snackbar
    className={classes.root}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    open={open}
  >
    <SnackbarContent
      className={classes.content}
      classes={{
        root: classes.contentRoot,
        action: classes.contentAction,
      }}
      aria-describedby='warning-snackbar'
      message={(
        <span
          id='warning-snackbar'
          className={classes.message}
        >
          <WarningIcon className={classNames(classes.icon, classes.iconVariant)} />
          данные не сохранены
        </span>
      )}
      action={[
        <Button
          key='close'
          className={classes.button}
          aria-label='Закрыть'
          variant='contained'
          onClick={onClose}
        >
          Закрыть без сохранения
        </Button>,
      ]}
    />
  </Snackbar>
);


WarningMessage.propTypes = {
  open:     PropTypes.bool.isRequired,
  onClose:  PropTypes.func.isRequired,
  classes:  PropTypes.object.isRequired,
};

export default memo(
  withStyles(styles)(WarningMessage),
  (prevProp, nextProp) => prevProp.open === nextProp.open,
);
