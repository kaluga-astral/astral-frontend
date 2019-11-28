import PropTypes from 'prop-types';
import React from 'react';
import ReactContentLoader from 'react-content-loader';
import { useTheme } from '@astral-frontend/styles';

const ContentLoader = ({ height, width, speed, children }) => {
  const theme = useTheme();

  return (
    <ReactContentLoader
      height={height}
      width={width}
      speed={speed}
      primaryColor={theme.palette.gray[100]}
      secondaryColor={theme.palette.gray[300]}
    >
      {children}
    </ReactContentLoader>
  );
};

ContentLoader.defaultProps = {
  height: 10,
  width: 400,
  speed: 2,
};

ContentLoader.propTypes = {
  height: PropTypes.number,
  speed: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default ContentLoader;
