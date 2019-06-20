import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: props => props.grow,
  },
});

const FlexItem = (props) => {
  const {
    className, component: Component, grow, ...other
  } = props;
  const classes = useStyles(props);

  return <Component className={cn(classes.root, className)} {...other} />;
};

FlexItem.defaultProps = {
  className: null,
  component: 'div',
  grow: 1,
};

FlexItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]),
  grow: PropTypes.number,
};

export default FlexItem;
