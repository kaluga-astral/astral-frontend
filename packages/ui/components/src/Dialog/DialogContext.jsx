import { createContext } from 'react';

const DialogContext = createContext({
  onClose: null,
});

export default DialogContext;
