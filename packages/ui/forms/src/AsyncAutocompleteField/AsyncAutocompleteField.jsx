import { omit } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';
import { useField, useFormState, useForm } from 'react-final-form';

import { AsyncAutocomplete } from '@astral-frontend/components';

import { createValidationFunction } from '../utils';

// TODO: #28099
const AsyncAutocompleteField = ({
  name,
  validate,
  required,
  InputProps,
  ...props
}) => {
  const { initialValues } = useFormState();
  const { mutators } = useForm();
  const initialFieldValue = initialValues[name] || {};
  const validationFunction = React.useCallback(
    createValidationFunction(required, validate),
    [required, validate],
  );
  const { input, meta } = useField(name, {
    validate: validationFunction,
  });
  const [value, setValue] = React.useState(initialFieldValue);
  const error = meta.touched && !meta.valid;
  const helperText = meta.error && meta.touched ? meta.error : null;
  const handleChange = (event, newValue) => {
    if (newValue) {
      setValue(newValue);
      input.onChange(newValue.value);
    } else {
      setValue(null);
      input.onChange(null);
    }
  };

  React.useEffect(() => {
    mutators.setValue(name, initialFieldValue.value);
  }, [name, JSON.stringify(initialFieldValue.value)]);

  return (
    <AsyncAutocomplete
      {...props}
      error={error}
      required={required}
      helperText={helperText}
      value={value}
      InputProps={{
        ...InputProps,
        ...omit(input, ['value', 'onChange']),
      }}
      onChange={handleChange}
    />
  );
};

AsyncAutocompleteField.defaultProps = {
  validate: null,
  required: false,
  InputProps: {},
};

AsyncAutocompleteField.propTypes = {
  /**
   * Имя поля
   *
   * https://final-form.org/docs/final-form/field-names
   */
  name: PropTypes.string.isRequired,
  /**
   * Функция валидации, которая принимает значение поля, все значения формы и метаданные о поле.
   * Возвращает ошибку когда значение недопустимо, и undefined, если значение допустимо.
   * Большенство общих валидаций находятся в пакете @astral-frontend/validations
   *
   * (value: ?any, allValues: Object, meta: ?FieldState) => ?any
   *
   */
  validate: PropTypes.func,
  /**
   * Обязательность поля
   */
  required: PropTypes.bool,
  /**
   * Пропсы компонента Input
   */
  InputProps: PropTypes.shape({}),
};

export default AsyncAutocompleteField;
