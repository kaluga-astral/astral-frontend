import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';

const Form = ({
  preventShowError, children, className, classes, ...props
}) => (
  <FinalForm {...props}>
    {({ handleSubmit, ...formState }) => {
      const { submitError } = formState;

      return (
        <form noValidate className={className} onSubmit={handleSubmit}>
          {!preventShowError
            && submitError && (
              <div className={classes.error}>
                {(submitError || { response: { data: {} } }).response.data.message
                  || submitError.message}
              </div>
          )}
          {children(formState)}
        </form>
      );
    }}
  </FinalForm>
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

export default withStyles({
  error: {
    padding: '12.5px 25px',
    fontWeight: 300,
    color: '#c00000', // FIXME: вынести цвета в тему
  },
})(Form);
