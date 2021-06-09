import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

import Box from '../Box';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.primary.light}`,
      wordBreak: 'break-all',
      userSelect: 'none',
    },
  }),
  { name: 'SlideModalHeader' },
);

export const SlideModalHeader = ({ className, children }) => {
  const classes = useStyles();

  return (
    <Box
      className={cn(classes.root, className)}
      p={4}
      display="flex"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

SlideModalHeader.defaultProps = {
  className: null,
};

SlideModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SlideModalHeader;
