import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ButtonBase, SvgIcon } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { __Context as SidebarContext } from '../Sidebar';
import SidebarTooltip from '../SidebarTooltip';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(2),
      overflow: 'hidden',
    },
    button: {
      width: '100%',
      justifyContent: 'left',
      color: theme.palette.grey[600],
      borderRadius: theme.shape.borderRadius,
    },
    icon: {
      flexShrink: 0,
      margin: theme.spacing(3, 4),
      transition: theme.transitions.create(['transform']),
      transform: ({ expanded }) => {
        return expanded ? 'rotateZ(180deg)' : 'rotateZ(0deg)';
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
        <SidebarTooltip title={TEXT}>
          <SvgIcon className={classes.icon}>
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12" />
                <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12" />
              </g>
            </g>
          </SvgIcon>
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
