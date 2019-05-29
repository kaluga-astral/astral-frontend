import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import FlexContainer from '../FlexContainer';

const FormGridRow = ({
  classes, className, children, ...props
}) => (
  <FlexContainer {...props} className={cn(classes.root, className)}>
    {children}
  </FlexContainer>
);

FormGridRow.defaultProps = {
  className: null,
};

FormGridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {},
})(FormGridRow);
