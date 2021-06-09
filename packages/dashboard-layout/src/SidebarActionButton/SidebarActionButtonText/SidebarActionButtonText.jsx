import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

import { __Context as SidebarContext } from '../../Sidebar';

const useStyles = makeStyles(
  theme => ({
    root: {
      textAlign: 'left',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontWeight: theme.typography.fontWeightBold,
      opacity: ({ expanded }) => (expanded ? 1 : 0),
      pointerEvents: ({ expanded }) => (expanded ? 'auto' : 'none'),
      transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
  { name: 'DashboardLayoutActionButtonText' },
);

const DashboardLayoutActionButtonText = ({ text }) => {
  const { expanded } = React.useContext(SidebarContext);
  const classes = useStyles({ expanded });

  return <div className={classes.root}>{text}</div>;
};

DashboardLayoutActionButtonText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DashboardLayoutActionButtonText;
