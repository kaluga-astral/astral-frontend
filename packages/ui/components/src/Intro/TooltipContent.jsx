import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import IconButton from '../IconButton';
import FlexContainer from '../FlexContainer';
import SvgIcon from '../SvgIcon';
import Button from '../Button';

const useStyles = makeStyles(theme => ({
  tooltipContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '24px',
    color: theme.palette.text.primary,
    boxShadow: '0px 16px 56px rgba(0, 0, 0, 0.1)',
    borderRadius: `${theme.shape.borderRadius}px`,
  },
  title: {
    margin: 0,
  },
  currentStep: {
    margin: '0 8px',
  },
  closeButton: {
    marginLeft: 'auto',
  },
}));

const TooltipContent = ({
  title,
  text,
  currentStep,
  stepsLength,
  onNextStepIconClick,
  onPrevStepIconClick,
  onExitButtonClick,
}) => {
  const classes = useStyles();
  const nextButtonDisabled = currentStep + 1 === stepsLength;
  const prevButtonDisabled = currentStep === 0;

  return (
    <div className={classes.tooltipContent}>
      <FlexContainer alignItems="center">
        {title && <h4 className={classes.title}>{title}</h4>}
        <Button className={classes.closeButton} onClick={onExitButtonClick}>
          Закрыть
        </Button>
      </FlexContainer>
      <p>{text}</p>
      <FlexContainer alignItems="center">
        <IconButton onClick={onPrevStepIconClick} disabled={prevButtonDisabled}>
          <SvgIcon viewBox="0 0 24 24">
            <path d="M21 12.0003C21 11.4483 20.552 11.0003 20 11.0003L6.92969 11.0003L10.793 7.137C11.184 6.746 11.184 6.11294 10.793 5.72294L10.707 5.637C10.316 5.246 9.68297 5.246 9.29297 5.637L3.63672 11.2932C3.24572 11.6842 3.24572 12.3173 3.63672 12.7073L9.29297 18.3636C9.68397 18.7546 10.317 18.7546 10.707 18.3636L10.793 18.2776C11.184 17.8866 11.184 17.2536 10.793 16.8636L6.92969 13.0003L20 13.0003C20.552 13.0003 21 12.5523 21 12.0003Z" />
          </SvgIcon>
        </IconButton>
        <span className={classes.currentStep}>
          {`${currentStep + 1} из ${stepsLength}`}
        </span>
        <IconButton onClick={onNextStepIconClick} disabled={nextButtonDisabled}>
          <SvgIcon viewBox="0 0 24 24">
            <path d="M3 11.9997C3 12.5517 3.448 12.9997 4 12.9997L17.0703 12.9997L13.207 16.863C12.816 17.254 12.816 17.8871 13.207 18.2771L13.293 18.363C13.684 18.754 14.317 18.754 14.707 18.363L20.3633 12.7068C20.7543 12.3158 20.7543 11.6827 20.3633 11.2927L14.707 5.63644C14.316 5.24544 13.683 5.24544 13.293 5.63644L13.207 5.72238C12.816 6.11337 12.816 6.74644 13.207 7.13644L17.0703 10.9997L4 10.9997C3.448 10.9997 3 11.4477 3 11.9997Z" />
          </SvgIcon>
        </IconButton>
      </FlexContainer>
    </div>
  );
};

TooltipContent.defaultProps = {
  title: null,
};

TooltipContent.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onNextStepIconClick: PropTypes.func.isRequired,
  onPrevStepIconClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  stepsLength: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default TooltipContent;
