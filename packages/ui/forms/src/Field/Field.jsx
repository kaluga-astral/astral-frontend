import PropTypes from 'prop-types';
import React from 'react';
import { Field as FinalFormField } from 'react-final-form';
import { TextField as MuiTextField } from '@astral-frontend/components';

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
  // render,
  subscription,
  validate,
  validateFields,
  value,
  // ======MUITextFieldProps=====
  ...MuiTextFieldProps
}) => (
  <FinalFormField
    allowNull={allowNull}
    defaultValue={defaultValue}
    format={format}
    formatOnBlur={formatOnBlur}
    initialValue={initialValue}
    isEqual={isEqual}
    name={name}
    parse={parse}
    render={({ input, meta }) => {
      const error = meta.touched && !meta.valid;
      const helperText = meta.error || meta.submitError;

      return (
        <MuiTextField {...MuiTextFieldProps} {...input} error={error} helperText={helperText} />
      );
    }}
    subscription={subscription}
    validate={validate}
    validateFields={validateFields}
    value={value}
  />
);

FormField.defaultProps = {
  allowNull: false,
  defaultValue: false,
  format: null,
  formatOnBlur: false,
  initialValue: null,
  isEqual: null,
  parse: null,
  subscription: null,
  validate: null,
  validateFields: null,
  value: null,
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
};

export default FormField;
