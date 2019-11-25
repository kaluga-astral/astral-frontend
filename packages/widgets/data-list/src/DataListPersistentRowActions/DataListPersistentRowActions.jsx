import PropTypes from 'prop-types';
import React from 'react';
import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      margin: theme.spacing(1, 0),
      padding: theme.spacing(0, 4),
      borderLeft: `1px solid ${theme.palette.primary.light}`,
    },
  }),
  { name: 'DataListPersistentRowActions' },
);

const DataListPersistentRowActions = ({ children }) => {
  const classes = useStyles();

  return (
    <FlexContainer alignItems="center" className={classes.root}>
      {children}
    </FlexContainer>
  );
};

DataListPersistentRowActions.defaultProps = {};

DataListPersistentRowActions.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DataListPersistentRowActions;
