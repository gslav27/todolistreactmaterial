import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';



const PriorityRadioGroup = ({
  value,
  options,
  onChange,
}) => (
  <FormControl
    component='fieldset'
    margin='normal'
  >
    <RadioGroup
      aria-label='приоритетность'
      value={value}
      onChange={(_, v) => onChange(v)}
    >
      {
        options.map(option => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio color='primary' />}
            label={option}
          />
        ))
      }
    </RadioGroup>
  </FormControl>
);


PriorityRadioGroup.propTypes = {
  value:    PropTypes.string.isRequired,
  options:  PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(
  PriorityRadioGroup,
  (prevProps, nextProps) => prevProps.value === nextProps.value,
);
