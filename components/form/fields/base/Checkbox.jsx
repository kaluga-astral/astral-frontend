import PropTypes from 'prop-types';
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '../../../Checkbox';
import Field from '../Field';

const CheckboxField = ({
  label, icon, checkedIcon, ...props
}) => (
  <Field {...props} type="checkbox">
    {({ input: { value, ...input } }) => (
      <FormControlLabel
        label={label}
        control={
          <Checkbox icon={icon} checkedIcon={checkedIcon} {...input} value={String(value)} />
        }
      />
    )}
  </Field>
);

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
};

export default CheckboxField;
