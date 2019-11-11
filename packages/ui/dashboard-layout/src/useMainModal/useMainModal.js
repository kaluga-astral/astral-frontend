import React from 'react';
import { __Context as MainContext } from '../Main';

const useMainModal = ({ open, onClose, MainModal }) => {
  const { setMainModal, setMainModalOpen, setMainModalCloseHandler } = React.useContext(
    MainContext,
  );

  React.useEffect(() => {
    setMainModal({ MainModal });
    setMainModalCloseHandler({ action: onClose });
  }, []);
  React.useEffect(() => {
    setMainModalOpen(open);
  }, [open]);
};

export default useMainModal;
