import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '../../../../IconButton';
import SvgIcon from '../../../../SvgIcon';

const HomeLayoutHeaderDrawerToggler = ({ className, classes, ...props }) => (
  <IconButton className={cn(classes.root, className)} {...props}>
    <SvgIcon viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#ffffff" />
    </SvgIcon>
  </IconButton>
);

HomeLayoutHeaderDrawerToggler.defaultProps = {
  className: null,
};

HomeLayoutHeaderDrawerToggler.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default withStyles({
  root: {},
})(HomeLayoutHeaderDrawerToggler);
