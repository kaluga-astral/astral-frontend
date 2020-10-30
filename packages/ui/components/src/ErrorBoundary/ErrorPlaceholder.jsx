import React from 'react';

import Button from '../Button';
import Typography from '../Typography';

const ErrorPlaceholder = () => {
  const handleReloadButtonClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <Typography>Что-то пошло не так.</Typography>
      <Button onClick={handleReloadButtonClick}>Обновить страницу</Button>
    </div>
  );
};

export default ErrorPlaceholder;
