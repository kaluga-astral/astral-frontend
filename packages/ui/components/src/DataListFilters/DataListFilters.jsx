import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@astral-frontend/core';
import DataListFiltersIcon from './DataListFiltersArrowIcon';
import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import { Checkbox } from '@astral-frontend/components';

import {
  IconButton,
  Paper,
  ClickAwayListener,
  Popper,
} from '@astral-frontend/core';

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    icon: {
      fill: theme.palette.gray[500],
      width: 8,
      height: 4,
    },
    iconButtonActive: {
      color: theme.palette.primary.main,
    },
    popper: {
      width: '200px',
      zIndex: 15,
    },
    paper: {
      maxWidth: '200px',
      overflowY: 'auto',
      boxShadow: theme.shadows[2],
    },
  }),
  { name: 'DataListFilters' },
);

const DataListFilters = ({
  filters,
  disabled,
  checked,
  onChange,
  handleDraftsFiltersButtonClick,
  data,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ref = React.useRef();

  const handleClick = React.useCallback(() => {
    setAnchorEl(ref.current);
    setOpen((previousOpen) => !previousOpen);
  }, [ref]);
  const handleClickAwayListenerClickAway = React.useCallback(() => {
    setOpen(false);
  }, [open]);
  const handleClose = React.useCallback(
    (value) => {
      setOpen(false);
      handleDraftsFiltersButtonClick(data, value);
    },
    [open],
  );
  const canBeOpen = React.useMemo(
    () => open && Boolean(anchorEl),
    [open, anchorEl],
  );
  const id = React.useMemo(
    () => (canBeOpen ? 'transition-popper' : undefined),
    [canBeOpen],
  );

  return (
    <FlexContainer direction="row" ref={ref} className={classes.root}>
      <Checkbox
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={classes.select}
      />
      <IconButton
        disabled={disabled}
        aria-describedby={id}
        onClick={handleClick}
        className={classes.iconButton}
      >
        <DataListFiltersIcon className={classes.icon} />
      </IconButton>
      <Popper
        placement="bottom-start"
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        className={classes.popper}
      >
        <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
          <Paper className={classes.paper}>
            {filters.map(({ label, value, key }) => (
              <MenuItem
                className={classes.menuItem}
                onClick={() => handleClose(value)}
                key={key}
                value={value}
              >
                {label}
              </MenuItem>
            ))}
          </Paper>
        </ClickAwayListener>
      </Popper>
    </FlexContainer>
  );
};


DataListFilters.propTypes = {
  filters:PropTypes.arrayOf(PropTypes.shape({})),
  disabled:PropTypes.bool,
  checked:PropTypes.bool,
  onChange: PropTypes.func,
  handleDraftsFiltersButtonClick: PropTypes.func,
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
    selectedItems:PropTypes.arrayOf(PropTypes.shape({})),
  }),

};

export default DataListFilters;
