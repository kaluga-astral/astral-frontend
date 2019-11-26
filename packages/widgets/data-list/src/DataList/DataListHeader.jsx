import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      marginBottom: theme.spacing(5),
      color: theme.palette.gray[500],
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  { name: 'DataListHeader' },
);

const DataListHeader = ({ className, columns }) => {
  const classes = useStyles();

  return (
    <li className={cn(classes.root, className)}>
      {columns.map(column => (
        <div key={column.title}>{column.title}</div>
      ))}
    </li>
  );
};

DataListHeader.defaultProps = {
  className: null,
};

DataListHeader.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default DataListHeader;
