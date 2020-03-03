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

  React.useEffect(() => {
    if (data) {
      setInternalLoading(true);
      fetch(data).then(response => {
        setInternalLoading(false);
        if (response.ok) {
          setInternalError(null);
        } else {
          setInternalError(new Error(response.statusText));
        }
      });
    }
  }, [data]);
  const Children = () => {
    if (!data) {
      return null;
    }

    return (
      <object
        className={classes.object}
        type="application/pdf"
        aria-label="Просмотр PDF"
        data={data}
        onLoad={handleLoad}
      />
    );
  };

  return (
    <Component className={cn(classes.root, className)} {...props}>
      <ContentState
        loading={loading}
        error={error}
        FailureStateComponent={PDFViewerFailureState}
      >
        <Children />
      </ContentState>
    </Component>
  );
};

PDFViewer.defaultProps = {
  className: null,
  error: null,
  loading: false,
  component: 'div',
  data: undefined,
};

PDFViewer.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  error: PropTypes.instanceOf(Error),
  className: PropTypes.string,
  data: PropTypes.string,
  loading: PropTypes.bool,
};

export default PDFViewer;
