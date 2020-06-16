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
      textAlign: ({ align }) => align,
    },
    subTitle: {
      color: theme.palette.gray[600],
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      textAlign: ({ align }) => align,
    },
  }),
  { name: 'TableTemplatedDataListPrimaryCell' },
);

const TableTemplatedDataListPrimaryCell = ({ title, subTitle, align }) => {
  const classes = useStyles({ align });
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
  align: 'left',
};

TableTemplatedDataListPrimaryCell.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default TableTemplatedDataListPrimaryCell;
