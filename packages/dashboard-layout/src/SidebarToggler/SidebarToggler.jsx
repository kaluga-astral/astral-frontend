import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase } from '@astral/components';
import { makeStyles } from '@astral/styles';

import { __Context as SidebarContext } from '../Sidebar';
import SidebarTooltip from '../SidebarTooltip';

import SidebarTogglerIcon from './SidebarTogglerIcon';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(2),
      overflow: 'hidden',
    },
    button: {
      width: '100%',
      justifyContent: 'left',
      color: theme.palette.gray[600],
      borderRadius: theme.shape.borderRadius,
    },
    icon: {
      flexShrink: 0,
      margin: theme.spacing(3, 4),
      transition: theme.transitions.create(['transform']),
      transform: ({ expanded }) => {
        return expanded ? 'rotateZ(0deg)' : ' rotateZ(180deg)';
      },
    },
    text: {
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textAlign: 'left',
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      opacity: ({ expanded }) => (expanded ? 1 : 0),
      pointerEvents: ({ expanded }) => (expanded ? 'auto' : 'none'),
      transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    tooltip: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  {
    name: 'SidebarToggler',
  },
);

const TEXT = 'Свернуть меню';

const SidebarToggler = ({ className, ...props }) => {
  const { expanded, toggleExpanded } = React.useContext(SidebarContext);
  const classes = useStyles({ expanded });
  const handleButtonClick = () => {
    toggleExpanded();
  };

  return (
    <div className={cn(classes.root, className)}>
      <ButtonBase
        {...props}
        className={classes.button}
        onClick={handleButtonClick}
      >
        <SidebarTooltip className={classes.tooltip} title={TEXT}>
          <SidebarTogglerIcon className={classes.icon} />
        </SidebarTooltip>
        <div className={classes.text}>{TEXT}</div>
      </ButtonBase>
    </div>
  );
};

SidebarToggler.defaultProps = {
  className: null,
};

SidebarToggler.propTypes = {
  className: PropTypes.string,
};

export default SidebarToggler;
