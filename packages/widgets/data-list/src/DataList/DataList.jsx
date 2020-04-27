import PropTypes from 'prop-types';
import React from 'react';

import {
  Placeholder,
  InfiniteList as ReactIntersectionList,
} from '@astral-frontend/components';

import DataListContext from './DataListContext';
import DataListItemContext from './DataListItemContext';

const InfiniteList = ({
  selectedItems,
  setSelectedItems,
  listRenderer,
  renderItem,
  dataQueryResult: {
    data: { items },
    ...dataQueryResult
  },
  totalCountQueryResult,
  EmptyStateComponent,
  onLoadMoreItems,
  disableSelect,
  ...props
}) => {
  React.useEffect(
    () => () => {
      setSelectedItems([]);
    },
    [],
  );

  React.useEffect(() => {
    setSelectedItems(
      selectedItems.filter(selectedItem =>
        items.find(item => item.id === selectedItem.id),
      ),
    );
  }, [items.length]);

  if (dataQueryResult.error || totalCountQueryResult.error) {
    return (
      <Placeholder
        state="failure"
        error={dataQueryResult.error || totalCountQueryResult.error}
      />
    );
  }

  if (dataQueryResult.loading) {
    return <Placeholder state="loading" />;
  }

  if (!dataQueryResult.loading && items.length === 0) {
    return <EmptyStateComponent />;
  }

  return (
    <DataListContext.Provider
      value={{ items, selectedItems, setSelectedItems, disableSelect }}
    >
      <ReactIntersectionList
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

InfiniteList.defaultProps = {
  selectedItems: null,
  setSelectedItems: null,
  onLoadMoreItems: null,
  disableSelect: false,
};

InfiniteList.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  setSelectedItems: PropTypes.func,
  listRenderer: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  dataQueryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }).isRequired,
  totalCountQueryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      totalCount: PropTypes.number,
    }).isRequired,
  }).isRequired,
  EmptyStateComponent: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  onLoadMoreItems: PropTypes.func,
  disableSelect: PropTypes.bool,
};

export default InfiniteList;
