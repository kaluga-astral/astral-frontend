import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { withStylesProps } from '@astral-frontend/styles';

const FlexItem = ({
  classes, className, component: Component, grow, ...props
}) => (
  <Component className={cn(classes.root, className)} {...props} />
);

FlexItem.defaultProps = {
  className: null,
  component: 'div',
  grow: 1,
};

FlexItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]),
  grow: PropTypes.number,
};

export default withStylesProps(props => ({
  root: {
    flexGrow: props.grow,
  },
}))(FlexItem);
