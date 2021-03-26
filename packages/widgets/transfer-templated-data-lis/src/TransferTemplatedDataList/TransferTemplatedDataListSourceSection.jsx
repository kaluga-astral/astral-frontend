import { differenceBy } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import DataList from '@astral-frontend/data-list';

import { TransferTemplatedDataListSection } from './TransferTemplatedDataListSection';

export const TransferTemplatedDataListSourceSection = ({
  title,
  queryResult,
  selectedItems,
  setSelectedItems,
  getDataIdFromObject,
  ...props
}) => {
  const items = React.useMemo(() => {
    return differenceBy(
      queryResult.data.items,
      selectedItems,
      getDataIdFromObject,
    );
  }, [queryResult, selectedItems, getDataIdFromObject]);

  return (
    <TransferTemplatedDataListSection
      title={title}
      count={items.length ?? null}
      flexGrow={1}
      css={{ overflowY: 'auto' }}
    >
      <DataList
        {...props}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        queryResult={{
          ...queryResult,
          data: {
            ...queryResult.data,
            items,
          },
        }}
      />
    </TransferTemplatedDataListSection>
  );
};

TransferTemplatedDataListSourceSection.defaultProps = {
  getDataIdFromObject(item) {
    return item.id;
  },
};

TransferTemplatedDataListSourceSection.propTypes = {
  title: PropTypes.string.isRequired,
  queryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
      totalCount: PropTypes.number,
    }).isRequired,
  }).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  getDataIdFromObject: PropTypes.func,
};

export default TransferTemplatedDataListSourceSection;
