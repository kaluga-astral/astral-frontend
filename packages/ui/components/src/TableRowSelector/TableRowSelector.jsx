/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import Checkbox from '../Checkbox';
import { TableRowContext } from '../TableRow';

const TableRowSelector = ({
  classes, className, children, Icon, selected, onSelect, ...props
}) => {
  const { hovered } = React.useContext(TableRowContext);

  return (
    <div
      className={cn(classes.root, className)}
      onClick={(event) => {
        event.stopPropagation();
      }}
      {...props}
    >
      {hovered || selected ? (
        <Checkbox checked={selected} onChange={onSelect} />
      ) : (
        <Icon className={classes.icon} />
      )}
    </div>
  );
};

TableRowSelector.defaultProps = {
  children: null,
  className: null,
  Icon: () => null,
};

TableRowSelector.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  Icon: PropTypes.func,
};

export default withStyles(theme => ({
  root: {
    top: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70px',
    padding: '0 15px',
  },
  icon: {
    fill: theme.palette.primary.main,
  },
}))(TableRowSelector);
