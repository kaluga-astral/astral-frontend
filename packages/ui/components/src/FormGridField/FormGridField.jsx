import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@astral-frontend/styles';

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
  component: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string, PropTypes.func]).isRequired,
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
