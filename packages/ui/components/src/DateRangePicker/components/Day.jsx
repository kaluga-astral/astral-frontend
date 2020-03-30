import PropTypes from 'prop-types';
import cn from 'classNames';
import React from 'react';
import { IconButton, Typography } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => ({
  leftBorderRadius: {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  rightBorderRadius: {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    height: 32,
    width: 32,
    padding: 0,
  },
  buttonText: {
    lineHeight: 1.6,
  },
  outlined: {
    border: `1px solid ${theme.palette.primary.dark}`,
  },
  filled: {
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    backgroundColor: theme.palette.primary.dark,
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
    '&:hover': {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    },
  },
  contrast: {
    color: theme.palette.primary.contrastText,
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
      className={cn(classes.buttonContainer, {
        [classes.leftBorderRadius]: startOfRange,
        [classes.rightBorderRadius]: endOfRange,
        [classes.highlighted]: !disabled && highlighted,
      })}
    >
      <IconButton
        className={cn(classes.button, {
          [classes.outlined]: !disabled && outlined,
          [classes.filled]: !disabled && filled,
        })}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onHover}
      >
        <Typography
          className={cn(classes.buttonText, {
            [classes.contrast]: !disabled && filled,
          })}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
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
