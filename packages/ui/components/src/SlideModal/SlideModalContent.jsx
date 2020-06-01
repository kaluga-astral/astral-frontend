import React from 'react';

import Box from '../Box';

export const SlideModalContent = props => {
  return (
    <Box
      p={4}
      flexGrow={1}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      {...props}
    />
  );
};

export default SlideModalContent;
