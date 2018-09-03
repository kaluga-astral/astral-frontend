import { uniqueId } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUITable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

import Loader from '../status/Loader';

import TableRow from './Row';
import ExpandedTableRow from './ExpandedRow';
import TableCell from './Cell';

class Table extends Component {
  componentDidUpdate = () => {
    // this.wrapper.scrollTop = 0;
  };

  render = () => {
    const {
      isFetching, error, classes, className, columns, data, renderRow,
    } = this.props;

    return (
      <div
        ref={(div) => {
          this.wrapper = div;
        }}
        className={cn(classes.wrapper)}
      >
        {isFetching && (
          <div className={cn(classes.loading)}>
            <Loader />
          </div>
        )}
        <MUITable className={cn(classes.table, className, { [classes.blur]: isFetching })}>
          {columns && (
            <TableHead>
              <TableRow>
                {columns.map(col => <TableCell key={uniqueId()}>{col.title}</TableCell>)}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {isFetching
              && new Array(10).fill().map(() => (
                <TableRow key={uniqueId()}>
                  {columns.map(() => (
                    <TableCell key={uniqueId()}>
                      <div
                        className={classes.placeholder}
                        style={{ width: `${parseInt(Math.random() * 40, 10) + 50}%` }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            {isFetching === false
              && error && (
                <TableRow>
                  <TableCell className={classes.failure} colSpan={columns.length}>
                    <div>
                      <h3>Произошла ошибка</h3>
                    </div>
                    <div>
                      <span>{error.response ? error.response.data.message : error.message}</span>
                    </div>
                  </TableCell>
                </TableRow>
            )}
            {isFetching === false
              && !error
              && data.length === 0 && (
                <TableRow>
                  <TableCell className={classes.empty} colSpan={columns.length}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <svg
                        height="24"
                        width="24"
                        fill="#4e4e4e"
                        viewBox="0 0 24 24"
                        style={{ marginRight: '5px' }}
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" />
                      </svg>
                      <span>Ничего не найдено</span>
                    </div>
                  </TableCell>
                </TableRow>
            )}
            {isFetching === false && !error && data.length > 0 && data.map(renderRow)}
          </TableBody>
        </MUITable>
      </div>
    );
  };
}

Table.defaultProps = {
  className: null,
  error: null,
};

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  columns: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.node,
      key: PropTypes.string,
    }),
    PropTypes.string,
  ])).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  renderRow: PropTypes.func.isRequired,
};

Table.Row = TableRow;
Table.ExpandedRow = ExpandedTableRow;
Table.Cell = TableCell;

export default withStyles({
  wrapper: {
    position: 'relative',
    marginBottom: '30px',
    zIndex: 0,
  },
  table: {
    userSelect: 'none',
    zIndex: 1,
  },
  blur: {
    filter: 'blur(5px)',
  },
  placeholder: {
    height: '10px',
    background: '#d0d0d0', // ToDo: цвета в переменные
    opacity: '.5',
  },
  loading: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 3,
  },
  success: {
    textAlign: 'center',
  },
  failure: {
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
  },
  contentPlaceholder: {
    width: '90%',
    height: '10px',
    margin: '0 auto',
    borderRadius: '5px',
    background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
  },
})(Table);
