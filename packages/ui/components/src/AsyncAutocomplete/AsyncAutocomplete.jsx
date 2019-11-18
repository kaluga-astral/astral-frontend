import { throttle } from 'lodash-es';
import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '../Autocomplete';

const INPUT_VALUE_THROTTLE_TIMEOUT = 300;

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

const AsyncAutocomplete = ({
  fetchOptions,
  inputValueThrottleTimeout,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(open);
  const [options, setOptions] = React.useState([]);
  const handleInputChange = React.useCallback(
    throttle(async (event, value) => {
      setLoading(true);

      const newOptions = await fetchOptions(value);
      await sleep(1e3);

      setLoading(false);
      setOptions(newOptions);
    }, inputValueThrottleTimeout),
    [],
  );

  React.useEffect(() => {
    fetchOptions(null).then(setOptions);
  }, []);

  return (
    <Autocomplete
      {...props}
      loading={loading}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onInputChange={handleInputChange}
      options={options}
    />
  );
};

AsyncAutocomplete.defaultProps = {
  inputValueThrottleTimeout: INPUT_VALUE_THROTTLE_TIMEOUT,
};

AsyncAutocomplete.propTypes = {
  inputValueThrottleTimeout: PropTypes.number,
  fetchOptions: PropTypes.func.isRequired,
};

export default AsyncAutocomplete;
