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
    <div style={{ height: contain && 600, position: 'relative' }} ref={containerRef}>
      <button type="button" onClick={handleOpen}>Open modal</button>
      <ThemeProvider theme={new AstralEDOTheme()}>
        {containerRef.current && <SlideModal open={open} size={size} container={containerRef.current} onClose={handleClose}>
          <SlideModal.Title>
            Title
          </SlideModal.Title>
          <SlideModal.Content>
            Content
          </SlideModal.Content>
          <SlideModal.Footer>
            footer
          </SlideModal.Footer>
        </SlideModal>}
      </ThemeProvider>
    </div>
  );
};

export default SlideModalExample;
