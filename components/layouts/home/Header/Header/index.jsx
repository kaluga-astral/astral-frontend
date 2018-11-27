import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutHeader = ({
  classes, className, children, ...props
}) => (
  <header className={cn(classes.root, className)} {...props}>
    <div className={classes.content}>{children}</div>
  </header>
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
    width: '100%',
    background: theme.palette.primary.dark,
    zIndex: 1,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    height: '85px',
    maxWidth: theme.breakpoints.values.xl,
    padding: '0 70px',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      height: '45px',
      padding: '0 30px',
      justifyContent: 'space-between',
    },
  },
}))(HomeLayoutHeader);
