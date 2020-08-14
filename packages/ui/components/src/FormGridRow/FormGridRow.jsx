import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import Box from '../Box';

const useStyles = makeStyles(
  theme => ({
    root: {
      '&:not(:last-child)': {
        marginBottom: theme.spacing(5),
      },
    },
    content: {
      display: 'flex',
    },
    title: {
      margin: theme.spacing(0, 0, 4, 0),
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.grey[600],
    },
  }),
  { name: 'FormGridRow' },
);

const FormGridRow = ({ children, title, className, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={cn(classes.root, className)} {...props}>
      {title && <h4 className={classes.title}>{title}</h4>}
      <div className={classes.content}>{children}</div>
    </Box>
  );
};

FormGridRow.defaultProps = {
  title: null,
  className: null,
};

FormGridRow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FormGridRow;
