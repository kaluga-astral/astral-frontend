import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks';

const usePopupStateManager = (...args) => {
  const popupState = usePopupState(...args);

  return {
    popupState,
    trigerState: bindTrigger(popupState),
    menuState: bindMenu(popupState),
  };
};

export default usePopupStateManager;
