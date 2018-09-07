import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import productLogo from './product-logo.png';
import background from './background.jpeg';

const AccountAside = ({
  classes, className, productName, productDescription,
}) => (
  <aside className={cn(classes.root, className)}>
    <div className={classes.productInfo}>
      <img src={productLogo} alt={productName} className={classes.productlogo} />
      <div>
        <h1 className={classes.productName}>{productName}</h1>
        {productDescription && <p className={classes.productDescription}>{productDescription}</p>}
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
  productDescription: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    flex: 1,
    backgroundColor: '#CCC',
    backgroundImage: `url(${background})`,
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
  productlogo: {
    height: '40px',
    marginRight: '30px',
  },
  productName: {
    margin: 0,
    lineHeight: '40px',
    fontWeight: 300,
    fontSize: '30px',
  },
  productDescription: {
    margin: '10px 0 0 0',
    lineHeight: '16px',
    fontSize: '14px',
  },
}))(AccountAside);
