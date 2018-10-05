import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';

import AutoSave from './AutoSave';

const Form = ({
  variantDisplayingError, autoSave, children, className, classes, ...props
}) => (
  <FinalForm {...props}>
    {({ handleSubmit, ...formState }) => {
      const { submitError } = formState;

      return (
        <form noValidate className={className} onSubmit={handleSubmit}>
          {autoSave && <AutoSave />}
          {variantDisplayingError === 'alert'
            && submitError && <div className={classes.error}>{submitError}</div>}
          {/* {variantDisplayingError === 'snackbar'
            && submitError && <Snackbar open message="sdfsfsd" />} */}
          {children(formState)}
        </form>
      );
    }}
  </FinalForm>
);

Form.defaultProps = {
  className: null,
  variantDisplayingError: 'alert',
};

Form.propTypes = {
  variantDisplayingError: PropTypes.oneOf(['alert', 'snackbar']),
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles({
  error: {
    padding: '12.5px 0',
    fontWeight: 300,
    color: '#c00000', // FIXME: вынести цвета в тему
  },
})(Form);
