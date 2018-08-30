import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

import { material } from '../../../icons';
import Field from '../Field';

const { Visibility, VisibilityOff } = material;

class PasswordField extends PureComponent {
  state = {
    isShowed: false,
  };

  onShowToggle = () => this.setState(prevState => ({ isShowed: !prevState.isShowed }));

  renderShowButton = () => {
    const { isShowed } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.iconWrapper}>
        {isShowed ? (
          <VisibilityOff className={classes.icon} onClick={this.onShowToggle} />
        ) : (
          <Visibility className={classes.icon} onClick={this.onShowToggle} />
        )}
      </div>
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
            autoComplete={autoComplete}
            type={isShowed ? 'text' : 'password'}
            endAdornment={!withoutVisibilityButton && this.renderShowButton()}
          />
        )}
      </Field>
    );
  };
}

PasswordField.defaultProps = {
  name: 'password',
  label: 'Пароль',
  placeholder: 'Введите пароль',
  withoutVisibilityButton: false,
  autoComplete: 'on',
};

PasswordField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  withoutVisibilityButton: PropTypes.bool,
  autoComplete: PropTypes.string,
};

export default withStyles({
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: 20,
    cursor: 'pointer',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
})(PasswordField);
