import { xorBy, isFunction } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { fade } from '@astral-frontend/core';
import {
  ListItem,
  FlexContainer,
  CircularProgress,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import {
  DataListContext,
  DataListItemContext,
} from '@astral-frontend/data-list';

import TableTemplatedDataListItemDefaultSelector from './TableTemplatedDataListItemDefaultSelector';

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
      position: 'relative',
      display: 'grid',
      minHeight: '70px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      padding: theme.spacing(4, 0),
      borderWidth: theme.spacing(0, 0, 0, 1),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.gray[800],
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[1],
      },
    },
    highlighted: {
      animation: `$highlight 3500ms ${theme.transitions.easing.easeInOut}`,
    },
    circularProgress: {
      position: 'absolute',
      marginLeft: '5px',
    },
    selector: {
      marginRight: 0,
    },
  }),
  { name: 'TableTemplatedDataListItem' },
);

const TableTemplatedDataListItem = ({
  className,
  Icon,
  Selector,
  children,
  component,
  percentCompleted,
  selectionDisabled,
  ...props
}) => {
  const classes = useStyles();
  const {
    selectedItems,
    setSelectedItems,
    disableSelect,
    lastViewedItem,
    setLastViewedItem,
  } = React.useContext(DataListContext);
  const { data } = React.useContext(DataListItemContext);
  const [hovered, setHovered] = React.useState(false);
  const checked = React.useMemo(() => {
    return Boolean(
      selectedItems.find(selectedItem => selectedItem.id === data.id),
    );
  }, [selectedItems]);
  const loading = React.useMemo(() => {
    return Boolean(percentCompleted < 100);
  }, [percentCompleted]);
  const selectorVisible = React.useMemo(() => {
    return !loading && ((!disableSelect && hovered) || checked);
  }, [loading, disableSelect, hovered, checked]);
  const highlighted = React.useMemo(() => {
    return data.id === lastViewedItem?.id;
  }, [data.id, lastViewedItem?.id]);

  const handleClick = React.useCallback(() => {
    if (isFunction(setLastViewedItem)) {
      setLastViewedItem(data);
    }
  }, [data]);

  const handleChangeClick = React.useCallback(
    event => {
      event.stopPropagation();
      event.preventDefault();

      setSelectedItems(prevSelectedItems => {
        return xorBy(prevSelectedItems, [data], 'id');
      });
    },
    [setSelectedItems, data],
  );

  const handleListItemMouseEnter = React.useCallback(() => {
    setHovered(true);
  }, [setHovered]);

  const handleListItemMouseLeave = React.useCallback(() => {
    setHovered(false);
  }, [setHovered]);

  const handleAnimationEnd = React.useCallback(event => {
    const [, animationName] = event.animationName.split('-');

    if (animationName === 'highlight' && isFunction(setLastViewedItem)) {
      setLastViewedItem(null);
    }
  }, []);

  return (
    <ListItem
      className={cn(classes.root, className, {
        [classes.highlighted]: highlighted,
      })}
      component={component}
      onMouseEnter={handleListItemMouseEnter}
      onMouseLeave={handleListItemMouseLeave}
      onAnimationEnd={handleAnimationEnd}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <CircularProgress
          className={classes.circularProgress}
          variant={percentCompleted === 0 ? 'indeterminate' : 'static'}
          value={percentCompleted}
        />
      )}
      <FlexContainer justifyContent="center">
        {selectorVisible ? (
          <Selector
            className={classes.selector}
            checked={checked}
            disabled={selectionDisabled}
            onChange={handleChangeClick}
          />
        ) : (
          <Icon />
        )}
      </FlexContainer>
      {children}
    </ListItem>
  );
};

TableTemplatedDataListItem.defaultProps = {
  component: 'div',
  className: null,
  disableGutters: true,
  selectionDisabled: false,
  button: false,
  Icon: () => <div />,
  Selector: TableTemplatedDataListItemDefaultSelector,
  percentCompleted: 100,
};

TableTemplatedDataListItem.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  className: PropTypes.string,
  selectionDisabled: PropTypes.bool,
  disableGutters: PropTypes.bool,
  button: PropTypes.bool,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  ).isRequired,
  Icon: PropTypes.func,
  Selector: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  percentCompleted: PropTypes.number,
};

export default TableTemplatedDataListItem;
