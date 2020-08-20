import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import ContentState from '../ContentState';
import Box from '../Box';
import PDFViewerFailureState from './PDFViewerFailureState';

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.gray[750],
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
  ...props
}) => {
  const classes = useStyles();
  const [internalLoading, setInternalLoading] = React.useState(true);
  const [internalError, setInternalError] = React.useState(null);
  const handleLoad = () => {
    setInternalLoading(false);
  };
  const loading = exteralLoading && internalLoading;
  const error = externalError || internalError;

  React.useEffect(() => {
    if (exteralLoading === false && externalError === null && !data) {
      setInternalError(new Error('`data` should be a valid url'));
    }
    if (exteralLoading === false && externalError === null && data) {
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
  const Children = React.useMemo(
    () => () => {
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
    },
    [data],
  );

  return (
    <Box className={cn(classes.root, className)} {...props}>
      <ContentState
        loading={loading}
        error={error}
        FailureStateComponent={PDFViewerFailureState}
      >
        <Children />
      </ContentState>
    </Box>
  );
};

PDFViewer.defaultProps = {
  className: null,
  error: null,
  loading: false,
  data: undefined,
};

PDFViewer.propTypes = {
  error: PropTypes.instanceOf(Error),
  className: PropTypes.string,
  data: PropTypes.string,
  loading: PropTypes.bool,
};

export default PDFViewer;
