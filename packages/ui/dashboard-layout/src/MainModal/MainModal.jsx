import PropTypes from 'prop-types';
import React from 'react';
import { Drawer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { __Context as MainContext } from '../Main';
import MainModalContext from './MainModalContext';

const useStyles = makeStyles(() => {
  const getWidth = ({ size }) => {
    switch (size) {
      case 'small':
        return '40%';
      case 'medium':
        return '60%';
      case 'large':
        return '80%';
      default:
        return null;
    }
  };

  return {
    paper: {
      width: getWidth,
    },
  };
});

const DashboardLayoutMainModal = (props) => {
  const { onClose } = props;
  const classes = useStyles(props);
  const { ref } = React.useContext(MainContext);

  return (
    <MainModalContext.Provider value={{ onClose }}>
      <Drawer
        {...props}
        classes={classes}
        PaperProps={{ style: { position: 'absolute' } }}
        ModalProps={{
          hideBackdrop: true,
          container: ref && ref.current,
          style: { position: 'absolute' },
        }}
        variant="temporary"
        anchor="right"
      />
    </MainModalContext.Provider>
  );
};

DashboardLayoutMainModal.defaultProps = {
  size: 'medium',
};

DashboardLayoutMainModal.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClose: PropTypes.func.isRequired,
};

export default DashboardLayoutMainModal;
