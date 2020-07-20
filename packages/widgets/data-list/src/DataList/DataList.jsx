import PropTypes from 'prop-types';
import React from 'react';

import { Placeholder, InfiniteList } from '@astral-frontend/components';

import DataListContext from './DataListContext';
import DataListItemContext from './DataListItemContext';

const DataList = ({
  selectedItems,
  setSelectedItems,
  listRenderer,
  renderItem,
  queryResult: {
    data: { items },
    ...queryResult
  },
  EmptyStateComponent,
  onLoadMoreItems,
  disableSelect,
  ...props
}) => {
  if (queryResult.error) {
    return <Placeholder state="failure" error={queryResult.error} />;
  }

  if (queryResult.loading) {
    return <Placeholder state="loading" />;
  }

  if (!queryResult.loading && items.length === 0) {
    return <EmptyStateComponent />;
  }

  React.useEffect(() => {
    setSelectedItems(
      selectedItems.filter(selectedItem =>
        items.find(item => item.id === selectedItem.id),
      ),
    );
  }, [items.length]);

  React.useEffect(
    () => () => {
      setSelectedItems([]);
    },
    [],
  );

  return (
    <DataListContext.Provider
      value={{
        items,
        selectedItems,
        setSelectedItems,
        disableSelect,
      }}
    >
      <InfiniteList
        itemCount={items.length}
        itemsRenderer={(children, ref) => listRenderer({ children, ref })}
        renderItem={index => {
          const data = items[index];
          const key = data.id;

          return (
            <DataListItemContext.Provider key={data.id} value={{ data, key }}>
              {renderItem({ data, key })}
            </DataListItemContext.Provider>
          );
        }}
        onIntersection={onLoadMoreItems}
        {...props}
      />
    </DataListContext.Provider>
  );
};

DataList.defaultProps = {
  selectedItems: null,
  setSelectedItems: null,
  onLoadMoreItems: null,
  disableSelect: false,
};

DataList.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  setSelectedItems: PropTypes.func,
  listRenderer: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  queryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }).isRequired,
  EmptyStateComponent: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  onLoadMoreItems: PropTypes.func,
  disableSelect: PropTypes.bool,
};

export default DataList;
