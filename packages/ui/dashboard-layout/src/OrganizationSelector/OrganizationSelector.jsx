import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles } from '@astral-frontend/styles';
import {
  OrganizationIcon,
  OrganizationListIcon,
  ArrowIcon,
} from '@astral-frontend/icons';

import {
  Avatar,
  Popper,
  Paper,
  Fade,
  MenuItem,
} from '@astral-frontend/components';

const COMPANYS = [
  'ОАО “Фантики и Ребята”',
  'ОАО “Компания друзей”',
  'ЗАО “Любители зимней рыбалки”',
];

const DashboardLayoutCurrentOrganizationSelector = ({ classes, className }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(COMPANYS[0]);

  return (
    <div className={cn(classes.root, className)}>
      <div style={{ maxWidth: '160px' }}>{value}</div>
      <Avatar className={cn(classes.companyAvatar, className)}>
        <OrganizationListIcon
          className={cn(classes.companyListIcon, className)}
          viewBox="0 0 16 16"
        />
      </Avatar>
      <ArrowIcon
        aria-haspopup="true"
        className={
          !open
            ? cn(classes.arrayIcon, className)
            : cn(classes.openArrayIcon, className)
        }
        viewBox="0 0 12 6"
        onClick={(e) => {
          setOpen(prevOpen => !prevOpen);
          setAnchorEl(e.target);
        }}
      />
      {COMPANYS.length > 1 ? (
        <Popper open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className={cn(classes.popper, className)}>
                <div className={cn(classes.popperContent, className)}>
                  <MenuItem
                    className={cn(classes.popperContentMenuItem, className)}
                    onClick={() => {
                      setAnchorEl(null);
                      setOpen(prevOpen => !prevOpen);
                      setValue(COMPANYS[0]);
                    }}
                  >
                    <div
                      className={cn(classes.popperContentCompanys, className)}
                    >
                      <OrganizationIcon
                        className={cn(classes.popperContentIcon, className)}
                        viewBox="0 0 20 18"
                      />
                      <div
                        className={cn(classes.popperContentLabel, className)}
                      >
                        {COMPANYS[0]}
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem
                    className={cn(classes.popperContentMenuItem, className)}
                    onClick={() => {
                      setAnchorEl(null);
                      setOpen(prevOpen => !prevOpen);
                      setValue(COMPANYS[1]);
                    }}
                  >
                    <div
                      className={cn(classes.popperContentCompanys, className)}
                    >
                      <OrganizationIcon
                        className={cn(classes.popperContentIcon, className)}
                        viewBox="0 0 20 18"
                      />
                      <div
                        className={cn(classes.popperContentLabel, className)}
                      >
                        {COMPANYS[1]}
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem
                    className={cn(classes.popperContentMenuItem, className)}
                    onClick={() => {
                      setAnchorEl(null);
                      setOpen(prevOpen => !prevOpen);
                      setValue(COMPANYS[2]);
                    }}
                  >
                    <div
                      className={cn(classes.popperContentCompanys, className)}
                    >
                      <OrganizationIcon
                        className={cn(classes.popperContentIcon, className)}
                        viewBox="0 0 20 18"
                      />
                      <div
                        className={cn(classes.popperContentLabel, className)}
                      >
                        {COMPANYS[2]}
                      </div>
                    </div>
                  </MenuItem>
                  <div className={cn(classes.popperContentCompanys, className)}>
                    <button
                      type="button"
                      className={cn(
                        classes.addingPopperContentButton,
                        className,
                      )}
                    >
                      + Добавить компанию
                    </button>
                  </div>
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
      ) : (
        <Popper open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                className={cn(classes.popper, className)}
                onClick={() => {
                  setOpen(prevOpen => !prevOpen);
                }}
              >
                <div className={cn(classes.emptyPopperContent, className)}>
                  <OrganizationIcon
                    className={cn(classes.emptyPopperContentIcon, className)}
                    viewBox="0 0 19 19"
                  />
                  <p className={cn(classes.popperContentText, className)}>
                    Мы не нашли других ваших компаний. Добавьте их в систему
                    чтобы удобно отслеживать документооборот!
                  </p>
                  <button
                    type="button"
                    className={cn(classes.popperContentButton, className)}
                  >
                    Добавить компанию
                  </button>
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
      )}
    </div>
  );
};

export default withStyles(
  () => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '270px',
    },
    companyAvatar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      backgroundColor: '#4E30C7',
    },
    companyLabel: {
      marginLeft: '5px',
      color: '#072D57',
      fontSize: '14px',
    },
    companyListIcon: {
      width: '16px',
      height: '16px',
    },
    arrayIcon: {
      width: '12px',
      height: '6px',
      marginRight: '10px',
    },
    openArrayIcon: {
      width: '12px',
      height: '6px',
      marginRight: '10px',
      transform: 'rotate(180deg)',
    },
    menu: {
      marginTop: '59px',
      boxShadow: '0px 4px 15px red',
      border: '2px solid green',
      marginRight: '10px',
    },
    popper: {
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.09)',
      marginTop: '34px',
    },
    popperContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '270px',
      paddingTop: '7px',
    },
    emptyPopperContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '270px',
      height: '252px',
    },
    popperContentCompanys: {
      display: 'flex',
    },
    popperContentMenuItem: {
      margin: '0',
      padding: '7px 0 5px 15px',
    },
    popperContentLabel: {
      fontSize: '12px',
      margin: '0',
      padding: '0 0 0 15px',
      color: '#072D57',
      maxWidth: '260px',
    },
    popperContentIcon: {
      width: '20px',
      height: '18px',
      fill: '#6746EB',
    },
    emptyPopperContentIcon: {
      width: '74px',
      height: '66px',
      fill: 'rgba(29, 63, 102, 0.45)',
    },
    popperContentText: {
      color: 'rgba(29, 63, 102, 0.62)',
      padding: '0 23px 0 23px',
      fontSize: '12px',
      textAlign: 'center',
    },
    popperContentButton: {
      color: '#6746EB',
      fontSize: '10px',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      padding: '0',
    },
    addingPopperContentButton: {
      color: '#6746EB',
      fontSize: '10px',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      padding: '0 0 15px 15px',
    },
  }),
  { name: 'DashboardLayoutCurrentOrganizationSelector' },
)(DashboardLayoutCurrentOrganizationSelector);

DashboardLayoutCurrentOrganizationSelector.defaultProps = {
  className: null,
};

DashboardLayoutCurrentOrganizationSelector.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};
