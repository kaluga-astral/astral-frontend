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
    flex: 1,
    margin: '0 12.5px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontWeight: 'bold',
    fontSize: '20px',
    '&:first-child': {
      marginLeft: '25px',
    },
    '&:last-child': {
      marginRight: '25px',
    },
  },
})(HeaderMainTitle);
