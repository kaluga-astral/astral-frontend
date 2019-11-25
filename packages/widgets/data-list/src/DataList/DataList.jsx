import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ContentState, List, ListItem } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import DataListHeader from './DataListHeader';

const useStyles = makeStyles(
  theme => ({
    root: {},
    row: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: props => `repeat(${props.columns.length}, 1fr)`,
    },
    bodyRow: {
      position: 'relative',
    },
    dataItem: {
      padding: theme.spacing(4, 0),
      marginBottom: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.gray[800],
      background: theme.palette.common.white,
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
        <li className={classes.bodyRow}>
          <ListItem
            key={dataItem.key}
            className={cn(classes.row, classes.dataItem)}
            disableGutters
            button
            component={componentProps => (
              <ListItemComponent data={dataItem} {...componentProps} />
            )}
          >
            {columns.map(column => {
              const Component = column.component;

              return <Component key={column.title} data={dataItem} />;
            })}
          </ListItem>
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
      component: PropTypes.element,
    }),
  ).isRequired,
  ListItemComponent: PropTypes.element,
  RowActions: PropTypes.element,
};

export default DataList;
