import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  ButtonBase,
  MenuItem,
  Paper,
  ClickAwayListener,
  FlexContainer,
  ContentState,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import FlatTemplatedDataList from '../../../../widgets/flat-templated-data-list';

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
  currentOrganizationName,
  addLinkHref,
  addLinkText,
  ...props
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleTogglerButtonClick = () => {
    setOpen(prevValue => !prevValue);
  };
  const handleClickAwayListenerClickAway = () => {
    setOpen(false);
  };

  return (
    <FlexContainer
      {...props}
      justifyContent="flex-end"
      className={cn(classes.root, className)}
    >
      <ContentState loading={loading} error={error}>
        <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
          <FlexContainer direction="column" style={{ position: 'relative' }}>
            <OrganizationSelectorCurrentOrganization
              name={currentOrganizationName}
              onClick={handleTogglerButtonClick}
            />
            <ButtonBase onClick={handleTogglerButtonClick}>
              <Collapse in={open} className={classes.collapse}>
                <Paper className={classes.popperPaper}>
                  <FlatTemplatedDataList
                    {...DataListProps}
                    ListItemComponent={ListItemComponent}
                    EmptyStateComponent={
                      OrganizationSelectorEmptyStateComponent
                    }
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
};

OrganizationSelector.propTypes = {
  DataListProps: PropTypes.shape({
    dataQueryResult: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.instanceOf(Error),
      items: PropTypes.array,
    }).isRequired,
  }).isRequired,
  ListItemComponent: PropTypes.func.isRequired,
  addLinkHref: PropTypes.string,
  addLinkText: PropTypes.string,
  className: PropTypes.string,
  currentOrganizationName: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Error),
  loading: PropTypes.bool.isRequired,
  showAddButton: PropTypes.bool.isRequired,
};

export default OrganizationSelector;
