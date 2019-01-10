import PropTypes from "prop-types";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Field from "../Field";
import Switch from "../../../Switch";

const SwitchField = props => (
  <Field {...props} type="checkbox">
    {({ input: { value, ...input } }) => (
      <FormControlLabel control={<Switch {...input} value={String(value)} />} />
    )}
  </Field>
);

SwitchField.defaultProps = {
  placeholder: "Введите текст"
};

SwitchField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default SwitchField;
