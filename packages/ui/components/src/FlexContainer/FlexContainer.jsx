import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { withStylesProps } from '@astral-frontend/styles';

const FlexContainer = ({
  classes,
  className,
  component: Component,
  direction,
  alignItems,
  justifyContent,
  ...props
}) => <Component className={cn(classes.root, className)} {...props} />;

FlexContainer.defaultProps = {
  className: null,
  direction: null,
  alignItems: null,
  justifyContent: null,
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
  alignItems: PropTypes.oneOf([
    'normal',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  justifyContent: PropTypes.oneOf([
    'start',
    'end',
    'flex-start',
    'flex-end',
    'center',
    'left',
    'right',
    'baseline',
    'first baseline',
    'last baseline',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'safe',
    'unsafe',
  ]),
};

export default withStylesProps(props => ({
  root: {
    display: 'flex',
    flexDirection: props.direction,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
  },
}))(FlexContainer);
