import React, { memo } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import FlagIcon from '@material-ui/icons/Flag';



const StatusSelectGroup = ({
  value,
  options,
  onChange,
}) => (
  <FormControl margin='normal'>
    <InputLabel htmlFor='taskForm-status'>
      Статус
    </InputLabel>
    <Select
      value={value}
      onChange={e => onChange(e.target.value)}
      inputProps={{
        name: 'status',
        id: 'taskForm-status',
      }}
      startAdornment={(
        <InputAdornment position='start'>
          <FlagIcon color='action' />
        </InputAdornment>
      )}
    >
      {
        options.map(option => (
          <MenuItem
            key={option}
            value={option}
          >
            {option}
          </MenuItem>
        ))
      }
    </Select>
  </FormControl>
);

StatusSelectGroup.propTypes = {
  value:    PropTypes.string.isRequired,
  options:  PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(
  StatusSelectGroup,
  (prevProps, nextProps) => prevProps.value === nextProps.value,
);
