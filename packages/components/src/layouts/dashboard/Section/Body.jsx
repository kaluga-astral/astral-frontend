import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const SectionBody = ({ classes, children, className }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

SectionBody.defaultProps = {
  className: null,
};

SectionBody.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    height: '100%',
  },
})(SectionBody);
