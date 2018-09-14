import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HeaderActions = ({ children, classes, className }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

HeaderActions.defaultProps = {
  className: null,
};

HeaderActions.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    padding: '0 25px',
    '&:not(:last-child)': {
      borderRight: '0.5px solid rgba(0, 0, 0, 0.15)',
    },
  },
})(HeaderActions);
