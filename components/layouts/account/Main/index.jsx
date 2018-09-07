import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Title from './Title';

const AccountMain = ({ classes, className, children }) => (
  <main className={cn(classes.root, className)}>{children}</main>
);

AccountMain.Title = Title;

AccountMain.defaultProps = {
  className: null,
  children: null,
};

AccountMain.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '65px',
  },
})(AccountMain);
