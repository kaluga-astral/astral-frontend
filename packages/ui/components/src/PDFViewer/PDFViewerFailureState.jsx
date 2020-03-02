import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import FlexContainer from '../FlexContainer';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      color: theme.palette.common.white,
    },
  }),
  { name: 'PDFViewerFailureState' },
);

const PDFViewerFailureState = () => {
  const classes = useStyles();

  return (
    <FlexContainer
      className={classes.root}
      alignItems="center"
      justifyContent="center"
    >
      Невозможно отобразить документ
    </FlexContainer>
  );
};

export default PDFViewerFailureState;
