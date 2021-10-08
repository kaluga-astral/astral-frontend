import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { List } from '@astral-frontend/components';
import DataList from '@astral-frontend/data-list';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      width: '100%',
      margin: '6px 0px 0px'
    },
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
  { name: 'FlatTemplatedDataList' },
);

const FlatTemplatedDataList = ({
  id,
  className,
  queryResult,
  RowActionsComponent,
  ListItemComponent,
  EmptyStateComponent,
  AfterItemsComponent,
  ...props
}) => {
  const classes = useStyles();
  const listRenderer = React.useCallback(({ children, ref }) => {
    return (
      <List
        key="list"
        id={id}
        disablePadding
        className={cn(classes.root, className)}
        ref={ref}
      >
        {children}
        {AfterItemsComponent && <AfterItemsComponent />}
      </List>
    );
  }, []);
  const renderItem = React.useCallback(
    ({ data, key }) => (
      <ListItemComponent key={key} className={classes.listItem} data={data}>
        {RowActionsComponent && (
          <RowActionsComponent className={classes.rowActions} data={data} />
        )}
      </ListItemComponent>
    ),
    [queryResult.loading],
  );

  return (
    <DataList
      {...props}
      EmptyStateComponent={EmptyStateComponent}
      queryResult={queryResult}
      listRenderer={listRenderer}
      renderItem={renderItem}
    />
  );
};

FlatTemplatedDataList.defaultProps = {
  id: null,
  className: null,
  EmptyStateComponent: () => null,
  RowActionsComponent: null,
  AfterItemsComponent: null,
};

FlatTemplatedDataList.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  queryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }).isRequired,
  ListItemComponent: PropTypes.func.isRequired,
  RowActionsComponent: PropTypes.func,
  EmptyStateComponent: PropTypes.func,
  AfterItemsComponent: PropTypes.func,
};

export default FlatTemplatedDataList;
