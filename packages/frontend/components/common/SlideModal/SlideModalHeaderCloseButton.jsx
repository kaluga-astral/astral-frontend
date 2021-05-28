import React from 'react';

import SvgIcon from '../SvgIcon';
import IconButton from '../IconButton';

import { useSlideModalContext } from './SlideModalContext';

export const SlideModalHeaderCloseButton = props => {
  const { close } = useSlideModalContext();

  const handleIconButtonClick = () => {
    close();
  };

  return (
    <IconButton {...props} onClick={handleIconButtonClick}>
      <SvgIcon>
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          opacity="0.5"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </SvgIcon>
    </IconButton>
  );
};

export default SlideModalHeaderCloseButton;
