/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Field as FinalFormField } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

import { TextField as MuiTextField } from '@astral-frontend/components';

import { createValidationFunction } from '../utils';

// TODO: #28099
const FormField = ({
  // ======FinalFormFieldProps======
  allowNull,
  // children,
  // component,
  defaultValue,
  format,
  formatOnBlur,
  initialValue,
  isEqual,
  name,
  parse,
  render,
  subscription,
  validate,
  validateFields,
  value,
  type,
  onChange,
  // ======MUITextFieldProps=====
  ...MuiTextFieldProps
}) => {
  const { required } = MuiTextFieldProps;
  const validationFunction = useMemo(() => createValidationFunction(required, validate), [
    required,
    validate,
  ]);

  return (
    <>
      <FinalFormField
        allowNull={allowNull}
        defaultValue={defaultValue}
        format={format}
        formatOnBlur={formatOnBlur}
        initialValue={initialValue}
        isEqual={isEqual}
        name={name}
        parse={parse}
        type={type}
        render={({ input, meta }) => {
          const error = meta.touched && !meta.valid;
          const helperText = meta.error && meta.touched ? meta.error : null;

          if (render) {
            return render({ ...input, ...MuiTextFieldProps, error, helperText });
          }

          return (
            <MuiTextField {...input} {...MuiTextFieldProps} error={error} helperText={helperText} />
          );
        }}
        subscription={subscription}
        validate={validationFunction}
        validateFields={validateFields}
        value={value}
      />
      {onChange && (
        <OnChange name={name}>
          {value => {
            onChange(value);
          }}
        </OnChange>
      )}
    </>
  );
};

FormField.defaultProps = {
  allowNull: undefined,
  defaultValue: undefined,
  format: undefined,
  formatOnBlur: undefined,
  initialValue: undefined,
  isEqual: undefined,
  parse: undefined,
  subscription: undefined,
  validate: undefined,
  validateFields: undefined,
  value: undefined,
  //
  required: false,
  select: false,
  variant: 'standard',
  fullWidth: true,
  margin: 'none',
  type: undefined,
};

FormField.propTypes = {
  /**
   * По умолчанию, если value равно null, <Field /> преобразует его в ''.
   * Но если установить allowNull в положение true то <Field /> даст нулевое значение.
   */
  allowNull: PropTypes.bool,
  /**
   * Значение поля при создании.
   * Это значение требуется только в том случае, если вы необходимо,
   * чтобы поле было dirty при создании
   * (т.е. чтобы его значение отличалось от initialValue).
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ]),
  /**
   * Функция форматирует текущее значение для вывода в input
   */
  format: PropTypes.func,
  /**
   * Если true, функция форматирования будет вызываться только тогда, когда поле blurred.
   * Если false, формат будет вызываться при каждом рендере.
   */
  formatOnBlur: PropTypes.bool,
  /**
   * Начальное значение для поля.
   */
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ]),
  /**
   * Функция для определения, равны ли два значения.
   * По умолчанию ===
   * */
  isEqual: PropTypes.func,
  /**
   * Название поля
   */
  name: PropTypes.string.isRequired,
  /**
   * Функция, которая берет значение из поля ввода и имени поля
   * и преобразует значение которое будет использовано как значение этого поля в форме.
   */
  parse: PropTypes.func,
  /** */
  subscription: PropTypes.func,
  /**
   * Функция, которая принимает значение поля, все значения формы и метаданные о поле
   * и возвращает ошибку, если значение недопустимо, или undefined если значение допустимо.
   */
  validate: PropTypes.func,
  /**
   * Массив имен полей для проверки при изменении этого поля.
   * Если undefined, то каждое поле будет проверено при изменении этого поля;
   * если [], то только это поле будет иметь свою функцию проверки на уровне поля
   */
  validateFields: PropTypes.arrayOf(PropTypes.string),
  /**
   * Используется только для checkbox и radio-button!
   * */
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Properties applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * The id of the `input` element.
   * Use this property to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,
  /**
   * Properties applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: PropTypes.object,
  /**
   * Properties applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: PropTypes.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * This property can be used to pass a ref callback to the `input` element.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: PropTypes.bool,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: PropTypes.bool,
  /**
   * Properties applied to the [`Select`](/api/select/) element.
   */
  SelectProps: PropTypes.object,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default FormField;
