import cn from 'classnames';
import { find } from 'lodash-es';

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

import Field from '../Field';
import { MenuItem } from '../../../Menu';

const SelectIcon = () => (
  <svg style={{ position: 'absolute', top: 'calc(50% - 3px)', right: '10px' }} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.0944805 0.263158L0.285453 0.0873065C0.411871 -0.0291022 0.616293 -0.0291022 0.742711 0.0873065L5.99849 4.92941L11.257 0.0873065C11.3834 -0.0291022 11.5878 -0.0291022 11.7142 0.0873065L11.9052 0.263158C12.0316 0.379567 12.0316 0.567802 11.9052 0.684211L6.22981 5.91269C6.10339 6.0291 5.89897 6.0291 5.77255 5.91269L0.0971699 0.684211C-0.0319376 0.567802 -0.0319376 0.379567 0.0944805 0.263158Z" fill="black"/>
  </svg>
);

class SelectField extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.multiple ? [] : ''
    };
  };

  onChangeSelectValue = onChange => event => {
    const { options, multiple, menuSelectText, menuCancelText } = this.props;
    const { value } = event.target;
    
    if (multiple) {
      const hasMenuSelectText = find(value, element => element === menuSelectText);
      const hasMenuCancelText = find(value, element => element === menuCancelText);
      
      if (hasMenuSelectText) {
        const optionsValue = options.map(option => option.value);

        onChange(optionsValue);
        return this.setState({ value: optionsValue });
      } else if (hasMenuCancelText) {

        onChange([]);
        return this.setState({ value: [] });
      }
    }

    onChange(value);
    return this.setState({ value });
  };

  render = () => {
    const { value } = this.state;
    const {
      disabled,
      multiple,
      classes,
      options,
      variant,
      renderValue,
      menuSelectText,
      menuCancelText,
      className: classNameProp,
      ...props
    } = this.props;

    const className = cn(classNameProp, {
      [classes.secondary]: variant === 'secondary'
    });
    
    return (
      <Field {...props}>
        {({ input }) => (
          <React.Fragment>
            <InputLabel
              disabled={disabled}
              focused={false}
              shrink={variant === 'primary' ? undefined : false}
              disableAnimation={variant === 'secondary'}
              htmlFor="select-placeholder"
              className={cn(
                { [classes.placeholder]: variant === 'secondary' },
                { [classes.hiddenPlaceholder]: variant === 'secondary' && value.length > 0 }
              )}
            >
              {input.placeholder}
            </InputLabel>
            <Select
              {...input}
              disabled={disabled}
              multiple={multiple}
              className={className}
              renderValue={renderValue}
              inputProps={{ id: 'select-placeholder' }}
              value={value}
              IconComponent={SelectIcon}
              onChange={this.onChangeSelectValue(input.onChange)}
              MenuProps={{
                PaperProps: {
                  className: cn(classes.paperDefault, {
                    [classes.primaryPaper]: variant === 'primary',
                    [classes.secondaryPaper]: variant === 'secondary'
                  })
                }
              }}
            >
              {multiple && (
                <MenuItem value={options.length === value.length ? menuCancelText : menuSelectText}>
                  {options.length === value.length ? menuCancelText : menuSelectText}
                </MenuItem>
              )}
              {options.map(option => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </React.Fragment>
        )}
      </Field>
    );
  };
}

SelectField.defaultProps = {
  menuSelectText: 'Выбрать все',
  menuCancelText: 'Снять все',
  multiple: false,
  placeholder: 'Выберите значение',
  variant: 'primary'
};

SelectField.propTypes = {
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
  /**
   * Вариант использования
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default withStyles(theme => ({
  placeholder: {
    paddingTop: '2px',
    paddingLeft: '12px'
  },
  hiddenPlaceholder: {
    display: 'none'
  },
  paperDefault: {
    boxShadow: '0px 2px 5px rgba(0, 0, 0, .1)',
    width: 'fit-content',
    '& > ul': {
      paddingTop: '0',
      paddingBottom: '0',
      '& > li:first-child': {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px'
      },
      '& > li:last-child': {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px'
      },
    }
  },
  primaryPaper: {
    margin: '56px auto',
  },
  secondaryPaper: {
    margin: '65px auto'
  },
  secondary: {
    textIndent: '12px',
    border: '1px solid #EEEEEE',
    borderRadius: '4px',
    '&:before': {
      content: 'none'
    },
    '&:after': {
      content: 'none'
    }
  }
}))(SelectField);
