import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import Placeholder from '../Placeholder';

const useStyles = makeStyles(
  () => ({
    root: {
      backgroundColor: 'rgba(83, 86, 89, 1)',
    },
    object: {
      width: '100%',
      height: '100%',
    },
  }),
  { name: 'PDFViewer' },
);

const PDFViewer = ({ loading: exteralLoading, className, ...props }) => {
  const classes = useStyles();
  const [internalLoading, setInternalLoading] = React.useState(true);
  const handleLoad = () => {
    setInternalLoading(false);
  };
  const loading = exteralLoading && internalLoading;

  return (
    <div className={cn(classes.root, className)}>
      {loading && <Placeholder state="loading" />}
      <object
        {...props}
        className={classes.object}
        type="application/pdf"
        aria-label="Просмотр PDF"
        onLoad={handleLoad}
      />
    </div>
  );
};

PDFViewer.defaultProps = {
  className: null,
  loading: false,
};

PDFViewer.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default PDFViewer;
