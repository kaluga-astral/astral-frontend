import PropTypes from 'prop-types';
import React from 'react';
import { FormHelperText, FormLabel } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

import FormControl from '../FormControl';
import FormControlLabel from '../FormControlLabel';
import Radio from '../Radio';
import RadioGroup from '../RadioGroup';

const useStyles = makeStyles(
  theme => ({
    root: {},
    formLabel: {
      marginBottom: theme.spacing(2),
      color: theme.palette.gray[800],
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  { name: 'RadioGroupField' },
);

const RadioGroupField = ({
  fullWidth,
  row,
  className,
  groupLabel,
  labelPlacement,
  options,
  name,
  isError,
  value,
  helperText,
  ...props
}) => {
  const classes = useStyles();

  return (
    <FormControl
      fullWidth={fullWidth}
      error={isError}
      component="fieldset"
      className={className}
    >
      {groupLabel && (
        <FormLabel component="legend" className={classes.formLabel}>
          {groupLabel}
        </FormLabel>
      )}
      <RadioGroup {...props} row={row} aria-label={name} name={name}>
        {options.map(option => (
          <FormControlLabel
            {...option}
            key={option.value}
            labelPlacement={labelPlacement}
            control={<Radio checked={value === option.value} />}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

RadioGroupField.defaultProps = {
  fullWidth: false,
  row: false,
  labelPlacement: 'end',
  className: null,
  groupLabel: null,
};

RadioGroupField.propTypes = {
  fullWidth: PropTypes.bool,
  row: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  className: PropTypes.string,
  /** Главный label === Mui FormLabel */
  groupLabel: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  isError: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroupField;
