import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Brand from './Brand';
import MainTitle from './MainTitle';
import Profile from './Profile';

const Header = ({ classes, className, children }) => (
  <header className={cn(classes.root, className)}>{children}</header>
);

Header.defaultProps = {
  className: null,
};

Header.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Brand, MainTitle, Profile };

export default withStyles({
  root: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    height: '60px',
    borderBottom: '1px solid #F0F0F0',
    background: '#fff',
    zIndex: 2,
  },
})(Header);
