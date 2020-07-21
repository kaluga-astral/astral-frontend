import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { List, Typography, Box } from '@astral-frontend/components';

import { makeStyles } from '@astral-frontend/styles';

import DataList from '@astral-frontend/data-list';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,
      overflowY: 'auto',
    },
    list: {},
    counter: {
      height: '21px',
      minWidth: '32px',
      lineHeight: '21px',
      marginLeft: theme.spacing(2),
      padding: theme.spacing(0, 1),
      textAlign: 'center',
      borderRadius: `${theme.shape.borderRadius}px`,
      backgroundColor: theme.palette.primary.light,
    },
  }),
  { name: 'TransferTemplatedDataList' },
);

const TransferTemplatedDataList = ({
  queryResult,
  selectedItems,
  setSelectedItems,
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

  React.useEffect(() => {
    if (queryResult.data.items) {
      setTimeout(() => {
        setSelectedItems([{ id: 'test-id', value: 'value' }]);
      }, 1500);
    }
  }, [queryResult.loading]);

  return (
    <div className={classes.root}>
      <Box display="flex">
        <Typography gutterBottom color="primary">
          Отсканированные
        </Typography>
        <Box className={classes.counter}>
          {queryResult.loading ? null : String(selectedItems.length)}
        </Box>
      </Box>
      <DataList
        pageSize={15}
        awaitMore={false}
        queryResult={{
          called: true,
          loading: false,
          error: null,
          data: {
            items: selectedItems,
          },
        }}
        listRenderer={listRenderer}
        renderItem={renderItem}
      />
      <Box display="flex" mt={4}>
        <Typography gutterBottom color="primary">
          Код маркировки
        </Typography>
        <Box className={classes.counter}>
          {queryResult.loading
            ? null
            : String(queryResult.data.totalCount - selectedItems.length)}
        </Box>
      </Box>
      <DataList
        {...props}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        queryResult={queryResult}
        listRenderer={listRenderer}
        renderItem={renderItem}
      />
    </div>
  );
};

TransferTemplatedDataList.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.any).isRequired,
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
};

export default TransferTemplatedDataList;
