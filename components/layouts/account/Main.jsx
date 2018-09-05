import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const AccountMain = ({
  className,
  title,
  children,
  classes,
}) => (
  <main className={cn(classes.root, className)}>
    <h3 className={classes.title}>{title}</h3>
    {children}
  </main>
);

AccountMain.defaultProps = {
  className: null,
  children: null,
  title: '',
};

AccountMain.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    width: '500px',
    padding: '65px 50px 0 50px',
  },
  title: {
    fontWeight: 300,
    fontSize: '30px',
    color: theme.palette.common.black,
  },
}))(AccountMain);
