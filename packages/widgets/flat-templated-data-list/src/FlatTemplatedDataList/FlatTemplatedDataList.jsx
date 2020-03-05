import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { List } from '@astral-frontend/components';

import { makeStyles } from '@astral-frontend/styles';

import DataList from '@astral-frontend/data-list';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      flexGrow: 1,
    },
    list: {},
  }),
  { name: 'FlatTemplatedDataList' },
);

const FlatTemplatedDataList = ({
  dataQueryResult,
  ListItemComponent,
  EmptyStateComponent,
  ...props
}) => {
  const classes = useStyles();
  const listRenderer = React.useCallback(
    ({ children, ref }) => (
      <div className={classes.root}>
        <List key="list" disablePadding className={classes.list} ref={ref}>
          {children}
        </List>
      </div>
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

FlatTemplatedDataList.propTypes = {
  dataQueryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }).isRequired,
  ListItemComponent: PropTypes.func.isRequired,
  EmptyStateComponent: PropTypes.func.isRequired,
};

export default FlatTemplatedDataList;
