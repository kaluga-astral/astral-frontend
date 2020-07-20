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
      overflowY: 'auto',
    },
    list: {},
  }),
  { name: 'TransferTemplatedDataList' },
);

const TransferTemplatedDataList = ({
  queryResult,
  ListItemComponent,
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
        loading={queryResult.loading}
        data={data}
      />
    ),
    [queryResult.loading],
  );

  return (
    <DataList
      {...props}
      queryResult={queryResult}
      listRenderer={listRenderer}
      renderItem={renderItem}
    />
  );
};

TransferTemplatedDataList.propTypes = {
  queryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }).isRequired,
  ListItemComponent: PropTypes.func.isRequired,
};

export default TransferTemplatedDataList;
