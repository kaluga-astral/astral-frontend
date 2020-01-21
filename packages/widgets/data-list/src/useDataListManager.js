import React from 'react';

const useDataListManager = Context => {
  const { selectedItems, setSelectedItems } = React.useContext(Context);

  const toggleItemSelector = item => {
    if (selectedItems.map(selectedItem => selectedItem.id).includes(item.id)) {
      setSelectedItems(prevSelectedItems =>
        prevSelectedItems.filter(selectedItem => selectedItem.id !== item.id),
      );
    } else {
      setSelectedItems(prevSelectedItems => [...prevSelectedItems, item]);
    }
  };

  const toggleAllItemsSelector = items => {
    if (selectedItems.length === 0) {
      setSelectedItems(items);
    } else {
      setSelectedItems([]);
    }
  };

  return { toggleItemSelector, toggleAllItemsSelector };
};

export default useDataListManager;
