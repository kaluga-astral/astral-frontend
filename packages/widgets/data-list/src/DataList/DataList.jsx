import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { List, InfiniteList, Placeholder } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import DataListHeader from './DataListHeader';
import { __Context as DataListItemContext } from '../DataListItem';
import InternalDataListContext from '../DataListContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    list: {
      height: '100%',
      paddingTop: 0,
      paddingBottom: 0,
      overflowY: 'auto',
    },
    row: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: props => {
        return `0.3fr ${props.columns
          .map(column => `${column.fr || '1'}fr`)
          .join(' ')}`;
      },
    },
    bodyRow: {
      position: 'relative',
      marginBottom: theme.spacing(1),
      '&:hover $rowActions': {
        opacity: 1,
      },
    },
    dataItem: {
      borderStyle: 'solid',
      borderColor: 'transparent',
      padding: theme.spacing(4, 0),
      marginBottom: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.gray[800],
      background: theme.palette.common.white,
    },
    rowActions: {
      opacity: 0,
      transition: theme.transitions.create(['opacity']),
    },
  }),
  { name: 'DataList' },
);

const DataList = ({
  Context: ExternalDataListContext,
  idleTimeout,
  columns,
  dataQueryResult: {
    data: { items },
    ...dataQueryResult
  },
  totalCountQueryResult,
  ListItemComponent,
  RowActionsComponent,
  EmptyStateComponent,
  onLoadMoreItems,
  itemSelectorDisabled,
  disableSelect,
  ...props
}) => {
  const classes = useStyles({ columns });
  const externalDataListContextValue = React.useContext(
    ExternalDataListContext,
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
    <div className={classes.root}>
      <InternalDataListContext.Provider
        value={{
          ...externalDataListContextValue,
          items,
          isItemSelectable: item => !itemSelectorDisabled(item),
          selectableItems: items.filter(item => !itemSelectorDisabled(item)),
          disableSelect,
        }}
      >
        <DataListHeader className={classes.row} columns={columns} />
        <InfiniteList
          itemCount={items.length}
          itemsRenderer={(children, ref) => (
            <List className={classes.list} ref={ref}>
              {children}
            </List>
          )}
          renderItem={(index, key) => {
            const dataItem = items[index];

            return (
              <li key={key} className={classes.bodyRow}>
                <DataListItemContext.Provider value={{ dataItem }}>
                  <ListItemComponent
                    className={cn(classes.row)}
                    loading={dataQueryResult.loading}
                    data={dataItem}
                  >
                    {columns.map(column => {
                      const Component = column.component;
                      return (
                        <Component
                          key={column.title}
                          loading={dataQueryResult.loading}
                          data={dataItem}
                        />
                      );
                    })}
                  </ListItemComponent>
                </DataListItemContext.Provider>
                {RowActionsComponent && (
                  <RowActionsComponent
                    className={classes.rowActions}
                    data={dataItem}
                  />
                )}
              </li>
            );
          }}
          onIntersection={onLoadMoreItems}
          {...props}
        />
      </InternalDataListContext.Provider>
    </div>
  );
};

DataList.defaultProps = {
  Context: React.createContext({
    selectedItems: [],
    setSelectedItems: () => null,
  }),
  idleTimeout: 300,
  ListItemComponent: null,
  RowActionsComponent: null,
  onLoadMoreItems: null,
  itemSelectorDisabled: () => false,
  disableSelect: false,
};

DataList.propTypes = {
  Context: PropTypes.shape({
    selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSelectedItems: PropTypes.func.isRequired,
  }),
  idleTimeout: PropTypes.number,
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
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }),
  ).isRequired,
  ListItemComponent: PropTypes.func,
  RowActionsComponent: PropTypes.func,
  EmptyStateComponent: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  onLoadMoreItems: PropTypes.func,
  itemSelectorDisabled: PropTypes.func,
  disableSelect: PropTypes.bool,
};

export default DataList;
