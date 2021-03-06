import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import IconButton from '../../IconButton';
import Paper from '../../Paper';
import FlexContainer from '../../FlexContainer';
import ClickAwayListener from '../../ClickAwayListener';
import Popper from '../../Popper';
import SearchInputContext from '../SearchInputContext';

const useStyles = makeStyles(
  theme => ({
    root: {},
    iconButton: {
      color: theme.palette.gray[500],
    },
    iconButtonActive: {
      color: theme.palette.primary.main,
    },
    popper: {
      width: '100%',
      zIndex: 15,
      marginTop: '5px',
    },
    paper: {
      maxWidth: '300px',
      overflowY: 'auto',
      boxShadow: theme.shadows[2],
    },
  }),
  { name: 'SearchInputFilter' },
);

const SearchInputFilter = ({ disabled, Icon, children, ...props }) => {
  const classes = useStyles();
  const { ref } = React.useContext(SearchInputContext);
  const [open, setOpen] = React.useState(false);
  const handleTogglerButtonClick = () => {
    setOpen(prevValue => !prevValue);
  };
  const handleClickAwayListenerClickAway = () => {
    setOpen(false);
  };

  return (
    <FlexContainer direction="column" className={classes.root} {...props}>
      <IconButton
        disabled={disabled}
        className={cn(classes.iconButton, {
          [classes.iconButtonActive]: open,
        })}
        onClick={handleTogglerButtonClick}
      >
        <Icon />
      </IconButton>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={ref.current}
        container={ref.current}
        className={classes.popper}
      >
        <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
          <Paper className={classes.paper}>{children}</Paper>
        </ClickAwayListener>
      </Popper>
    </FlexContainer>
  );
};

SearchInputFilter.defaultProps = {
  disabled: false,
};

SearchInputFilter.propTypes = {
  Icon: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default SearchInputFilter;
