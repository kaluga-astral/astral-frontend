import PropTypes from 'prop-types';
import React from 'react';

import { Placeholder, InfiniteList } from '@astral-frontend/components';

import DataListContext from './DataListContext';
import DataListItemContext from './DataListItemContext';

const DataList = ({
  lastViewedItem,
  setLastViewedItem,
  selectedItems,
  setSelectedItems,
  listRenderer,
  renderItem,
  queryResult: {
    data: { items },
    error,
    loading,
  },
  isQueryParamsEmpty,
  EmptyStateComponent,
  NotFoundStateComponent,
  onLoadMoreItems,
  disableSelect,
  ...props
}) => {
  if (error) {
    return <Placeholder state="failure" error={error} />;
  }

  if (loading) {
    return <Placeholder state="loading" />;
  }

  if (!loading && items.length === 0) {
    if (isQueryParamsEmpty && EmptyStateComponent) {
      return <EmptyStateComponent />;
    }
    if (NotFoundStateComponent) {
      return <NotFoundStateComponent />;
    }

    return null;
  }

  return (
    <DataListContext.Provider
      value={{
        items,
        selectedItems,
        setSelectedItems,
        lastViewedItem,
        setLastViewedItem,
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
  lastViewedItem: null,
  setLastViewedItem: null,
  onLoadMoreItems: null,
  isQueryParamsEmpty: false,
  EmptyStateComponent: null,
  NotFoundStateComponent: null,
  disableSelect: false,
};

DataList.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.any),
  setSelectedItems: PropTypes.func,
  lastViewedItem: PropTypes.shape(),
  setLastViewedItem: PropTypes.func,
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
  isQueryParamsEmpty: PropTypes.bool,
  EmptyStateComponent: PropTypes.func,
  NotFoundStateComponent: PropTypes.func,
  pageSize: PropTypes.number.isRequired,
  onLoadMoreItems: PropTypes.func,
  disableSelect: PropTypes.bool,
};

export default DataList;
