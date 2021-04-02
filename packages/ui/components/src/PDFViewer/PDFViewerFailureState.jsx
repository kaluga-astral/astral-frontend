import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@astral-frontend/styles';

import Box from '../Box';

const PDFViewerFailureState = ({ error }) => {
  return (
    <Box
      color="common.white"
      px="5vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {error.message || 'Невозможно отобразить документ'}
    </Box>
  );
};

PDFViewerFailureState.propTypes = {
  error: PropTypes.instanceOf(Error),
}

export default PDFViewerFailureState;
