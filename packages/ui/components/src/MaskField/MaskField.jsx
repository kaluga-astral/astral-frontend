import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const MaskField = ({
  inputRef, ...props
}) => (
  <MaskedInput
    {...props}
    ref={(ref) => {
      inputRef(ref ? ref.inputElement : null);
    }}
  />
);

MaskField.defaultProps = {
  inputRef: () => {},
};

MaskField.propTypes = {
  inputRef: PropTypes.func,
};

export default MaskField;
