import PropTypes from 'prop-types';
import React from 'react';
import ReactIntersectionList from '@researchgate/react-intersection-list';

import { Placeholder } from '@astral-frontend/components';

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
  ...props
}) => {
  React.useEffect(
    () => () => {
      setSelectedItems([]);
    },
    [],
  );

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
      value={{ items, selectedItems, setSelectedItems }}
    >
      <ReactIntersectionList
        itemCount={items.length}
        itemsRenderer={(children, ref) => listRenderer({ children, ref })}
        renderItem={(index, key) => {
          const data = items[index];

          return (
            <DataListItemContext.Provider key={key} value={{ data, key }}>
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
};

export default InfiniteList;
