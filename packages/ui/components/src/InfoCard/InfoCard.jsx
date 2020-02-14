import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(6),
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.light,
    overflow: 'hidden',
    '&:hover': {
      borderColor: 'transparent',
      boxShadow: theme.shadows[2],
    },
    '&:hover $heading': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    '&:hover $description': {
      color: theme.palette.primary.main,
    },
    '&:hover $icon': {
      fill: `${theme.palette.common.white}10`,
    },
  },
  heading: {
    position: 'relative',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightExtraBold,
    lineHeight: theme.typography.pxToRem(33),
    overflow: 'hidden',
    transition: 'backgroundColor, color 0.2s ease-in',
  },
  description: {
    padding: theme.spacing(5),
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(19),
    transition: 'color 0.2s ease-in',
  },
  icon: {
    position: 'absolute',
    right: '-5px',
    bottom: '-5px',
    width: '64px',
    height: '64px',
    fill: theme.palette.primary.light,
    transition: 'fill 0.2s ease-in',
  },
}));

const InfoCard = ({ className, heading, description, Icon, ...props }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className)} {...props}>
      <div className={classes.heading}>
        {heading}
        {Icon && <Icon className={classes.icon} />}
      </div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

InfoCard.defaultProps = {
  className: null,
  description: null,
  heading: null,
  Icon: null,
};

InfoCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]),
  heading: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]),
  Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]),
};

export default InfoCard;
