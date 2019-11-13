import React from 'react';

import { __Context as LayoutContext } from '../Layout';

const useMainModal = ({ key, beforeClose }) => {
  const { currentMainModalKey, setCurrentMainModalKey } = React.useContext(
    LayoutContext,
  );
  const open = key === currentMainModalKey;
  const onClose = () => {
    if (beforeClose) {
      beforeClose();
    }
    setCurrentMainModalKey(null);
  };
  const setOpen = value => {
    if (value) {
      setCurrentMainModalKey(key);
    } else {
      setCurrentMainModalKey(null);
    }
  };

  return [{ open, onClose }, setOpen];
};

export default useMainModal;
