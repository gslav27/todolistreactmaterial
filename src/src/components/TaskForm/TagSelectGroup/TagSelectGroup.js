import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';

import TagSelectGroupStyles from './TagSelectGroup.styles';



const styles = theme => TagSelectGroupStyles(theme);


/* eslint-disable react/prop-types */
const NoOptionsMessage = props => (
  <Typography
    color='textSecondary'
    className={props.selectProps.classes.noOptionsMessage}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);


const inputComponent = ({ inputRef, ...props }) => <div ref={inputRef} {...props} />;


const Control = props => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children,
        ...props.innerProps,
      },
      startAdornment: (
        <InputAdornment position='start'>
          <FormatPaintIcon color='action' />
        </InputAdornment>
      ),
    }}
    {...props.selectProps.textFieldProps}
  />
);


const Option = props => (
  <MenuItem
    buttonRef={props.innerRef}
    selected={props.isFocused}
    component='div'
    style={{ fontWeight: props.isSelected ? 500 : 400 }}
    {...props.innerProps}
  >
    {props.children}
  </MenuItem>
);


const Placeholder = props => (
  <Typography
    color='textSecondary'
    className={props.selectProps.classes.placeholder}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);


const SingleValue = props => (
  <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
    {props.children}
  </Typography>
);


const ValueContainer = props => (
  <div className={props.selectProps.classes.valueContainer}>
    {props.children}
  </div>
);


const Menu = props => (
  <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
    {props.children}
  </Paper>
);


const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};


const TagSelectGroup = ({
  value,
  onChange,
  options,
  classes,
  theme,
}) => {
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': { font: 'inherit' },
    }),
  };

  return (
    <Select
      classes={classes}
      styles={selectStyles}
      options={options}
      components={components}
      value={(() => options.find(tag => tag.value === value))()}
      onChange={onChange}
      placeholder='тег'
    />
  );
};

TagSelectGroup.propTypes = {
  value:    PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options:  PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  classes:  PropTypes.object.isRequired,
  theme:    PropTypes.object.isRequired,
};

export default memo(
  withStyles(styles, { withTheme: true })(TagSelectGroup),
  (prevProp, nextProp) => prevProp.value === nextProp.value,
);
