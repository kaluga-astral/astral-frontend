import cn from 'classnames';
import { PropTypes } from 'prop-types';
import { cloneElement } from 'react';
import { withStyles } from '@material-ui/core/styles';

const HeaderProfileMenuItemIcon = ({ classes, className, children }) =>
  cloneElement(children, { className: cn(classes.root, className) });

HeaderProfileMenuItemIcon.defaultProps = {
  className: null,
};

HeaderProfileMenuItemIcon.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    marginRight: '15px',
    fontSize: '20px !important',
  },
})(HeaderProfileMenuItemIcon);
