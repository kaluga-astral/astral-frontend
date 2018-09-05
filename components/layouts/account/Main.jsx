import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const AccountMain = ({ title, children, classes }) => (
  <main className={classes.root}>
    <h3 className={classes.title}>{title}</h3>
    {children}
  </main>
);

AccountMain.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
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
