import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { withStylesProps } from '@astral-frontend/styles';

const FlexContainer = ({
  classes, className, component: Component, direction, ...props
}) => (
  <Component className={cn(classes.root, className)} {...props} />
);

FlexContainer.defaultProps = {
  className: null,
  direction: null,
  component: 'div',
};

FlexContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
    'inherit',
    'initial',
    'unset',
  ]),
};

export default withStylesProps(props => ({
  root: {
    display: 'flex',
    flexDirection: props.direction,
  },
}))(FlexContainer);
