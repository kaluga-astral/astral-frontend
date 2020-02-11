import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';
import { DataListItemContext } from '@astral-frontend/data-list';

const useStyles = makeStyles(
  theme => ({
    root: {},
    title: {
      color: theme.palette.gray[900],
      fontWeight: theme.typography.fontWeightBold,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    subTitle: {
      color: theme.palette.gray[600],
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  }),
  { name: 'TableTemplatedDataListPrimaryCell' },
);

const TableTemplatedDataListPrimaryCell = ({ title, subTitle }) => {
  const classes = useStyles();
  const { loading } = React.useContext(DataListItemContext);
  const Children = () => {
    if (loading) {
      return 'Loading...';
    }

    return [
      <div key="title" className={classes.title}>
        {title}
      </div>,
      subTitle && (
        <div key="subTitle" className={classes.subTitle}>
          {subTitle}
        </div>
      ),
    ];
  };

  return (
    <div className={classes.root}>
      <Children />
    </div>
  );
};

TableTemplatedDataListPrimaryCell.defaultProps = {
  subTitle: null,
};

TableTemplatedDataListPrimaryCell.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default TableTemplatedDataListPrimaryCell;
