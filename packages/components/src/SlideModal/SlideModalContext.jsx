import React from 'react';

export const SlideModalContext = React.createContext();

export const useSlideModalContext = () => {
  return React.useContext(SlideModalContext);
};

export default SlideModalContext;
