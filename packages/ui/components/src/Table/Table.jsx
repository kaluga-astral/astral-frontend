import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Table as MuiTable } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(() => ({
  root: {
    tableLayout: props => props.tableLayout,
  },
}));

const Table = props => {
  const { tableLayout, className, ...rootProps } = props;
  const classes = useStyles(props);

  return <MuiTable className={cn(className, classes.root)} {...rootProps} />;
};

Table.defaultProps = {
  tableLayout: null,
  className: null,
};

Table.propTypes = {
  tableLayout: PropTypes.oneOf(['auto', 'fixed', 'inherit']),
  className: PropTypes.string,
};

export default Table;
