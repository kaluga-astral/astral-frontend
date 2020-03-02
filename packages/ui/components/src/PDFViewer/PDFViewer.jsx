import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import ContentState from '../ContentState';
import PDFViewerFailureState from './PDFViewerFailureState';

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
  error: externalError,
  data,
  className,
  component: Component,
  ...props
}) => {
  const classes = useStyles();
  const [internalLoading, setInternalLoading] = React.useState(true);
  const [internalError, setInternalError] = React.useState(null);
  const handleLoad = () => {
    setInternalLoading(false);
  };
  const loading = exteralLoading || internalLoading;
  const error = externalError || internalError;

  console.log({ loading, error });

  React.useEffect(() => {
    setInternalLoading(true);
    fetch(data).then(response => {
      setInternalLoading(false);
      if (response.ok) {
        setInternalError(null);
      } else {
        setInternalError(new Error(response.statusText));
      }
    });
  }, []);

  return (
    <Component className={cn(classes.root, className)} {...props}>
      <ContentState
        loading={loading}
        error={error}
        FailureStateComponent={PDFViewerFailureState}
      >
        <object
          className={classes.object}
          type="application/pdf"
          aria-label="Просмотр PDF"
          data={data}
          onLoad={handleLoad}
        />
      </ContentState>
    </Component>
  );
};

PDFViewer.defaultProps = {
  className: null,
  error: null,
  loading: false,
  component: 'div',
};

PDFViewer.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  error: PropTypes.instanceOf(Error),
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired,
  loading: PropTypes.bool,
};

export default PDFViewer;
