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

const PDFViewer = ({
  loading: exteralLoading,
  className,
  component: Component,
  data,
  ...props
}) => {
  const classes = useStyles();
  const [internalLoading, setInternalLoading] = React.useState(true);
  const handleLoad = () => {
    setInternalLoading(false);
  };
  const loading = exteralLoading && internalLoading;

  return (
    <Component className={cn(classes.root, className)} {...props}>
      {loading && <Placeholder state="loading" />}
      <object
        className={classes.object}
        type="application/pdf"
        aria-label="Просмотр PDF"
        data={data}
        onLoad={handleLoad}
      />
    </Component>
  );
};

PDFViewer.defaultProps = {
  className: null,
  loading: false,
  component: 'div',
};

PDFViewer.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
  loading: PropTypes.bool,
};

export default PDFViewer;
