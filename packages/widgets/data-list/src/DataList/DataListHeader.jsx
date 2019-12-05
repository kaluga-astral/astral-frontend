import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'sticky',
      top: 0,
      paddingBottom: theme.spacing(3),
      backgroundColor: theme.palette.background.default,
      color: theme.palette.gray[500],
      fontWeight: theme.typography.fontWeightBold,
      zIndex: 2,
    },
  }),
  { name: 'DataListHeader' },
);

const DataListHeader = ({ className, columns }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className)}>
      {columns.map(column => (
        <div key={column.title}>{column.title}</div>
      ))}
    </div>
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
