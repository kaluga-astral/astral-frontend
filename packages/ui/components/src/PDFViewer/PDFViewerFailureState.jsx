import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

const PDFViewerFailureState = ({ error }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      px="5vw"
      color="common.white"
    >
      {error.message || 'Невозможно отобразить документ'}
    </Box>
  );
};

PDFViewerFailureState.propTypes = {
  error: PropTypes.instanceOf(Error),
};

export default PDFViewerFailureState;
