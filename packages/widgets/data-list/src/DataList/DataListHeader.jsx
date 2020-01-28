import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';
import { Checkbox } from '@astral-frontend/components';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'sticky',
      top: 0,
      paddingBottom: theme.spacing(3),
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderWidth: theme.spacing(0, 0, 0, 1),
      backgroundColor: theme.palette.background.default,
      color: theme.palette.gray[500],
      fontWeight: theme.typography.fontWeightBold,
      zIndex: 2,
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      '&:first-child': {
        justifyContent: 'center',
      },
    },
  }),
  { name: 'DataListHeader' },
);

const DataListHeader = ({
  className,
  columns,
  disableSelect,
  items,
  selectedItems,
  setSelectedItems,
}) => {
  const classes = useStyles();
  const checked = items.length === selectedItems.length;
  const handleCheckboxChange = () => {
    if (checked) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(item => item.id));
    }
  };

  return (
    <div className={cn(classes.root, className)}>
      <div className={classes.item}>
        {!disableSelect && (
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
        )}
      </div>

      {columns.map(column => (
        <div key={column.title} className={classes.item}>
          {column.title}
        </div>
      ))}
    </div>
  );
};

DataListHeader.defaultProps = {
  className: null,
  disableSelect: null,
  selectedItems: null,
  setSelectedItems: null,
};

DataListHeader.propTypes = {
  disableSelect: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  setSelectedItems: PropTypes.func,
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default DataListHeader;
