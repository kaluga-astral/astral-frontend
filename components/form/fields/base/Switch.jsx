import PropTypes from 'prop-types';
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Field from '../Field';

const SwitchField = props => (
  <Field {...props} type="checkbox">
    {({
      input: {
        checked, value, name, onChange,
      },
    }) => (
      <FormControlLabel
        control={<Switch value={String(value)} name={name} onChange={onChange} checked={checked} />}
      />
    )}
  </Field>
);

SwitchField.defaultProps = {
  placeholder: 'Введите текст',
};

SwitchField.propTypes = {
  name: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default SwitchField;

// // FIXME: need refactoring
// import PropTypes from 'prop-types';
// import React from 'react';
// import { Field } from 'react-final-form';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// import Switch from '../../../Switch';
// import { compose } from '../../../../validations/helpers';
// import * as rules from '../../../../validations/rules';

// const ChekboxField = ({
//   fullWidth, disabled, required, validate, name, label, className,
// }) => (
//   <Field
//     name={name}
//     type="Switch"
//     validate={
//       required
//         ? compose(
//           rules.required,
//           validate,
//         )
//         : null
//     }
//   >
//     {({ input: { checked, onChange }, meta }) => (
//       <FormControl
//         disabled={disabled}
//         fullWidth={fullWidth}
//         required={required}
//         margin="normal"
//         className={className}
//         error={meta.touched && !meta.valid}
//       >
//         <FormControlLabel
//           control={<Switch checked={checked} onChange={onChange} />}
//           label={label}
//         />
//         {(meta.error || meta.submitError)
//           && meta.touched && <FormHelperText>{meta.error || meta.submitError}</FormHelperText>}
//       </FormControl>
//     )}
//   </Field>
// );

// ChekboxField.defaultProps = {
//   fullWidth: true,
//   disabled: false,
//   required: false,
//   label: null,
//   className: null,
//   validate: null,
// };

// ChekboxField.propTypes = {
//   fullWidth: PropTypes.bool,
//   disabled: PropTypes.bool,
//   required: PropTypes.bool,
//   className: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   validate: PropTypes.func,
//   label: PropTypes.string,
// };

// export default ChekboxField;
