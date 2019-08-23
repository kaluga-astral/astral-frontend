import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  {
    root: {
      marginTop: '20px',
    },
    content: {
      display: 'flex',
    },
    title: {
      margin: '0 0 5px 0',
      fontSize: '14px',
      color: '#1d3f66', // FIXME: use colors from theme
    },
  },
  { name: 'FormGridRow' },
);

const FormGridRow = ({
  children, title, className, ...props
}) => {
  const classes = useStyles();

  return (
    <div {...props} className={cn(classes.root, className)}>
      {title && <h4 className={classes.title}>{title}</h4>}
      <div className={classes.content}>{children}</div>
    </div>
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
