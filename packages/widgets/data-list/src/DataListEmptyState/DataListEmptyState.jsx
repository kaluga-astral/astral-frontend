import PropTypes from 'prop-types';
import React from 'react';
import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
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
  { name: 'DataListEmptyState' },
);

const DataListEmptyState = ({ text, Illustration }) => {
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
        {Illustration && <Illustration className={classes.illustration} />}
        <div className={classes.text}>{text}</div>
      </FlexContainer>
    </FlexContainer>
  );
};

DataListEmptyState.defaultProps = {
  text: 'Список пуст',
  Illustration: null,
};

DataListEmptyState.propTypes = {
  text: PropTypes.string,
  Illustration: PropTypes.func,
};

export default DataListEmptyState;
