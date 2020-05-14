import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ArrowRightIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

import Box from '../Box';
import FlexContainer from '../FlexContainer';
import Typography from '../Typography';
import IconButton from '../IconButton';
import { useSlideModalContext } from './SlideModalContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.primary.light}`,
      wordBreak: 'break-all',
      userSelect: 'none',
    },
    title: {
      marginLeft: theme.spacing(3),
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  { name: 'SlideModalTitle' },
);

export const SlideModalTitle = ({ className, title }) => {
  const classes = useStyles();
  const { close } = useSlideModalContext();

  const handleIconButtonClick = () => {
    close();
  };

  return (
    <Box
      p={[4, 3]}
      className={cn(classes.root, className)}
      component={FlexContainer}
      alignItems="center"
    >
      <IconButton onClick={handleIconButtonClick}>
        <ArrowRightIcon />
      </IconButton>
      <Typography variant="subtitle1" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
};

SlideModalTitle.defaultProps = {
  className: null,
};

SlideModalTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SlideModalTitle;
