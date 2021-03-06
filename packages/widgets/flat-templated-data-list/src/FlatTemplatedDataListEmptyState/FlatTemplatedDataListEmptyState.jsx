import cn from 'classnames';
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
  { name: 'FlatTemplatedDataListEmptyState' },
);

const FlatTemplatedDataListEmptyState = ({
  className,
  text,
  IllustrationComponent,
}) => {
  const classes = useStyles();

  return (
    <FlexContainer
      className={cn(className, classes.root)}
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

FlatTemplatedDataListEmptyState.defaultProps = {
  className: null,
  text: 'Список пуст',
  IllustrationComponent: null,
};

FlatTemplatedDataListEmptyState.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  IllustrationComponent: PropTypes.func,
};

export default FlatTemplatedDataListEmptyState;
