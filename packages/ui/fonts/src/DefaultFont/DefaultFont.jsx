import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@astral-frontend/styles';

const getSrc = srcList => srcList
  .map(({ url, format }) => `url('${url}') format(${format})`)
  .join(', ');

const getFontsFace = ({ fontFamily, fontDisplay, fontTypes }) => fontTypes.map((fontFace) => {
  const { srcList } = fontFace;

  return {
    ...fontFace,
    fontFamily,
    fontDisplay,
    src: getSrc(srcList),
  };
});

const useFont = makeStyles(() => ({
  '@global': getFontsFace,
}));

const DefaultFont = ({ children, ...props }) => {
  useFont(props);

  return <>children</>;
};

DefaultFont.defaultProps = {
  children: null,
};

DefaultFont.propTypes = {
  children: PropTypes.element,
  fontFamily: PropTypes.string.isRequired,
  fontDisplay: PropTypes.string.isRequired,
  fontTypes: PropTypes.arrayOf(PropTypes.shape({
    fontWeight: PropTypes.number.isRequired,
    fontStyle: PropTypes.string.isRequired,
    srcList: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      format: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default DefaultFont;
