import React from 'react';
import { List, ListItem, ListItemText } from '@astral-frontend/core';
import { isSameDay } from 'date-fns';

const isSameRange = (first, second) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }
  return false;
};

const DefinedRanges = ({ ranges, setRange, selectedRange }) => {
  return (
    <List>
      {ranges.map((range, idx) => (
        <ListItem button key={idx} onClick={() => setRange(range)}>
          <ListItemText
            primaryTypographyProps={{
              variant: 'body2',
              style: {
                fontWeight: isSameRange(range, selectedRange)
                  ? 'bold'
                  : 'normal',
              },
            }}
          >
            {range.label}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default DefinedRanges;
