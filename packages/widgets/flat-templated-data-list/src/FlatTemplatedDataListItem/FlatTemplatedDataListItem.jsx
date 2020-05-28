import React from 'react';

import { ListItem, ListItemText } from '@astral-frontend/components';

const FlatTemplatedDataListItem = ({ text, children, ...props }) => {
  return (
    <ListItem disableGutters {...props}>
      <ListItemText>{text}</ListItemText>
      {children}
    </ListItem>
  );
};

export default FlatTemplatedDataListItem;
