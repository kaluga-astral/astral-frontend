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
    srcList: [
      { url: ManropeVarialeFont, format: 'truetype-variations' },
      { url: ManropeExtraLightTtf, format: 'truetype' },
    ],
    fontWeight: 100,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropeVarialeFont, format: 'truetype-variations' },
      { url: ManropeExtraLightTtf, format: 'truetype' },
    ],
    fontWeight: 200,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropeVarialeFont, format: 'truetype-variations' },
      { url: ManropeLightTtf, format: 'truetype' },
    ],
    fontWeight: 300,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropeVarialeFont, format: 'truetype-variations' },
      { url: ManropeRegularTtf, format: 'truetype' },
    ],
    fontWeight: 400,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropeVarialeFont, format: 'truetype-variations' },
      { url: ManropeMediumTtf, format: 'truetype' },
    ],
    fontWeight: 500,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropeVarialeFont, format: 'truetype-variations' },
      { url: ManropeSemiboldTtf, format: 'truetype' },
    ],
    fontWeight: 600,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropeVarialeFont, format: 'truetype-variations' },
      { url: ManropeBoldTtf, format: 'truetype' },
    ],
    fontWeight: 700,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropeVarialeFont, format: 'truetype-variations' },
      { url: ManropeExtraBoldTtf, format: 'truetype' },
    ],
    fontWeight: 800,
    fontStyle: 'normal',
  },
];

const MANROPE_FONTS_CONFIG = {
  name: MANROPE_FONT_NAME,
  connectInfo: MANROPE_FONTS_CONNECT_INFO,
};

export default MANROPE_FONTS_CONFIG;
