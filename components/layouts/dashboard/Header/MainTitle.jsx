import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HeaderMainTitle = ({ children, classes, className }) => (
  <h1 className={cn(classes.root, className)}>{children}</h1>
);

HeaderMainTitle.defaultProps = {
  className: null,
};

HeaderMainTitle.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    margin: 0,
    padding: '0 30px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontWeight: 'bold',
    fontSize: '24px',
    '&:not(:last-child)': {
      borderRight: '0.5px solid rgba(0, 0, 0, 0.15)',
    },
  },
})(HeaderMainTitle);
