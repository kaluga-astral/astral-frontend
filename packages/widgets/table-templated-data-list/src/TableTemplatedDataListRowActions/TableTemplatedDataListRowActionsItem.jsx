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
          throw new Error(
            'Unexpected TableTemplatedDataListRowActionsItem color value',
          );
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
  { name: 'TableTemplatedDataListRowActionsItem' },
);

export const TableTemplatedDataListRowActionsItem = ({ children, color }) => {
  const classes = useStyles({ color });

  return <div className={classes.root}>{children}</div>;
};

TableTemplatedDataListRowActionsItem.defaultProps = {
  color: 'primary',
};

TableTemplatedDataListRowActionsItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  color: PropTypes.oneOf(['primary', 'error']),
};

export default TableTemplatedDataListRowActionsItem;
