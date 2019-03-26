import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const FormGridField = ({
  classes, className, component: Component, ...props
}) => (
  <Component className={cn(classes.root, className)} {...props} />
);

FormGridField.defaultProps = {
  className: null,
};

FormGridField.propTypes = {
  className: PropTypes.string,
  component: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {
    flex: 1,

    '&:not(:last-child)': {
      marginRight: '20px',
    },
  },
})(FormGridField);