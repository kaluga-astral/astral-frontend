import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const SectionTitle = ({ classes, children, className }) => (
  <h1 className={cn(classes.root, className)}>{children}</h1>
);

SectionTitle.defaultProps = {
  className: null,
};

SectionTitle.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
    fontSize: '20px',
    fontWeight: 500,
    color: '#005EA0', // ToDo: перенести цвет в тему
  },
})(SectionTitle);
