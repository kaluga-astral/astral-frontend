// import PropTypes from 'prop-types';
import React from 'react';
import { TextField, CircularProgress } from '@astral-frontend/core';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';

// import TextField from '../TextField';

const Autocomplete = ({ loading, ...props }) => {
  return (
    <MuiAutocomplete
      {...props}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          label="debug"
          margin="normal"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

Autocomplete.defaultProps = {
  getOptionLabel: option => option.label,
};

Autocomplete.propTypes = {};

export default Autocomplete;
