import PropTypes from 'prop-types';
import React from 'react';
import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import DataListEmptyStateIllustration from './DataListEmptyStateIllustration';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
    },
    content: {
      maxWidth: '300px',
    },
    illustration: {
      marginBottom: theme.spacing(5),
    },
    text: {
      color: theme.palette.gray[600],
      textAlign: 'center',
    },
  }),
  { name: 'DataListEmptyState' },
);

const DataListEmptyState = ({ text }) => {
  const classes = useStyles();

  return (
    <FlexContainer
      className={classes.root}
      alignItems="center"
      justifyContent="center"
    >
      <FlexContainer
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.content}
      >
        <DataListEmptyStateIllustration className={classes.illustration} />
        <div className={classes.text}>{text}</div>
      </FlexContainer>
    </FlexContainer>
  );
};

DataListEmptyState.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DataListEmptyState;
