import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import ListItem from '../ListItem';
import TableRowSelector from '../TableRowSelector';

export const Context = React.createContext();

const TableRow = ({
  classes, className, children, Icon, selected, onSelect, ...props
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
        component="li"
        className={cn(classes.root, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {onSelect && <TableRowSelector Icon={Icon} selected={selected} onSelect={onSelect} />}
        {children}
      </ListItem>
    </Context.Provider>
  );
};

TableRow.defaultProps = {
  children: null,
  className: null,
  Icon: null,
  selected: null,
  onSelect: null,
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  Icon: PropTypes.func,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    display: 'grid',
    paddingLeft: '70px',
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
