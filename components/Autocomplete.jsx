import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select, { components as defaultComponents } from 'react-select';
import { isFunction } from 'lodash-es';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    border: '1px solid #eee',
    borderRadius: '4px',
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `0 ${theme.spacing.unit / 4}px`,
    fontWeight: 500,
    borderRadius: 4,
    padding: '7px 0',
    backgroundColor: '#0a65b0',
    color: '#fff',
    height: 10
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 14,
    padding: '3px 12px',
    fontWeight: 300
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 14,
    padding: '6px 10px',
    color: '#D8D8D8'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    borderRadius: '4px'
  },
  divider: {
    height: 300,
    color: 'red'
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        disableUnderline: true,
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      className={props.selectProps.classes.menuItem}
      style={{
        fontWeight: props.isSelected ? 400 : 300,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const DropdownIndicator = (props) => {
  return components.DropdownIndicator && (
    <defaultComponents.DropdownIndicator {...props}>
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0944805 0.263158L0.285453 0.0873065C0.411871 -0.0291022 0.616293 -0.0291022 0.742711 0.0873065L5.99849 4.92941L11.257 0.0873065C11.3834 -0.0291022 11.5878 -0.0291022 11.7142 0.0873065L11.9052 0.263158C12.0316 0.379567 12.0316 0.567802 11.9052 0.684211L6.22981 5.91269C6.10339 6.0291 5.89897 6.0291 5.77255 5.91269L0.0971699 0.684211C-0.0319376 0.567802 -0.0319376 0.379567 0.0944805 0.263158Z" fill="black"/>
      </svg>
    </defaultComponents.DropdownIndicator>
  );
};

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  DropdownIndicator
};

class Autocomplete extends React.Component {
  handleChange = value => {
    const { onChange } = this.props;
    if (isFunction(onChange)) {
      onChange(value);
    }
  };

  render() {
    const { classes, theme, options, value, placeholder, label, isMulti, isLoading, isDisabled, onInputChange, onMenuOpen } = this.props;

    const selectStyles = {
      container: base => ({
        ...base,
        minWidth: 200
      }),
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
      clearIndicator: base => ({
        padding: '0px 8px'
      }),
      indicatorSeparator: base => ({
        ...base,
        display: 'none'
      }),
    };

    return (
      <div className="autocomplete-wrapper">
        <label>{label}</label>
        <Select
          classes={classes}
          styles={selectStyles}
          options={options}
          components={components}
          value={value || ''}
          placeholder={placeholder}
          // textFieldProps={{ label, InputLabelProps: { shrink: true } }}
          isMulti={isMulti}
          isLoading={isLoading}
          isDisabled={isDisabled}
          onChange={this.handleChange}
          onInputChange={onInputChange}
          onMenuOpen={onMenuOpen}
        />
      </div>
    );
  }
}

Autocomplete.defaultProps = {
  placeholder: 'Выберите значение',
  isMulti: false,
  isLoading: false,
  isDisabled: false
};

Autocomplete.propTypes = {
  isMulti: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Autocomplete);
