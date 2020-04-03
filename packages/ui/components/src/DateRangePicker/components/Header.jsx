import PropTypes from 'prop-types';
import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { makeStyles } from '@astral-frontend/styles';

import FlexContainer from '../../FlexContainer';
import FlexItem from '../../FlexItem';
import IconButton from '../../IconButton';
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

const Header = ({
  date,
  nextDisabled,
  onClickNext,
  onClickPrevious,
  prevDisabled,
}) => {
  const classes = useStyles();

  return (
    <FlexContainer justifyContent="center" alignItems="center">
      <FlexItem
        component={IconButton}
        className={classes.icon}
        size="small"
        disabled={prevDisabled}
        onClick={onClickPrevious}
      >
        <ArrowLeftThinIcon className={classes.arrowIcon} />
      </FlexItem>
      <FlexItem className={classes.selectorsContainer}>
        {format(date, 'LLLL yyyy', { locale: ru })}
      </FlexItem>
      <FlexItem
        component={IconButton}
        className={classes.icon}
        size="small"
        disabled={nextDisabled}
        onClick={onClickNext}
      >
        <ArrowRightThinIcon className={classes.arrowIcon} />
      </FlexItem>
    </FlexContainer>
  );
};

Header.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  nextDisabled: PropTypes.bool.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrevious: PropTypes.func.isRequired,
  prevDisabled: PropTypes.bool.isRequired,
};

export default Header;
