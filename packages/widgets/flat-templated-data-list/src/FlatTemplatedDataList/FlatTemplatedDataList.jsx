import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { List } from '@astral-frontend/components';
import DataList from '@astral-frontend/data-list';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
      flexGrow: 1,
    },
  }),
  { name: 'FlatTemplatedDataList' },
);

const FlatTemplatedDataList = ({
  className,
  dataQueryResult,
  ListItemComponent,
  EmptyStateComponent,
  AfterItemsComponent,
  ...props
}) => {
  const classes = useStyles();
  const listRenderer = React.useCallback(
    ({ children, ref }) => (
      <List
        key="list"
        disablePadding
        className={cn(classes.root, className)}
        ref={ref}
      >
        {children}
        {AfterItemsComponent && <AfterItemsComponent />}
      </List>
    ),
    [],
  );
  const renderItem = React.useCallback(
    ({ data, key }) => (
      <ListItemComponent
        key={key}
        className={cn(classes.row)}
        loading={dataQueryResult.loading}
        data={data}
      />
    ),
    [dataQueryResult.loading],
  );

  return (
    <DataList
      {...props}
      EmptyStateComponent={EmptyStateComponent}
      dataQueryResult={dataQueryResult}
      listRenderer={listRenderer}
      renderItem={renderItem}
    />
  );
};

FlatTemplatedDataList.defaultProps = {
  className: null,
  EmptyStateComponent: () => null,
  AfterItemsComponent: null,
};

FlatTemplatedDataList.propTypes = {
  className: PropTypes.string,
  dataQueryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }).isRequired,
  ListItemComponent: PropTypes.func.isRequired,
  EmptyStateComponent: PropTypes.func,
  AfterItemsComponent: PropTypes.func,
};

export default FlatTemplatedDataList;
