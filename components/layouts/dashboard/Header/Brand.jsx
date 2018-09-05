import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { ProductLogo } from '../../../brand';

const HeaderBrand = ({ classes, className, productName }) => (
  <div className={cn(classes.root, className)}>
    <ProductLogo className={classes.logo} productName={productName} />
  </div>
);

HeaderBrand.defaultProps = {
  className: null,
};

HeaderBrand.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  productName: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 230px',
    maxWidth: '230px',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  logo: {
    width: 30,
    marginRight: 10,
  },
})(HeaderBrand);
