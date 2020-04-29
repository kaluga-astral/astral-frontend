import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  IconButton,
  FlexContainer,
  FlexItem,
} from '@astral-frontend/components';

const GoBackButton = ({ children, className, ...props }) => {
  const history = useHistory();

  return (
    <FlexItem
      component={FlexContainer}
      alignItems="center"
      className={className}
      {...props}
    >
      <IconButton onClick={() => history.goBack()} type="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.43936 12.0001L9.96973 5.46973L11.0304 6.53039L6.31073 11.2501L21 11.2501L21 12.7501L6.31073 12.7501L11.0304 17.4697L9.96972 18.5304L3.43936 12.0001Z"
            fill="#B7C2CE"
          />
        </svg>
      </IconButton>
      {children}
    </FlexItem>
  );
};

GoBackButton.defaultProps = {
  className: null,
};

GoBackButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GoBackButton;
