import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';
import { Button } from '@astral/core';
import { makeStyles } from '@astral/styles';

import FlexContainer from '../FlexContainer';

const useStyles = makeStyles(theme => ({
  root: {
    width: 48,
    height: 32,
    '&:first-child': {
      width: 40,
      paddingRight: theme.spacing(2),
    },
    '&:last-child': {
      width: 40,
      paddingLeft: theme.spacing(2),
    },
  },
  leftBorderRadius: {
    width: 40,
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    '&:first-child': {
      marginLeft: 0,
      paddingRight: theme.spacing(2),
      paddingLeft: 0,
    },
    '&:last-child': {
      width: 32,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  rightBorderRadius: {
    width: 40,
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    '&:first-child': {
      width: 32,
      paddingRight: 0,
      paddingLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
      paddingRight: 0,
    },
  },
  highlighted: {
    backgroundColor: theme.palette.action.hover,
    '&:first-child': {
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
    },
    '&:last-child': {
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
    },
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
  disabled,
  endOfRange,
  filled,
  highlighted,
  onClick,
  onHover,
  outlined,
  startOfRange,
  value,
}) => {
  const classes = useStyles();

  return (
    <FlexContainer
      justifyContent="center"
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
        onFocus={onHover}
      >
        {value}
      </Button>
    </FlexContainer>
  );
};

Day.defaultProps = {
  disabled: false,
  endOfRange: false,
  filled: false,
  highlighted: false,
  outlined: false,
  startOfRange: false,
};

Day.propTypes = {
  disabled: PropTypes.bool,
  endOfRange: PropTypes.bool,
  filled: PropTypes.bool,
  highlighted: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  outlined: PropTypes.bool,
  startOfRange: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Day;
