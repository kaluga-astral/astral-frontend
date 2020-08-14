import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const MaskInput = ({ inputRef, ...props }) => (
  <MaskedInput
    {...props}
    ref={ref => {
      inputRef(ref ? ref.inputElement : null);
    }}
  />
);

MaskInput.defaultProps = {
  inputRef: () => {},
};

MaskInput.propTypes = {
  inputRef: PropTypes.func,
};

export default MaskInput;
