import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { fade } from '@astral-frontend/core';
import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import {
  DataListContext,
  DataListItemContext,
} from '@astral-frontend/data-list';

const useStyles = makeStyles(
  theme => ({
    '@keyframes highlight': {
      '0%': {
        backgroundColor: fade(theme.palette.primary.light, 0.5),
      },
      '100%': {
        backgroundColor: theme.palette.common.white,
      },
    },
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
    highlighted: {
      animation: `$highlight 3500ms ${theme.transitions.easing.easeInOut}`,
    },
  }),
  { name: 'TableTemplatedDataListRowActions' },
);

export const TableTemplatedDataListRowActions = ({
  className,
  children,
  ...props
}) => {
  const classes = useStyles();
  const { lastViewedItem } = React.useContext(DataListContext);
  const { data } = React.useContext(DataListItemContext);
  const highlighted = React.useMemo(() => {
    return data.id === lastViewedItem?.id;
  }, [data.id, lastViewedItem?.id]);

  return (
    <FlexContainer
      alignItems="center"
      className={cn(className, classes.root, {
        [classes.highlighted]: highlighted,
      })}
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
