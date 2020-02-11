import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      color: props => props.color,
    },
  }),
  { name: 'TableTemplatedDataListStatusCell' },
);

const TableTemplatedDataListStatusCell = ({ title, color }) => {
  const classes = useStyles({ color });

  return <div className={classes.root}>{title}</div>;
};

TableTemplatedDataListStatusCell.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TableTemplatedDataListStatusCell;
