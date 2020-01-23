import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { Checkbox } from '@astral-frontend/components';

import DataListContext from '../DataListContext';
import useDataListManager from '../useDataListManager';

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

const DataListHeader = ({ className, columns }) => {
  const classes = useStyles();
  const {
    items,
    selectedItems,
    selectableItems,
    disableSelect,
  } = React.useContext(DataListContext);
  const { toggleAllItemsSelector } = useDataListManager(DataListContext);
  const checked = React.useMemo(
    () => selectedItems.length === selectableItems.length && items.length > 0,
    [selectableItems, selectedItems, items],
  );
  const handleAllItemsSelectorChange = React.useCallback(() => {
    toggleAllItemsSelector(selectableItems);
  }, [selectableItems, items]);

  return (
    <div className={cn(classes.root, className)}>
      {!disableSelect ? (
        <div className={classes.item}>
          <Checkbox onChange={handleAllItemsSelectorChange} checked={checked} />
        </div>
      ) : (
        <>&nbsp;</>
      )}
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
