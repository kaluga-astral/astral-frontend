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
    illustration: {
      height: '200px',
      marginBottom: theme.spacing(5),
    },
    text: {
      color: theme.palette.gray[600],
      textAlign: 'center',
      height: '2em',
    },
    action: {
      marginTop: theme.spacing(3),
    },
  }),
  { name: 'TableTemplatedDataListEmptyState' },
);

const TableTemplatedDataListEmptyState = ({
  title,
  text,
  IllustrationComponent,
  ActionComponent,
}) => {
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
      >
        {IllustrationComponent && (
          <IllustrationComponent className={classes.illustration} />
        )}
        {title && <h2>{title}</h2>}
        <div className={classes.text}>{text}</div>
        {ActionComponent && <ActionComponent className={classes.action} />}
      </FlexContainer>
    </FlexContainer>
  );
};

TableTemplatedDataListEmptyState.defaultProps = {
  text: 'Список пуст',
  title: null,
  IllustrationComponent: null,
  ActionComponent: null,
};

TableTemplatedDataListEmptyState.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  IllustrationComponent: PropTypes.func,
  ActionComponent: PropTypes.func,
};

export default TableTemplatedDataListEmptyState;
