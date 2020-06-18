import { uniqueId } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import DataList from '@astral-frontend/data-list';
import TableTemplatedDataListHeader from './TableTemplatedDataListHeader';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'scroll',
    },
    list: {
      margin: 0,
      padding: 0,
    },
    row: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: props => {
        return `50px ${props.columns
          .map(column => `minmax(0, ${column.fr || '1'}fr)`)
          .join(' ')}`;
      },
    },
    bodyRow: {
      position: 'relative',
      '&:not(:last-child)': {
        marginBottom: theme.spacing(1),
      },
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
  { name: 'TableTemplatedDataList' },
);

const TableTemplatedDataList = ({
  columns,
  dataQueryResult,
  ListItemComponent,
  RowActionsComponent,
  disableSelect,
  ...props
}) => {
  const classes = useStyles({ columns });
  const listRenderer = React.useCallback(
    ({ children, ref }) => (
      <div className={classes.root}>
        <TableTemplatedDataListHeader
          className={classes.row}
          columns={columns}
        />
        <ul className={classes.list} ref={ref}>
          {children}
        </ul>
      </div>
    ),
    [],
  );
  const renderItem = React.useCallback(
    ({ data, key }) => (
      <li key={key} className={classes.bodyRow}>
        <ListItemComponent data={data} className={cn(classes.row)}>
          {columns.map(column => {
            return React.cloneElement(column.component(data), {
              key: uniqueId(),
              align: column.align,
            });
          })}
        </ListItemComponent>
        {RowActionsComponent && (
          <RowActionsComponent className={classes.rowActions} data={data} />
        )}
      </li>
    ),
    [columns, dataQueryResult.loading],
  );

  return (
    <DataList
      {...props}
      dataQueryResult={dataQueryResult}
      listRenderer={listRenderer}
      renderItem={renderItem}
      disableSelect={disableSelect}
      withRowActions={Boolean(RowActionsComponent)}
    />
  );
};

TableTemplatedDataList.defaultProps = {
  RowActionsComponent: null,
  disableSelect: false,
};

TableTemplatedDataList.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
      align: PropTypes.oneOf(['left', 'center', 'right']),
    }),
  ).isRequired,
  dataQueryResult: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    data: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }).isRequired,
  ListItemComponent: PropTypes.func.isRequired,
  RowActionsComponent: PropTypes.func,
  disableSelect: PropTypes.bool,
};

export default TableTemplatedDataList;
