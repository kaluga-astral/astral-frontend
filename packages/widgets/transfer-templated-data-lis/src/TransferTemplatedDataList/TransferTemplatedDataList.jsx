import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
  List,
  Typography,
  Box,
  IconButton,
  SvgIcon,
} from '@astral-frontend/components';

import { makeStyles } from '@astral-frontend/styles';
import DataList from '@astral-frontend/data-list';

import { TransferTemplatedDataListSection } from './TransferTemplatedDataListSection';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,
      overflowY: 'auto',
    },
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
    list: {},
    listItem: {
      '&:hover $rowActions': {
        opacity: 1,
      },
    },
    rowActions: {
      opacity: 0,
      transition: theme.transitions.create(['opacity']),
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
  const renderDestinationListItem = React.useCallback(
    ({ data, key }) => {
      const handleRemoveIconButtonClick = () => {
        setSelectedItems(prevValue => {
          return prevValue.filter(({ id }) => id !== data.id);
        });
      };

      return (
        <ListItemComponent key={key} className={classes.listItem} data={data}>
          <Box className={classes.rowActions} display="flex">
            <IconButton onClick={handleRemoveIconButtonClick}>
              <SvgIcon>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </SvgIcon>
            </IconButton>
          </Box>
        </ListItemComponent>
      );
    },
    [queryResult.loading],
  );
  const renderSourceListItem = React.useCallback(
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
    <div className={classes.root}>
      <TransferTemplatedDataListSection
        mb={4}
        title="Отсканированные"
        count={queryResult.loading ? null : String(selectedItems.length)}
      >
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
          renderItem={renderDestinationListItem}
        />
      </TransferTemplatedDataListSection>
      <TransferTemplatedDataListSection
        title="Код маркировки"
        count={
          queryResult.loading
            ? null
            : String(queryResult.data.totalCount - selectedItems.length)
        }
      >
        <DataList
          {...props}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          queryResult={queryResult}
          listRenderer={listRenderer}
          renderItem={renderSourceListItem}
        />
      </TransferTemplatedDataListSection>
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
