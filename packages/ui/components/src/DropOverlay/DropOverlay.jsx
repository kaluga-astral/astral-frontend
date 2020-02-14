import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';
import DownloadIcon from './DownloadIcon';

const useStyles = makeStyles(
  theme => ({
    '@keyframes pulse': {
      from: {
        boxShadow: `0 0 0 0 ${theme.palette.primary.main}20`,
      },
      to: {
        boxShadow: `0 0 0 ${theme.spacing(8)}px ${
          theme.palette.primary.main
        }20`,
      },
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#1D3F6655',
      outlineColor: theme.palette.common.white,
      outlineOffset: '-20px',
      outlineStyle: 'dashed',
      outlineWidth: 2,
      zIndex: 10000,
    },
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 108,
      height: 108,
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
      animationName: '$pulse',
      animationDuration: '1s',
      animationIterationCount: 'infinite',
    },
    icon: {
      width: 40,
      height: 40,
      fill: theme.palette.common.white,
    },
  }),
  { name: 'DropOverlay' },
);

const DropOverlay = ({ className, Icon, open, rootProps, ...props }) => {
  const classes = useStyles();

  return (
    open && (
      <div className={cn(classes.root, className)} {...rootProps} {...props}>
        <div className={classes.iconWrapper}>
          <Icon className={classes.icon} />
        </div>
      </div>
    )
  );
};

DropOverlay.defaultProps = {
  Icon: DownloadIcon,
  className: null,
};

DropOverlay.propTypes = {
  Icon: PropTypes.func,
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  rootProps: PropTypes.shape({}).isRequired,
};

export default DropOverlay;
