/* eslint-disable */
import React, { useState, useRef } from 'react';
import { ThemeProvider } from '@astral-frontend/components';
import { AstralEDOTheme } from '@astral-frontend/themes';

import SlideModal from './SlideModal';

const SlideModalExample = ({ size, contain }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={new AstralEDOTheme()}>
      <div style={{ height: contain && 600, position: 'relative', overflow: 'hidden' }} ref={containerRef}>
        <button type="button" onClick={handleOpen}>Open modal</button>
        <SlideModal open={open} size={size} containerRef={contain ? containerRef : null} onClose={handleClose}>
            <SlideModal.Title>
              Title
            </SlideModal.Title>
            <SlideModal.Content>
              Content
            </SlideModal.Content>
          </SlideModal>
      </div>
    </ThemeProvider>
  );
};

export default SlideModalExample;
