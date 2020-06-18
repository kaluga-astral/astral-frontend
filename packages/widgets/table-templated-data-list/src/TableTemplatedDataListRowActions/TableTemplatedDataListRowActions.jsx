import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import TableTemplatedDataListContext from '../TableTemplatedDataList/TableTemplatedDataListContext';
import TableTemplatedDataListItemContext from '../TableTemplatedDataList/TableTemplatedDataListItemContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      padding: theme.spacing(0, 4),
      backgroundColor: theme.palette.common.white,
      margin: theme.spacing(1, 0),
      borderLeft: `1px solid ${theme.palette.primary.light}`,
    },
  }),
  { name: 'TableTemplatedDataListRowActions' },
);

const TableTemplatedDataListRowActions = ({
  className,
  children,
  ...props
}) => {
  const classes = useStyles();
  const { rowActionsProvided } = React.useContext(TableTemplatedDataListContext);
  const { setRowActionsVisible } = React.useContext(
    TableTemplatedDataListItemContext,
  );
  const handleRowActionsMouseEnter = () => {
    if (rowActionsProvided) {
      setRowActionsVisible(true);
    }
  };

  const handleRowActionsMouseLeave = () => {
    if (rowActionsProvided) {
      setRowActionsVisible(false);
    }
  };

  return (
    <FlexContainer
      alignItems="center"
      className={cn(className, classes.root)}
      onMouseEnter={handleRowActionsMouseEnter}
      onMouseLeave={handleRowActionsMouseLeave}
      {...props}
    >
      {children}
    </FlexContainer>
  );
};

TableTemplatedDataListRowActions.defaultProps = {
  className: null,
};

TableTemplatedDataListRowActions.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default TableTemplatedDataListRowActions;
