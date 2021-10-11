import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ButtonBase,
  ClickAwayListener,
  Collapse,
  ContentState,
  FlexContainer,
  MenuItem,
  Paper,
  Tooltip,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import FlatTemplatedDataList from '@astral-frontend/flat-templated-data-list';

import OrganizationSelectorCurrentOrganization from './OrganizationSelectorCurrentOrganization';
import OrganizationSelectorEmptyStateComponent from './OrganizationSelectorEmptyStateComponent';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      flexShrink: 0,
    },
    popperPaper: {
      maxHeight: '325px',
      maxWidth: '300px',
      overflowY: 'auto',
      boxShadow: theme.shadows[2],
      paddingTop: '10px',
    },
    popperHint: {
      fontSize: '12px',
    },
    collapse: {
      position: 'absolute',
      top: '100%',
      right: 0,
      zIndex: theme.zIndex.appBar,
    },
    addButton: {
      width: '100%',
      position: 'sticky',
      bottom: 0,
      backgroundColor: theme.palette.common.white,
      marginBottom: '6px',
    },
  }),
  { name: 'OrganizationSelector' },
);

const OrganizationSelector = ({
  className,
  DataListProps,
  ListItemComponent,
  showAddButton,
  error,
  loading,
  disabled,
  currentOrganizationName,
  addLinkHref,
  addLinkText,
  ...props
}) => {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const handleTogglerButtonClick = () => {
    setOpen(prevValue => !prevValue);
  };
  const handleClickAwayListenerClickAway = () => {
    setOpen(false);
  };
  const defaultTooltipState =
    location.pathname === '/' ||
    location.pathname.includes('registration-requests')
      ? 'Выберите организацию'
      : 'Загрузка организации';

  return (
    <FlexContainer
      {...props}
      justifyContent="flex-end"
      className={cn(classes.root, className)}
    >
      <ContentState loading={loading} error={error}>
        <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
          <FlexContainer>
            <Tooltip
              className={classes.popperHint}
              placement="left"
              title={currentOrganizationName ?? defaultTooltipState}
            >
              <OrganizationSelectorCurrentOrganization
                name={currentOrganizationName}
                disabled={disabled}
                onClick={handleTogglerButtonClick}
                open={open}
              />
            </Tooltip>
            <ButtonBase disabled={disabled} onClick={handleTogglerButtonClick}>
              <Collapse in={open} className={classes.collapse}>
                <Paper className={classes.popperPaper}>
                  <FlatTemplatedDataList
                    {...DataListProps}
                    ListItemComponent={ListItemComponent}
                    EmptyStateComponent={EmptyStateComponentProps => (
                      <OrganizationSelectorEmptyStateComponent
                        {...EmptyStateComponentProps}
                        addLinkHref={addLinkHref}
                      />
                    )}
                  />
                  {showAddButton && (
                    <MenuItem
                      className={classes.addButton}
                      component={Link}
                      to={addLinkHref}
                    >
                      {addLinkText}
                    </MenuItem>
                  )}
                </Paper>
              </Collapse>
            </ButtonBase>
          </FlexContainer>
        </ClickAwayListener>
      </ContentState>
    </FlexContainer>
  );
};

OrganizationSelector.defaultProps = {
  className: null,
  addLinkHref: null,
  addLinkText: null,
  error: null,
  currentOrganizationName: null,
  disabled: false,
};

OrganizationSelector.propTypes = {
  DataListProps: PropTypes.shape({
    queryResult: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.instanceOf(Error),
      items: PropTypes.arrayOf,
    }).isRequired,
  }).isRequired,
  ListItemComponent: PropTypes.func.isRequired,
  addLinkHref: PropTypes.string,
  addLinkText: PropTypes.string,
  className: PropTypes.string,
  currentOrganizationName: PropTypes.string,
  error: PropTypes.instanceOf(Error),
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  showAddButton: PropTypes.bool.isRequired,
};

export default OrganizationSelector;
