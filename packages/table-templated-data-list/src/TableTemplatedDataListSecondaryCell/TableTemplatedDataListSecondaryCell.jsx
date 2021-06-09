import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';
import { DataListItemContext } from '@astral/data-list';

const useStyles = makeStyles(
  theme => ({
    root: ({ align }) => ({
      textAlign: align,
      paddingRight: align === 'right' ? theme.spacing(4) : 0,
    }),
  }),
  { name: 'TableTemplatedDataListSecondaryCell' },
);

const TableTemplatedDataListSecondaryCell = ({ title, align, className }) => {
  const classes = useStyles({ align });
  const { loading } = React.useContext(DataListItemContext);

  const Children = () => {
    if (loading) {
      return 'Loading...';
    }

    return title;
  };

  return (
    <div className={cn(classes.root, className)}>
      <Children />
    </div>
  );
};

TableTemplatedDataListSecondaryCell.defaultProps = {
  title: null,
  align: 'left',
  className: null,
};

TableTemplatedDataListSecondaryCell.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};

export default TableTemplatedDataListSecondaryCell;
