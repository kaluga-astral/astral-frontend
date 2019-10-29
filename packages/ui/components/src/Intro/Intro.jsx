import { isNumber } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';

import { useTheme } from '@astral-frontend/styles';

import ThemeProvider from '../ThemeProvider';
import TooltipContent from './TooltipContent';
import './theme.css';

const Intro = ({
  initialStep, steps, open, onChange, onComplete, options,
}) => {
  const theme = useTheme();
  const stepsRef = React.useRef({});
  const contentRef = React.useRef(document.getElementsByClassName('introjs-tooltipcontent'));
  const [currentStep, setCurrentStep] = React.useState(initialStep);
  const handlePrevStepIconClick = () => {
    setCurrentStep(prevCurrentStep => prevCurrentStep - 1);
  };
  const handleNextStepIconClick = () => {
    setCurrentStep(prevCurrentStep => prevCurrentStep + 1);
  };

  React.useEffect(() => {
    if (open) {
      const tooltip = document.getElementsByClassName('introjs-tooltip')[0];
      if (tooltip) {
        const content = document.createElement('div');
        content.classList.add('introjs-tooltipcontent');
        tooltip.appendChild(content);
      }
    }
  }, [open]);

  React.useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  React.useEffect(() => {
    const { introJs } = stepsRef.current;
    if (introJs && open && isNumber(currentStep)) {
      introJs.goToStep(currentStep + 1);
      ReactDOM.render(
        <ThemeProvider theme={theme}>
          <TooltipContent
            title={steps[currentStep].title}
            text={steps[currentStep].intro}
            currentStep={currentStep}
            stepsLength={steps.length}
            onPrevStepIconClick={handlePrevStepIconClick}
            onNextStepIconClick={handleNextStepIconClick}
            onExitButtonClick={onComplete}
          />
        </ThemeProvider>,
        contentRef.current[0],
      );
    }
  }, [currentStep, stepsRef.current, open]);

  return (
    <Steps
      open={open}
      initialStep={initialStep}
      steps={steps}
      ref={stepsRef}
      enabled={open}
      onChange={onChange}
      onExit={() => {}}
      options={options}
    />
  );
};

Intro.defaultProps = {
  initialStep: 0,
  open: false,
  onChange: null,
  onComplete: null,
  options: {
    exitOnEsc: false,
    exitOnOverlayClick: false,
    keyboardNavigation: false,
  },
};

Intro.propTypes = {
  initialStep: PropTypes.number,
  open: PropTypes.bool,
  onChange: PropTypes.func,
  onComplete: PropTypes.func,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.string,
      intro: PropTypes.string.isRequired,
      title: PropTypes.string,
      position: PropTypes.oneOf([
        'top',
        'right',
        'bottom',
        'left',
        'bottom-left-aligned',
        'bottom-middle-aligned',
        'bottom-right-aligned',
        'auto',
      ]),
    }),
  ).isRequired,
  options: PropTypes.shape({}),
};

export default Intro;
