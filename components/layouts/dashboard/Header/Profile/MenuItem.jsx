import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HeaderProfileMenuItem = ({
  classes, className, children, onClick,
}) => (
  <button type="button" className={cn(classes.root, className)} onClick={onClick}>
    {children}
  </button>
);

HeaderProfileMenuItem.defaultProps = {
  className: null,
};

HeaderProfileMenuItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 20px',
    border: 'none',
    background: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgb(0, 139, 236, 0.1)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
})(HeaderProfileMenuItem);
