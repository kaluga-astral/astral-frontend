import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import ListItem from '../ListItem';

export const Context = React.createContext();

const TableRow = ({
  classes, className, children, ...props
}) => {
  const [hovered, setHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Context.Provider value={{ hovered }}>
      <ListItem
        className={cn(classes.root, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </ListItem>
    </Context.Provider>
  );
};

TableRow.defaultProps = {
  children: null,
  className: null,
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    display: 'grid',
    paddingLeft: '50px',
    borderLeft: '4px solid rgba(0, 0, 0, 0)',
    borderBottom: '1px solid rgba(29, 63, 102, 0.09)',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    columnGap: '15px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:not(:first-child):hover': {
      backgroundColor: '#f3f0fd',
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      '& *': {
        color: theme.palette.primary.main,
      },
    },
  },
}))(TableRow);
