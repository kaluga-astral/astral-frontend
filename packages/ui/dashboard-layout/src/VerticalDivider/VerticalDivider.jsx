import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => ({
  root: {
    borderLeft: `1px solid ${theme.palette.primary.light}`,
    margin: theme.spacing(2, 4),
  },
}));

const VerticalDivider = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default VerticalDivider;
