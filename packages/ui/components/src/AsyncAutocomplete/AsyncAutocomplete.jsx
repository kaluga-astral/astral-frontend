import { throttle } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '../Autocomplete';

const INPUT_VALUE_THROTTLE_TIMEOUT = 300;

const AsyncAutocomplete = ({
  loading: isLoadingDefaultOptions,
  defaultOptions,
  fetchOptions,
  prefetch,
  inputValueThrottleTimeout,
  onInputChange,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState();

  const handleInputChange = React.useCallback(
    throttle(async (event, searchString) => {
      if (onInputChange) onInputChange(event, searchString);

      setLoading(true);

      const newOptions = await fetchOptions(searchString);

      setLoading(false);
      setOptions(newOptions);
    }, inputValueThrottleTimeout),
    [open],
  );

  React.useEffect(() => {
    if (!isLoadingDefaultOptions && defaultOptions) {
      setOptions(defaultOptions);
    }
  }, [isLoadingDefaultOptions]);

  React.useEffect(() => {
    if (prefetch) {
      setLoading(true);

      fetchOptions()
        .then(newOptions => {
          setOptions(newOptions);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <Autocomplete
      {...props}
      options={options}
      loading={open && (isLoadingDefaultOptions || loading)}
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
  loading: false,
  prefetch: true,
  defaultOptions: null,
  inputValueThrottleTimeout: INPUT_VALUE_THROTTLE_TIMEOUT,
};

AsyncAutocomplete.propTypes = {
  loading: PropTypes.bool,
  prefetch: PropTypes.bool,
  inputValueThrottleTimeout: PropTypes.number,
  defaultOptions: PropTypes.arrayOf(PropTypes.any),
  /**
   * Функция получения новых данных
   *
   * (inputValue: string) => Promise<{key: string, label: string, value: any}>
   */
  fetchOptions: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
};

export default AsyncAutocomplete;
