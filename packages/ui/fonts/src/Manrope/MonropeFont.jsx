import React from 'react';
import PropTypes from 'prop-types';

import DefaultFont from '../DefaultFont';

import MONROPE_FONTS_TYPES from './fontTypes';

const MonropeFont = ({ fontDisplay, children }) => (
  <DefaultFont fontFamily="Monrope" fontDisplay={fontDisplay} fontTypes={MONROPE_FONTS_TYPES}>
    {children}
  </DefaultFont>
);

MonropeFont.defaultProps = {
  fontDisplay: 'swap',
  children: null,
};

MonropeFont.propTypes = {
  fontDisplay: PropTypes.string,
  children: PropTypes.element,
};

export default MonropeFont;
