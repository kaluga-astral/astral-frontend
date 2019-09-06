import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Popper, Fade, ClickAwayListener } from '@astral-frontend/core';
import { Paper, ContentState } from '@astral-frontend/components';

import ProductsList from '../ProductsList';

import useStyles from './styles';

import { PRODUCTS_STUB } from './stub';

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
  open, id, anchorEl, onClose,
}) => {
  const arrowRef = useRef(null);
  // const { status, error, data: products } = fetchProductsInfo;

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
                  loading={false}
                  // error={error}
                  className={classes.contentState}
                >
                  <ProductsList products={PRODUCTS_STUB} />
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
  id: undefined,
  anchorEl: undefined,
};

ProductsPopover.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  fetchProductsInfo: PropTypes.shape({
    response: PropTypes.array,
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
