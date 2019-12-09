import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactPagination from 'react-js-pagination';
import { withStyles } from '@astral-frontend/styles';

const getActivePageNumber = (offset, count) =>
  Math.ceil((offset + count) / count - 1) + 1;

class Pagination extends Component {
  static getDerivedStateFromProps = props => {
    const { offset, count } = props;

    return {
      activePage: getActivePageNumber(offset, count),
    };
  };

  state = {
    activePage: undefined,
  };

  handleCountButtonClick = e => {
    const { onChange } = this.props;
    const count = Number(e.target.value);

    onChange({ count, offset: 0 });
  };

  handlePageButtonClick = pageNumber => {
    const { count, onChange } = this.props;
    const offset = (pageNumber - 1) * count;

    onChange({ offset });
  };

  render = () => {
    const {
      classes,
      className,
      countPerPageVariants,
      count,
      totalCount,
      maxPages,
      showCountPerPage,
      hideFirstLastPages,
    } = this.props;
    const { activePage } = this.state;
    if (!totalCount) {
      return null;
    }

    return (
      <div className={cn(classes.root, className)}>
        {showCountPerPage ? (
          <div className={classes.countPerPage}>
            {countPerPageVariants.map(number => (
              <button
                type="button"
                key={number}
                value={number}
                className={cn(classes.count, {
                  [classes.countActive]: count === number,
                })}
                onClick={this.handleCountButtonClick}
              >
                {number}
              </button>
            ))}
          </div>
        ) : (
          <div />
        )}
        <ReactPagination
          hideDisabled
          prevPageText="&lang;"
          nextPageText="&rang;"
          hideFirstLastPages={hideFirstLastPages}
          innerClass={classes.paginationInner}
          itemClass={classes.paginationItem}
          linkClass={classes.paginationLink}
          activeLinkClass={classes.paginationActiveLink}
          activePage={activePage}
          itemsCountPerPage={count}
          totalItemsCount={totalCount}
          pageRangeDisplayed={maxPages}
          onChange={this.handlePageButtonClick}
        />
      </div>
    );
  };
}

Pagination.defaultProps = {
  className: null,
  maxPages: 5,
  countPerPageVariants: [10, 25, 50, 100],
  showCountPerPage: false,
  hideFirstLastPages: true,
};

Pagination.propTypes = {
  showCountPerPage: PropTypes.bool,
  hideFirstLastPages: PropTypes.bool,
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  offset: PropTypes.number.isRequired, // eslint-disable-line
  count: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  maxPages: PropTypes.number,
  countPerPageVariants: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func.isRequired,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'space-between',
    margin: '25px',
  },
  countPerPage: {
    display: 'flex',
  },
  count: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    marginRight: '10px',
    padding: 0,
    border: 0,
    borderRadius: '50%',
    background: 'inherit',
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 300,
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
  },
  countActive: {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
  paginationInner: {
    display: 'flex',
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  paginationItem: {
    width: '32px',
    height: '32px',
    lineHeight: theme.typography.pxToRem(32),
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 300,
    textAlign: 'center',
  },
  paginationLink: {
    display: 'block',
    color: theme.palette.common.black,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  paginationActiveLink: {
    borderRadius: '50%',
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
}))(Pagination);
