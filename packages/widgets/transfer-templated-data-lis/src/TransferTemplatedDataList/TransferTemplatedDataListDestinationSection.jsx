import PropTypes from 'prop-types';
import React from 'react';

import DataList from '@astral-frontend/data-list';

import { TransferTemplatedDataListSection } from './TransferTemplatedDataListSection';

export const TransferTemplatedDataListDestinationSection = ({
  title,
  queryResult,
  selectedItems,
  ...props
}) => {
  return (
    <TransferTemplatedDataListSection
      title={title}
      count={selectedItems.length ?? null}
      flexShrink={0}
      maxHeight="50%"
      mb={4}
      overflow="hidden"
    >
      <DataList
        {...props}
        selectedItems={selectedItems}
        queryResult={{
          called: true,
          loading: false,
          error: null,
          data: {
            items: selectedItems,
          },
        }}
      />
    </TransferTemplatedDataListSection>
  );
};

TransferTemplatedDataListDestinationSection.defaultProps = {};

TransferTemplatedDataListDestinationSection.propTypes = {
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
};

export default TransferTemplatedDataListDestinationSection;
