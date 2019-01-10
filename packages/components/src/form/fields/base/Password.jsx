import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

import Field from '../Field';

const VisibilityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

const VisibilityOffIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none" />
    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
  </svg>
);

class PasswordField extends PureComponent {
  state = {
    isShowed: false,
  };

  handleVisibilityButtonClick = () => {
    this.setState(prevState => ({
      isShowed: !prevState.isShowed,
    }));
  };

  renderVisibilityButton = () => {
    const { isShowed } = this.state;
    const { classes } = this.props;

    return (
      <button
        type="button"
        className={classes.visibilityButton}
        onClick={this.handleVisibilityButtonClick}
      >
        {isShowed ? (
          <VisibilityIcon className={classes.icon} />
        ) : (
          <VisibilityOffIcon className={classes.icon} />
        )}
      </button>
    );
  };

  render = () => {
    const { isShowed } = this.state;
    const {
      withoutVisibilityButton, classes, autoComplete, ...props
    } = this.props;

    return (
      <Field {...props}>
        {({ input }) => (
          <Input
            {...input}
            type={isShowed ? 'text' : 'password'}
            endAdornment={!withoutVisibilityButton && this.renderVisibilityButton()}
          />
        )}
      </Field>
    );
  };
}

PasswordField.defaultProps = {
  name: 'password',
  label: null,
  placeholder: null,
  withoutVisibilityButton: false,
};

PasswordField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  withoutVisibilityButton: PropTypes.bool,
};

export default withStyles({
  visibilityButton: {
    display: 'flex',
    alignItems: 'center',
    border: 0,
    padding: 0,
    width: 20,
    cursor: 'pointer',
    background: 'inherit',
    '&:focus': {
      outline: 'none',
    },
  },
  icon: {
    width: '100%',
    height: '100%',
  },
})(PasswordField);
