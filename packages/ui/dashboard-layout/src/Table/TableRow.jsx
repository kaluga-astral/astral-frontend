import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';
import { ListItem } from '@astral-frontend/components';

const TableRow = ({
  classes, className, disableHoverEffect, children, ...props
}) => (
  <ListItem
    {...props}
    button={!disableHoverEffect}
    className={cn(classes.root, className, { [classes.withHover]: !disableHoverEffect })}
  >
    {children}
  </ListItem>
);

TableRow.defaultProps = {
  children: null,
  className: null,
  disableHoverEffect: false,
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  disableHoverEffect: PropTypes.bool,
};

export default withStyles(theme => ({
  root: {
    display: 'grid',
    borderLeft: '4px solid rgba(0, 0, 0, 0)',
    borderBottom: '1px solid rgba(29, 63, 102, 0.09)',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    columnGap: '15px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  withHover: {
    '&:hover': {
      backgroundColor: '#f3f0fd',
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      '& *': {
        color: theme.palette.primary.main,
      },
    },
  },
}))(TableRow);
