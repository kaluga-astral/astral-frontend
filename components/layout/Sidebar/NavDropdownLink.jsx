import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import NavLink from './NavLink';

const NavDropdownLink = props => <NavLink {...props} />;

export default withStyles({
  root: {
    paddingLeft: '70px',
  },
})(NavDropdownLink);
