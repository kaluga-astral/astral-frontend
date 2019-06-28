/* eslint-disable */
import React, { useState, useRef } from 'react';
import { ThemeProvider } from '@astral-frontend/components';
import { AstralEDOTheme } from '@astral-frontend/themes';

import MainModal from './MainModal';
import MainModalTitle from './MainModalTitle';
import MainModalContent from './MainModalContent';

const MainModalExample = ({ size, contain }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: contain && 800 }} ref={containerRef}>
      <button type="button" onClick={handleOpen}>Open modal</button>
      <ThemeProvider theme={new AstralEDOTheme()}>
        <MainModal open={open} size={size} container={contain ? containerRef.current : null} onClose={handleClose}>
          <MainModalTitle>
              Title
          </MainModalTitle>
          <MainModalContent>
              Content
          </MainModalContent>
        </MainModal>
      </ThemeProvider>
    </div>
  );
};

export default MainModalExample;
