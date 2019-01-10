import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const DashboardHeaderSearch = ({
  classes, className, onChange, ...props
}) => (
  <div className={cn(classes.root, className)}>
    <svg viewBox="0 0 24 24" className={classes.icon}>
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
    <input type="search" className={classes.input} onChange={onChange} {...props} />
  </div>
);

DashboardHeaderSearch.defaultProps = {
  className: null,
  placeholder: 'Поиск',
};

DashboardHeaderSearch.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      position: 'relative',
      flex: 1,
      height: '100%',
      padding: '0 25px',
      borderRight: '0.5px solid rgba(0, 0, 0, 0.15)',
    },
    icon: {
      position: 'absolute',
      display: 'flex',
      height: '16px',
      width: '16px',
      alignSelf: 'center',
      fill: '#dadada', // FIXME
    },
    input: {
      width: '100%',
      height: '100%',
      padding: ' 10px 0 10px 30px',
      border: 0,
      boxSizing: 'border-box',
      fontWeight: '300',
      fontSize: '16px',
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
  }),
  { name: 'DashboardHeaderSearch' },
)(DashboardHeaderSearch);
