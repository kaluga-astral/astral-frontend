import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import FlexItem from '../FlexItem';

const FormGridField = ({ classes, className, ...props }) => (
  <FlexItem className={cn(classes.root, className)} {...props} />
);

FormGridField.defaultProps = {
  className: null,
};

FormGridField.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {
    '&:not(:last-child)': {
      marginRight: '20px',
    },
  },
})(FormGridField);
