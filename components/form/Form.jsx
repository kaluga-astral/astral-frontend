import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';

import SubmitButton from './SubmitButton';

const Form = ({
  preventShowError, children, className, onSubmit, classes, ...props
}) => (
  <FinalForm
    {...props}
    onSubmit={onSubmit}
    render={({ handleSubmit, ...formState }) => {
      const { submitFailed, submitError } = formState;

      return (
        <form noValidate className={className} onSubmit={handleSubmit}>
          {!preventShowError &&
            submitFailed &&
            submitError && <div className={classes.error}>{submitError}</div>}
          {children(formState)}
        </form>
      );
    }}
  />
);

Form.defaultProps = {
  className: null,
  preventShowError: false,
};

Form.propTypes = {
  preventShowError: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Form.SubmitButton = SubmitButton;

export default withStyles({
  error: {
    marginBottom: '25px',
    fontWeight: 300,
    color: '#c00000', // FIXME: вынести цвета в тему
  },
})(Form);
