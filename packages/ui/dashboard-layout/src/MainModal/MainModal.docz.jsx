/* eslint-disable */
import React, { useState } from 'react';
import { ThemeProvider } from '@astral-frontend/components';
import { AstralEDOTheme } from '@astral-frontend/themes';

import MainModal from './index';
import Main from '../Main';
import Header from '../Header';

const MainModalExample = ({ size }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={new AstralEDOTheme()}>
      <Header>Header</Header>
      <Main>
        Main
        <button type="button" onClick={handleOpen}>
          Open modal
        </button>
        <div style={{ height: 500 }} />
        <MainModal open={open} size={size} onClose={handleClose}>
          <MainModal.Title>Title</MainModal.Title>
          <MainModal.Content>Content</MainModal.Content>
        </MainModal>
      </Main>
    </ThemeProvider>
  );
};

export default MainModalExample;
