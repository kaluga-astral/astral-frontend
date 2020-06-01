import React from 'react';

import SvgIcon from '../SvgIcon';
import IconButton from '../IconButton';

export const SlideModalHeaderBackButton = props => {
  return (
    <IconButton {...props}>
      <SvgIcon>
        <path d="M0 0h24v24H0z" fill="none" />
        <path opacity="0.5" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </SvgIcon>
    </IconButton>
  );
};

export default SlideModalHeaderBackButton;
