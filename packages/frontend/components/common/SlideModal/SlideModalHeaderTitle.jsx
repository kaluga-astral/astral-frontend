import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import Box from '../Box';
import Typography from '../Typography';

const useStyles = makeStyles(
  theme => ({
    root: {},
    text: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  { name: 'SlideModalHeader' },
);

export const SlideModalHeaderTitle = ({ text, ...props }) => {
  const classes = useStyles();

  return (
    <Box flexGrow={1} {...props}>
      <Typography variant="subtitle1" className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
};

SlideModalHeaderTitle.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default SlideModalHeaderTitle;
