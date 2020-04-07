import PropTypes from 'prop-types';
import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Typography } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

import FlexContainer from '../FlexContainer';
import FlexItem from '../FlexItem';
import IconButton from '../IconButton';
import ArrowLeftThinIcon from './ArrowLeftThinIcon';
import ArrowRightThinIcon from './ArrowRightThinIcon';

const useStyles = makeStyles(theme => ({
  selectorsContainer: {
    flexBasis: 150,
    margin: theme.spacing(0, 5),
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
}));

const Header = ({ date, onClickNext, onClickPrevious }) => {
  const classes = useStyles();

  return (
    <FlexContainer justifyContent="center" alignItems="center">
      <FlexItem
        component={IconButton}
        className={classes.icon}
        size="small"
        onClick={onClickPrevious}
      >
        <ArrowLeftThinIcon className={classes.arrowIcon} />
      </FlexItem>
      <Typography
        variant="subtitle2"
        align="center"
        className={classes.selectorsContainer}
      >
        {format(date, 'LLLL yyyy', { locale: ru })}
      </Typography>
      <FlexItem
        component={IconButton}
        className={classes.icon}
        size="small"
        onClick={onClickNext}
      >
        <ArrowRightThinIcon className={classes.arrowIcon} />
      </FlexItem>
    </FlexContainer>
  );
};

Header.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrevious: PropTypes.func.isRequired,
};

export default Header;
