import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import IconButton from '../../IconButton';
import Fade from '../../Fade';
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
      maxHeight: '325px',
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
  // const handleClickAwayListenerClickAway = () => {
  //   setOpen(false);
  // };

  return (
    <FlexContainer direction="column" className={classes.root} {...props}>
      <IconButton
        disabled={disabled}
        className={cn(classes.iconButton, { [classes.iconButtonActive]: open })}
        onClick={handleTogglerButtonClick}
      >
        <Icon />
      </IconButton>
      {open && (
        <Popper
          transition
          placement="bottom-end"
          open={open}
          anchorEl={ref.current}
          container={ref.current}
          className={classes.popper}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper className={classes.paper}>{children}</Paper>
              {/* <ClickAwayListener onClickAway={handleClickAwayListenerClickAway}>
                <Paper className={classes.paper}>{children}</Paper>
              </ClickAwayListener> */}
            </Fade>
          )}
        </Popper>
      )}
    </FlexContainer>
  );
};

SearchInputFilter.propTypes = {
  Icon: PropTypes.any,
  children: PropTypes.any,
  disabled: PropTypes.any,
};

export default SearchInputFilter;
