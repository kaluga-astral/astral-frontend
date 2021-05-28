import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => {
    const getColor = ({ color }) => {
      switch (color) {
        case 'primary': {
          return theme.palette.primary.main;
        }
        case 'error': {
          return theme.palette.error.main;
        }
        default:
          throw new Error('Unexpected NavBarActionsItem color value');
      }
    };
    return {
      root: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),

        '& button, & a': {
          color: getColor,
          '&:disabled': {
            color: theme.palette.gray[100],
          },
        },
      },
    };
  },
  { name: 'NavBarActionsItem' },
);

export const NavBarActionsItem = ({ children, color }) => {
  const classes = useStyles({ color });

  return <div className={classes.root}>{children}</div>;
};

NavBarActionsItem.defaultProps = {
  color: 'primary',
};

NavBarActionsItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  color: PropTypes.oneOf(['primary', 'error']),
};

export default NavBarActionsItem;
