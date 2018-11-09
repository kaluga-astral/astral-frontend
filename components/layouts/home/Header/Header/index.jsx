import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutHeader = ({ classes, className, ...props }) => (
  <header className={cn(classes.root, className)} {...props} />
);

HomeLayoutHeader.defaultProps = {
  className: null,
};

HomeLayoutHeader.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '85px',
    padding: '0 50px',
    background: theme.palette.primary.dark,
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      height: '45px',
      padding: '0 30px',
      justifyContent: 'space-between',
    },
  },
}))(HomeLayoutHeader);
