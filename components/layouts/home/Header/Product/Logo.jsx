import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutProductLogo = ({
  classes, className, children, ...props
}) => React.cloneElement(children, { className: cn(classes.root, className), ...props });

HomeLayoutProductLogo.defaultProps = {
  className: null,
};

HomeLayoutProductLogo.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(theme => ({
  root: {
    width: '40px',
    height: '40px',
    marginRight: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '20px',
      height: '20px',
      marginRight: 0,
    },
  },
}))(HomeLayoutProductLogo);
