import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Item from './Item';

const HeaderActions = ({
  children, classes, className, ...props
}) => (
  <div className={cn(classes.root, className)} {...props}>
    {children}
  </div>
);

HeaderActions.defaultProps = {
  className: null,
};

HeaderActions.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HeaderActions.Item = Item;

export default withStyles({
  root: {
    height: '100%',
    padding: '0 12.5px',
    '&:not(:last-child)': {
      borderRight: '0.5px solid rgba(0, 0, 0, 0.15)',
    },
  },
})(HeaderActions);
