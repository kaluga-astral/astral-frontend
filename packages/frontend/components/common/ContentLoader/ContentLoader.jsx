import PropTypes from 'prop-types';
import React from 'react';
import ReactContentLoader from 'react-content-loader';
import { useTheme } from '@astral-frontend/styles';

const ContentLoader = props => {
  const theme = useTheme();
  const {
    primaryColor = theme.palette.gray[100],
    secondaryColor = theme.palette.gray[300],
    ...restProps
  } = props;

  return (
    <ReactContentLoader
      {...restProps}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    />
  );
};

ContentLoader.defaultProps = {
  height: 10,
  width: 400,
  speed: 2,
  primaryColor: undefined,
  secondaryColor: undefined,
};

ContentLoader.propTypes = {
  height: PropTypes.number,
  speed: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export default ContentLoader;
