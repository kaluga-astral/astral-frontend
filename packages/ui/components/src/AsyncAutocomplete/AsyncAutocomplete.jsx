import { throttle } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '../Autocomplete';

const INPUT_VALUE_THROTTLE_TIMEOUT = 300;

const AsyncAutocomplete = ({
  prefetch,
  prefetchSearchString,
  fetchOptions,
  inputValueThrottleTimeout,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState({});

  const handleFetchOptions = React.useCallback(
    throttle(async searchString => {
      setLoading(true);

      const newOptions = await fetchOptions(searchString);

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

  const handleInputChange = (event, inputValue) =>
    handleFetchOptions(inputValue);

  React.useEffect(() => {
    if (prefetch) handleFetchOptions(prefetchSearchString);
  }, []);

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
  prefetch: false,
  prefetchSearchString: '',
  inputValueThrottleTimeout: INPUT_VALUE_THROTTLE_TIMEOUT,
};

AsyncAutocomplete.propTypes = {
  prefetch: PropTypes.bool,
  prefetchSearchString: PropTypes.string,
  inputValueThrottleTimeout: PropTypes.number,
  /**
   * Функция получения новых данных
   *
   * (inputValue: string) => Promise<{key: string, label: string, value: any}>
   */
  fetchOptions: PropTypes.func.isRequired,
};

export default AsyncAutocomplete;
