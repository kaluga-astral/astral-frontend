import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ProductLogo from './product-logo.png';

const AccountAside = ({ className, classes, title }) => (
  <aside className={cn(classes.root, className)}>
    <div className={classes.info}>
      <img src={ProductLogo} alt={title} className={classes.logo} />
      <h1 className={classes.title}>{title}</h1>
    </div>
  </aside>
);

AccountAside.defaultProps = {
  className: null,
  title: '',
};

AccountAside.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    info: PropTypes.string,
    logo: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    flex: 1,
    backgroundColor: '#CCC',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: 0,
    '&::before': {
      content: '',
      position: 'absolute',
      height: '200px',
      width: '100%',
      background: `linear-gradient(rgba(0, 0, 0, 0.0001), ${theme.palette.common.black})`,
      zIndex: 1,
    },
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '40px 60px',
    zIndex: 2,
  },
  logo: {
    height: '40px',
    marginRight: '30px',
  },
  title: {
    margin: 0,
    fontWeight: 300,
    fontSize: '30px',
    color: theme.palette.common.white,
  },
}))(AccountAside);
