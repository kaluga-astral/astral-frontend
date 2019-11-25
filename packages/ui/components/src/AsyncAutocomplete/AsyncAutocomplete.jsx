import { throttle } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '../Autocomplete';

const INPUT_VALUE_THROTTLE_TIMEOUT = 300;

const AsyncAutocomplete = ({
  fetchOptions,
  inputValueThrottleTimeout,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState({});
  const handleInputChange = React.useCallback(
    throttle(async (event, inputValue) => {
      setLoading(true);

      const newOptions = await fetchOptions(inputValue);

      setLoading(false);
      // TODO: #28808
      setOptions(prevOptions => {
        return newOptions.reduce(
          (acc, newOption) => ({
            ...acc,
            [newOption.key]: newOption,
          }),
          prevOptions,
        );
      });
    }, inputValueThrottleTimeout),
    [open],
  );

  return (
    <Autocomplete
      {...props}
      options={Object.values(options)}
      loading={open && loading}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onInputChange={handleInputChange}
    />
  );
};

AsyncAutocomplete.defaultProps = {
  inputValueThrottleTimeout: INPUT_VALUE_THROTTLE_TIMEOUT,
};

AsyncAutocomplete.propTypes = {
  inputValueThrottleTimeout: PropTypes.number,
  /**
   * Функция получения новых данных
   *
   * (inputValue: string) => Promise<{key: string, label: string, value: any}>
   */
  fetchOptions: PropTypes.func.isRequired,
};

export default AsyncAutocomplete;
