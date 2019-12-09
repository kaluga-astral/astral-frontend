import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  {
    root: {
      alignSelf: props => props.alignSelf,
      flexGrow: props => props.grow,
      flexShrink: props => props.shrink,
      flexBasis: props => props.basis,
    },
  },
  {
    name: 'FlexItem',
  },
);

const FlexItem = props => {
  const {
    className,
    component: Component,
    grow,
    shrink,
    basis,
    alignSelf,
    ...other
  } = props;
  const classes = useStyles(props);

  return <Component className={cn(classes.root, className)} {...other} />;
};

FlexItem.defaultProps = {
  className: null,
  component: 'div',
  grow: 0,
  shrink: 1,
  basis: 'auto',
  alignSelf: 'auto',
};

FlexItem.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
  ]),
  alignSelf: PropTypes.oneOf([
    'auto',
    'normal',
    'center',
    'start',
    'end',
    'self-start',
    'self-end',
    'flex-start',
    'flex-end',
    'baseline',
    'first baseline',
    'last baseline',
    'stretch',
    'safe center',
    'unsafe center',
    'inherit',
    'initial',
    'unset',
  ]),
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.string,
};

export default FlexItem;
