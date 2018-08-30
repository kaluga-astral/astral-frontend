import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Main = ({ classes, className, children }) => (
  <main className={cn(classes.root, className)}>{children}</main>
);

Main.defaultProps = {
  className: null,
};

Main.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    flex: 1,
    width: '100%',
    overflowY: 'scroll',
    background: '#FBFBFB', // FIXME: цвета в палитру
    zIndex: 1,
  },
})(Main);
