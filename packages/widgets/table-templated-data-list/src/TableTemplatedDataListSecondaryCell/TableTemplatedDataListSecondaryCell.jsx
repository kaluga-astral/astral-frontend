import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';
import { DataListItemContext } from '@astral-frontend/data-list';

const useStyles = makeStyles(
  theme => ({
    root: ({ align }) => ({
      textAlign: align,
      paddingRight: align === 'right' ? theme.spacing(4) : 0,
    }),
  }),
  { name: 'TableTemplatedDataListSecondaryCell' },
);

const TableTemplatedDataListSecondaryCell = ({ title, align }) => {
  const classes = useStyles({ align });
  const { loading } = React.useContext(DataListItemContext);

  const Children = () => {
    if (loading) {
      return 'Loading...';
    }

    return title;
  };

  return (
    <div className={classes.root}>
      <Children />
    </div>
  );
};

TableTemplatedDataListSecondaryCell.defaultProps = {
  title: null,
  align: 'left',
};

TableTemplatedDataListSecondaryCell.propTypes = {
  title: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default TableTemplatedDataListSecondaryCell;
