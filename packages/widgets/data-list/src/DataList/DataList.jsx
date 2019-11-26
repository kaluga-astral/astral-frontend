import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ContentState, List } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import DataListHeader from './DataListHeader';
import { __Context as DataListItemContext } from '../DataListItem';

const useStyles = makeStyles(
  theme => ({
    root: {},
    row: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: props => {
        return `${props.columns
          .map(column => `${column.fr || '1'}fr`)
          .join(' ')} 100px`;
      },
    },
    bodyRow: {
      position: 'relative',
    },
    dataItem: {
      borderLeftWidth: theme.spacing(1),
      borderStyle: 'solid',
      borderColor: 'transparent',
      padding: theme.spacing(4, 0),
      marginBottom: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.gray[800],
      background: theme.palette.common.white,
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
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
  ...props
}) => {
  const { columns } = props;
  const classes = useStyles(props);

  return (
    <ContentState
      className={classes.root}
      loading={loading}
      error={error}
      component={List}
      disablePadding
    >
      <DataListHeader className={classes.row} columns={columns} />
      {data.map(dataItem => (
        <li key={dataItem.key} className={classes.bodyRow}>
          <DataListItemContext.Provider value={dataItem}>
            <ListItemComponent className={cn(classes.row)}>
              {columns.map(column => {
                const Component = column.component;

                return <Component key={column.title} data={dataItem} />;
              })}
            </ListItemComponent>
          </DataListItemContext.Provider>
          <RowActions data={dataItem} />
        </li>
      ))}
    </ContentState>
  );
};

DataList.defaultProps = {
  error: null,
  ListItemComponent: null,
  RowActions: () => null,
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
};

export default DataList;
