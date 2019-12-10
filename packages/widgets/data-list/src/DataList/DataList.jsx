import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ContentState, List, InfiniteList } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import DataListEmptyState from '../DataListEmptyState';
import DataListHeader from './DataListHeader';
import { __Context as DataListItemContext } from '../DataListItem';

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
        return `${props.columns
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
  loading,
  error,
  RowActions,
  ListItemComponent,
  data,
  EmptyStateProps,
  onLoadMoreItems,
  ...props
}) => {
  const { columns } = props;
  const classes = useStyles(props);
  const Children = () => {
    if (!loading && data.length === 0) {
      // TODO: вынести DataListEmptyState как отдельный компонент и удалить EmptyStateProps
      return <DataListEmptyState {...EmptyStateProps} />;
    }

    return (
      <>
        <DataListHeader className={classes.row} columns={columns} />
        <InfiniteList
          awaitMore
          itemCount={data.length}
          itemsRenderer={(items, ref) => (
            <List className={classes.list} ref={ref}>
              {items}
            </List>
          )}
          renderItem={(index, key) => {
            const dataItem = data[index];

            return (
              <li key={key} className={classes.bodyRow}>
                <DataListItemContext.Provider value={dataItem}>
                  <ListItemComponent className={cn(classes.row)}>
                    {columns.map(column => {
                      const Component = column.component;

                      return <Component key={column.title} data={dataItem} />;
                    })}
                  </ListItemComponent>
                </DataListItemContext.Provider>
                {RowActions && (
                  <RowActions className={classes.rowActions} data={dataItem} />
                )}
              </li>
            );
          }}
          onIntersection={onLoadMoreItems}
          {...props}
        />
      </>
    );
  };

  return (
    <ContentState
      loading={loading}
      error={error}
      className={classes.root}
      component="div"
    >
      <Children />
    </ContentState>
  );
};

DataList.defaultProps = {
  error: null,
  ListItemComponent: null,
  RowActions: null,
  EmptyStateProps: null,
  onLoadMoreItems: null,
};

DataList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }),
  ).isRequired,
  ListItemComponent: PropTypes.func,
  RowActions: PropTypes.func,
  EmptyStateProps: PropTypes.shape({
    text: PropTypes.string,
    Illustration: PropTypes.func,
  }),
  onLoadMoreItems: PropTypes.func,
};

export default DataList;
