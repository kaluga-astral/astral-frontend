import PropTypes from 'prop-types';
import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@astral-frontend/components';
import { FormHelperText, FormLabel } from '@material-ui/core';
import { makeStyles } from '@astral-frontend/styles';

import Field from '../Field';

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
  value,
  onChange,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Field
      {...props}
      render={({ name, helperText, error }) => (
        <FormControl
          fullWidth={fullWidth}
          error={Boolean(error)}
          component="fieldset"
          className={className}
        >
          {groupLabel && (
            <FormLabel component="legend" className={classes.formLabel}>
              {groupLabel}
            </FormLabel>
          )}
          <RadioGroup
            aria-label={name}
            name={name}
            value={value}
            onChange={onChange}
          >
            {options.map(option => (
              <FormControlLabel
                labelPlacement={labelPlacement}
                control={
                  option.renderControl ? (
                    option.renderControl(option)
                  ) : (
                    <Radio checked={value === option.value} />
                  )
                }
                key={option.key || option.value}
                {...option}
              />
            ))}
          </RadioGroup>
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

RadioGroupField.defaultProps = {
  fullWidth: false,
  row: false,
  labelPlacement: 'end',
  className: null,
  groupLabel: null,
  value: '',
};

RadioGroupField.propTypes = {
  fullWidth: PropTypes.bool,
  row: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  className: PropTypes.string,
  /** Главный label === Mui FormLabel */
  groupLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroupField;
