import PropTypes from 'prop-types';
import cn from 'classNames';
import React from 'react';
import { Button } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // '&:hover': {
    //   borderTopRightRadius: '50%',
    //   borderBottomRightRadius: '50%',
    // },
  },
  leftBorderRadius: {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  rightBorderRadius: {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
  highlighted: {
    backgroundColor: theme.palette.action.hover,
    '&:first-child': {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    },
    '&:last-child': {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    },
    // '&:hover': {
    //   borderTopRightRadius: '0',
    //   borderBottomRightRadius: '0',
    // },
  },
  button: {
    minWidth: 32,
    width: 32,
    height: 32,
    padding: 0,
    borderRadius: '50%',
    fontWeight: theme.typography.fontWeightRegular,
  },
  outlined: {
    border: `1px solid ${theme.palette.primary.dark}`,
  },
  filled: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Day = ({
  startOfRange,
  endOfRange,
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value,
}) => {
  const classes = useStyles();
  return (
    <div
      className={cn(classes.root, {
        [classes.leftBorderRadius]: startOfRange,
        [classes.rightBorderRadius]: endOfRange,
        [classes.highlighted]: !disabled && highlighted,
      })}
    >
      <Button
        className={cn(classes.button, {
          [classes.outlined]: !disabled && outlined,
          [classes.filled]: !disabled && filled,
        })}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onHover}
      >
        {value}
      </Button>
    </div>
  );
};

// Day.propTypes = {
//   disabled: PropTypes.bool,
//   endOfRange: PropTypes.bool,
//   filled: PropTypes.bool,
//   highlighted: PropTypes.bool,
//   onClick: PropTypes.any,
//   onHover: PropTypes.any,
//   outlined: PropTypes.bool,
//   startOfRange: PropTypes.bool,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

export default Day;
