import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => ({
    root: ({ align }) => {
      const getJustifyContent = () => {
        switch (align) {
          case 'center': {
            return 'center';
          }
          case 'right': {
            return 'flex-end';
          }

          default: {
            return 'flex-start';
          }
        }
      };

      return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: getJustifyContent(),
        paddingRight: align === 'right' ? theme.spacing(4) : 0,
      };
    },
  }),
  { name: 'TableTemplatedDataListHeaderItem' },
);

const TableTemplatedDataListHeaderItem = ({ title, align }) => {
  const classes = useStyles({ align });

  return <div className={classes.root}>{title}</div>;
};

TableTemplatedDataListHeaderItem.defaultProps = {
  align: 'left',
};

TableTemplatedDataListHeaderItem.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default TableTemplatedDataListHeaderItem;
