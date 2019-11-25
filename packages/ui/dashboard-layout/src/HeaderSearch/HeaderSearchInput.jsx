import React from 'react';

import { InputBase } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '100%',
    },
    input: {
      padding: '15px 15px 15px 60px',
      borderRadius: `${theme.shape.borderRadius}px`,
      backgroundColor: theme.palette.grey[100],
      lineHeight: theme.typography.pxToRem(20),
      fontSize: theme.typography.pxToRem(14),
    },
  }),
  {
    name: 'HeaderSearchInput',
  },
);

const HeaderSearchInput = props => {
  const classes = useStyles();

  return <InputBase classes={classes} {...props} />;
};

export default HeaderSearchInput;
