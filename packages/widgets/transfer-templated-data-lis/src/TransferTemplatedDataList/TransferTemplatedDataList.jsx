import PropTypes from 'prop-types';
import React from 'react';
import { List, Box, Placeholder } from '@astral-frontend/components';

import { TransferTemplatedDataListDestinationSection } from './TransferTemplatedDataListDestinationSection';
import { TransferTemplatedDataListSourceSection } from './TransferTemplatedDataListSourceSection';

export const TransferTemplatedDataListItemContext = React.createContext();

export const TransferTemplatedDataList = ({
  destinationListTitle,
  sourceListTitle,
  queryResult,
  selectedItems,
  setSelectedItems,
  ListItemComponent,
  getDataIdFromObject,
  ...props
}) => {
  const listRenderer = React.useCallback(
    ({ children, ref }) => (
      <List key="list" disablePadding ref={ref}>
        {children}
      </List>
    ),
    [],
  );
  const renderItem = React.useCallback(
    ({ data, key }) => {
      return (
        <TransferTemplatedDataListItemContext.Provider value={{ data }}>
          <ListItemComponent
            key={key}
            loading={queryResult.loading}
            data={data}
          />
        </TransferTemplatedDataListItemContext.Provider>
      );
    },
    [queryResult.loading],
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      css={{ overflowY: 'hidden' }}
    >
      {queryResult.loading && <Placeholder state="loading" />}
      {!queryResult.loading && (
        <TransferTemplatedDataListDestinationSection
          {...props}
          title={destinationListTitle}
          queryResult={queryResult}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          listRenderer={listRenderer}
          renderItem={renderItem}
        />
      )}
      {!queryResult.loading && (
        <TransferTemplatedDataListSourceSection
          {...props}
          title={sourceListTitle}
          queryResult={queryResult}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          listRenderer={listRenderer}
          renderItem={renderItem}
          getDataIdFromObject={getDataIdFromObject}
        />
      )}
    </Box>
  );
};

TransferTemplatedDataList.defaultProps = {
  getDataIdFromObject(item) {
    return item.id;
  },
};

TransferTemplatedDataList.propTypes = {
  destinationListTitle: PropTypes.string.isRequired,
  sourceListTitle: PropTypes.string.isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  queryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
      totalCount: PropTypes.number,
    }).isRequired,
  }).isRequired,
  ListItemComponent: PropTypes.func.isRequired,
  getDataIdFromObject: PropTypes.func,
};

export default TransferTemplatedDataList;
