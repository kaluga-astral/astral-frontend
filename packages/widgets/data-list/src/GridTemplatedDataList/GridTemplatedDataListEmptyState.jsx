import PropTypes from 'prop-types';
import React from 'react';
import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      userSelect: 'none',
    },
    content: {
      maxWidth: '300px',
    },
    illustration: {
      height: '200px',
      marginBottom: theme.spacing(5),
    },
    text: {
      color: theme.palette.gray[600],
      textAlign: 'center',
      height: '2em',
    },
  }),
  { name: 'GridTemplatedDataListEmptyState' },
);

const GridTemplatedDataListEmptyState = ({ text, IllustrationComponent }) => {
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
        {IllustrationComponent && (
          <IllustrationComponent className={classes.illustration} />
        )}
        <div className={classes.text}>{text}</div>
      </FlexContainer>
    </FlexContainer>
  );
};

GridTemplatedDataListEmptyState.defaultProps = {
  text: 'Список пуст',
  IllustrationComponent: null,
};

GridTemplatedDataListEmptyState.propTypes = {
  text: PropTypes.string,
  IllustrationComponent: PropTypes.func,
};

export default GridTemplatedDataListEmptyState;
