import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

import SvgIcon from '../SvgIcon';
import IconButton from '../IconButton';

const useStyles = makeStyles(
  theme => ({
    root: {
      marginRight: theme.spacing(2),
    },
  }),
  {
    name: 'SlideModalHeaderBackButton',
  },
);

export const SlideModalHeaderBackButton = ({ className, ...props }) => {
  const classes = useStyles();

  return (
    <IconButton className={cn(classes.root, className)} {...props}>
      <SvgIcon>
        <path d="M0 0h24v24H0z" fill="none" />
        <path opacity="0.5" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </SvgIcon>
    </IconButton>
  );
};

SlideModalHeaderBackButton.defaultProps = {
  className: null,
};

SlideModalHeaderBackButton.propTypes = {
  className: PropTypes.string,
};

export default SlideModalHeaderBackButton;
