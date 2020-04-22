import { throttle } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '../Autocomplete';

const INPUT_VALUE_THROTTLE_TIMEOUT = 300;

const AsyncAutocomplete = ({
  loading: isLoadingDefaultOptions,
  defaultOptions,
  fetchOptions,
  inputValueThrottleTimeout,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState({});

  const setFormattingOptions = newOptions => {
    // TODO: #28808
    setOptions(prevOptions =>
      newOptions.reduce(
        (acc, newOption) => ({
          ...acc,
          [newOption.key]: newOption,
        }),
        prevOptions,
      ),
    );
  };

  const handleInputChange = React.useCallback(
    throttle(async (event, searchString) => {
      setLoading(true);

      const newOptions = await fetchOptions(searchString);

      setLoading(false);
      setFormattingOptions(newOptions);
    }, inputValueThrottleTimeout),
    [open],
  );

  React.useEffect(() => {
    if (!isLoadingDefaultOptions && defaultOptions) {
      setFormattingOptions(defaultOptions);
    }
  }, [isLoadingDefaultOptions]);

  return (
    <Autocomplete
      {...props}
      options={Object.values(options)}
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
  defaultOptions: null,
  inputValueThrottleTimeout: INPUT_VALUE_THROTTLE_TIMEOUT,
};

AsyncAutocomplete.propTypes = {
  loading: PropTypes.bool,
  inputValueThrottleTimeout: PropTypes.number,
  defaultOptions: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
  }),
  /**
   * Функция получения новых данных
   *
   * (inputValue: string) => Promise<{key: string, label: string, value: any}>
   */
  fetchOptions: PropTypes.func.isRequired,
};

export default AsyncAutocomplete;
