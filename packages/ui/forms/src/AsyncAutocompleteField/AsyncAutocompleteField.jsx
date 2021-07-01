import { isEqual, omit } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { useField, useFormState } from 'react-final-form';
import { AsyncAutocomplete } from '@astral-frontend/components';

import { createValidationFunction } from '../utils';

// TODO: #28099
const AsyncAutocompleteField = ({
  name,
  validate,
  required,
  InputProps,
  onChange,
  ...props
}) => {
  const { initialValues, values, active } = useFormState();
  const initialFieldValue = initialValues?.[name];
  const fieldValue = values?.[name];
  const editing = active === name;

  const validationFunction = React.useCallback(
    createValidationFunction(required, validate),
    [required, validate],
  );

  const { input, meta } = useField(name, {
    validate: validationFunction,
  });

  const error = required && meta.touched && !meta.valid;
  const helperText = meta.error && meta.touched ? meta.error : null;

  const handleChange = React.useCallback((event, newValue) => {
    if (newValue) {
      input.onChange(newValue);
    } else {
      input.onChange(null);
    }
    if (onChange) {
      onChange(event, newValue);
    }
  }, []);

  React.useEffect(() => {
    if (!editing) {
      input.onChange(initialFieldValue);
    }
  }, [JSON.stringify(initialFieldValue)]);

  React.useEffect(() => {
    if (!editing && isEqual(initialFieldValue, fieldValue)) {
      input.onChange(initialFieldValue);
    }
  }, [JSON.stringify(fieldValue)]);

  return (
    <AsyncAutocomplete
      {...props}
      name={name}
      error={error}
      required={required}
      helperText={helperText}
      value={input.value || null}
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
  onChange: null,
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
  onChange: PropTypes.func,
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
