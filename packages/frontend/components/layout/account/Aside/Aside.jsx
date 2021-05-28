import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const AccountAside = ({
  classes,
  className,
  productName,
  productLogo: ProductLogo,
  productDescription,
}) => (
  <aside className={cn(classes.root, className)}>
    <div className={classes.productInfo}>
      <ProductLogo className={classes.productLogo} />
      <div>
        <h1 className={classes.productName}>{productName}</h1>
        {productDescription && (
          <p className={classes.productDescription}>{productDescription}</p>
        )}
      </div>
    </div>
  </aside>
);

AccountAside.defaultProps = {
  className: null,
  productDescription: null,
};

AccountAside.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  productName: PropTypes.string.isRequired,
  productLogo: PropTypes.oneOfType([PropTypes.func]).isRequired,
  productDescription: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    flex: 1,
    backgroundColor: theme.palette.gray[500],
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      height: '200px',
      width: '100%',
      background: `linear-gradient(rgba(0, 0, 0, 0.0001), ${theme.palette.common.black})`,
      zIndex: 1,
    },
  },
  productInfo: {
    display: 'flex',
    width: '100%',
    padding: '0 75px 35px 75px',
    fontWeight: 300,
    color: theme.palette.common.white,
    zIndex: 2,
  },
  productLogo: {
    height: '40px',
    width: '40px',
    flexShrink: 0,
    marginRight: '30px',
  },
  productName: {
    margin: 0,
    lineHeight: theme.typography.pxToRem(40),
    fontWeight: 300,
    fontSize: theme.typography.pxToRem(30),
  },
  productDescription: {
    margin: '10px 0 0 0',
    lineHeight: theme.typography.pxToRem(16),
    fontSize: theme.typography.pxToRem(14),
  },
}))(AccountAside);
