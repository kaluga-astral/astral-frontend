import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles({
  root: ({ direction, alignItems, justifyContent }) => ({
    display: 'flex',
    flexDirection: direction,
    alignItems,
    justifyContent,
  }),
});

const FlexContainer = ({
  className,
  component: Component,
  direction,
  alignItems,
  justifyContent,
  ...props
}) => {
  const classes = useStyles({ direction, alignItems, justifyContent });

  return <Component className={cn(classes.root, className)} {...props} />;
};

FlexContainer.defaultProps = {
  className: null,
  direction: null,
  alignItems: null,
  justifyContent: null,
  component: 'div',
};

FlexContainer.propTypes = {
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

export default FlexContainer;
