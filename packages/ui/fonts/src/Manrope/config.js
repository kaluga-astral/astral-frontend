import ManropeVarialeFont from './binary/Manrope-VariableFont.ttf';

import ManropeSemiboldTtf from './binary/Manrope-SemiBold.ttf';

import ManropeMediumTtf from './binary/Manrope-Medium.ttf';

import ManropeExtraLightTtf from './binary/Manrope-ExtraLight.ttf';

import ManropeLightTtf from './binary/Manrope-Light.ttf';

import ManropeRegularTtf from './binary/Manrope-Regular.ttf';

import ManropeBoldTtf from './binary/Manrope-Bold.ttf';

import ManropeExtraBoldTtf from './binary/Manrope-ExtraBold.ttf';

const MANROPE_FONT_NAME = 'Manrope';

const MANROPE_FONTS_CONNECT_INFO = [
  {
    srcList: [{ url: ManropeVarialeFont, format: 'ttf' }],
  },
  {
    srcList: [{ url: ManropeExtraLightTtf, format: 'ttf' }],
    fontWeight: 100,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: ManropeExtraLightTtf, format: 'ttf' }],
    fontWeight: 200,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: ManropeLightTtf, format: 'ttf' }],
    fontWeight: 300,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: ManropeRegularTtf, format: 'ttf' }],
    fontWeight: 400,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: ManropeMediumTtf, format: 'ttf' }],
    fontWeight: 500,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: ManropeSemiboldTtf, format: 'ttf' }],
    fontWeight: 600,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: ManropeBoldTtf, format: 'ttf' }],
    fontWeight: 700,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: ManropeExtraBoldTtf, format: 'ttf' }],
    fontWeight: 800,
    fontStyle: 'normal',
  },
];

const MANROPE_FONTS_CONFIG = {
  name: MANROPE_FONT_NAME,
  connectInfo: MANROPE_FONTS_CONNECT_INFO,
};

export default MANROPE_FONTS_CONFIG;
