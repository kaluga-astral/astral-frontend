import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HeaderSearch = ({
  classes, className, onChange, ...props
}) => (
  <div className={cn(classes.root, className)}>
    <svg width="15" height="15" viewBox="0 0 15 15" className={classes.icon}>
      <path
        d="M11.2242 10.5898L14.8703 14.2351C15.0432 14.408 15.0432 14.6941 14.8703 14.867C14.7838 14.9568 14.6673 15.0001 14.5542 15.0001C14.4411 15.0001 14.3247 14.9535 14.2382 14.867L10.5921 11.2218C9.46773 12.1996 8.00067 12.7916 6.3972 12.7916C2.87093 12.7916 0 9.92133 0 6.39587C0 2.87036 2.8676 6.10352e-05 6.3972 6.10352e-05C9.92349 6.10352e-05 12.7944 2.867 12.7944 6.39587C12.7944 7.99896 12.2023 9.4657 11.2242 10.5898ZM6.5 1.00006C3.46884 1.00006 1 3.46484 1 6.49841C1 9.53198 3.46884 12.0001 6.5 12.0001C9.53448 12.0001 12 9.52863 12 6.49841C12 3.46814 9.53448 1.00006 6.5 1.00006Z"
        fill="black"
        fillOpacity="0.3"
      />
    </svg>
    <input type="search" className={classes.input} onChange={onChange} {...props} />
  </div>
);

HeaderSearch.defaultProps = {
  className: null,
  placeholder: 'Поиск',
};

HeaderSearch.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    flex: 1,
    height: '100%',
    padding: '0 25px',
    '&:not(:last-child)': {
      borderRight: '0.5px solid rgba(0, 0, 0, 0.15)',
    },
  },
  icon: {
    position: 'absolute',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    color: '#dadada',
  },
  input: {
    width: '100%',
    height: '100%',
    padding: ' 10px 0 10px 30px',
    border: 0,
    boxSizing: 'border-box',
    fontWeight: '300',
    fontSize: '14px',
    color: theme.palette.common.black,
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      padding: '1px',
      color: 'rgba(0, 0, 0, 0.3)',
      opacity: 1,
    },
    '-webkit-appearance': 'textfield',
  },
}))(HeaderSearch);
