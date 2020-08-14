import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Popper, Fade, ClickAwayListener } from '@astral-frontend/core';
import { Paper, ContentState } from '@astral-frontend/components';

import ProductsList from '../ProductsList';
import ErrorPlaceholder from '../ErrorPlaceholder';
import EmptyPlaceholder from '../EmptyPlaceholder';

import useStyles from './styles';

const getPopperMod = arrowRef => ({
  flip: {
    enabled: false,
  },
  preventOverflow: {
    enabled: true,
    boundariesElement: 'scrollParent',
  },
  arrow: {
    enabled: true,
    element: arrowRef,
  },
});

const ProductsPopover = ({
  open,
  id,
  anchorEl,
  fetchProductsInfo,
  onClose,
}) => {
  const arrowRef = useRef(null);
  const { status, error, products } = fetchProductsInfo;
  const noResult = products.length === 0;

  const classes = useStyles();

  return (
    <Popper
      transition
      open={open}
      id={id}
      placement="right-start"
      modifiers={getPopperMod(arrowRef.current)}
      anchorEl={anchorEl}
    >
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={onClose}>
          <Fade {...TransitionProps} timeout={250}>
            <div>
              <span ref={arrowRef} className={classes.arrow} />
              <Paper className={classes.popoverContainer}>
                <ContentState
                  loading={status.loading}
                  error={error}
                  FailureStateComponent={ErrorPlaceholder}
                >
                  {noResult ? (
                    <EmptyPlaceholder />
                  ) : (
                    <ProductsList products={products} />
                  )}
                </ContentState>
              </Paper>
            </div>
          </Fade>
        </ClickAwayListener>
      )}
    </Popper>
  );
};

ProductsPopover.defaultProps = {
  id: null,
  anchorEl: null,
};

ProductsPopover.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  fetchProductsInfo: PropTypes.shape({
    products: PropTypes.array,
    error: PropTypes.instanceOf(Error),
    status: PropTypes.object.isRequired,
  }).isRequired,
  anchorEl: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  onClose: PropTypes.func.isRequired,
};

export default ProductsPopover;
