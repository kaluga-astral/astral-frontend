import React from 'react';

const useDataListManager = Context => {
  const { selectedItems, setSelectedItems } = React.useContext(Context);

  const toggleItemSelector = React.useCallback(
    item => {
      if (
        selectedItems.map(selectedItem => selectedItem.id).includes(item.id)
      ) {
        setSelectedItems(prevSelectedItems =>
          prevSelectedItems.filter(selectedItem => selectedItem.id !== item.id),
        );
      } else {
        setSelectedItems(prevSelectedItems => [...prevSelectedItems, item]);
      }
    },
    [selectedItems],
  );

  const toggleAllItemsSelector = React.useCallback(
    items => {
      if (selectedItems.length !== items.length) {
        setSelectedItems(items);
      } else {
        setSelectedItems([]);
      }
    },
    [selectedItems],
  );

  return { toggleItemSelector, toggleAllItemsSelector };
};

export default useDataListManager;
