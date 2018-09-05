import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HeaderProfileMenuItemText = ({ classes, className, text }) => (
  <span className={cn(classes.root, className)}>{text}</span>
);

HeaderProfileMenuItemText.defaultProps = {
  className: null,
};

HeaderProfileMenuItemText.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    fontSize: '14px',
  },
})(HeaderProfileMenuItemText);
