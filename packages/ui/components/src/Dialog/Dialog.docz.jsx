import React, { useState } from 'react';
import Dialog from './Dialog';
import DialogContent from '../DialogContent';
import DialogTitle from '../DialogTitle';
import DialogActions from '../DialogActions';
import Button from '../Button';

const DialogExample = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <>
      <button type="button" onClick={handleModalOpen}>
        open modal
      </button>
      <Dialog onClose={handleModalClose} open={open}>
        <DialogTitle>TITLE</DialogTitle>
        <DialogContent>CONTENT</DialogContent>
        <DialogActions>
          <Button>Disagree</Button>
          <Button variant="regular">Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogExample;
