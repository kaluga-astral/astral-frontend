import ManropesemiboldWoff2 from './binary/Manropesemibold.woff2';
import ManropesemiboldWoff from './binary/Manropesemibold.woff';
import ManropesemiboldTtf from './binary/Manropesemibold.ttf';

import ManropemediumWoff2 from './binary/Manropemedium.woff2';
import ManropemediumWoff from './binary/Manropemedium.woff';
import ManropemediumTtf from './binary/Manropemedium.ttf';

import ManropethinWoff2 from './binary/Manropethin.woff2';
import ManropethinWoff from './binary/Manropethin.woff';
import ManropethinTtf from './binary/Manropethin.ttf';

import ManropelightWoff2 from './binary/Manropelight.woff2';
import ManropelightWoff from './binary/Manropelight.woff';
import ManropelightTtf from './binary/Manropelight.ttf';

import ManroperegularWoff2 from './binary/Manroperegular.woff2';
import ManroperegularWoff from './binary/Manroperegular.woff';
import ManroperegularTtf from './binary/Manroperegular.ttf';

import ManropeboldWoff2 from './binary/Manropebold.woff2';
import ManropeboldWoff from './binary/Manropebold.woff';
import ManropeboldTtf from './binary/Manropebold.ttf';

const MONROPE_FONTS_TYPES = [
  {
    srcList: [
      { url: ManropesemiboldWoff2, format: 'woff2' },
      { url: ManropesemiboldWoff, format: 'woff' },
      { url: ManropesemiboldTtf, format: 'ttf' },
    ],
    fontWeight: 600,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropemediumWoff2, format: 'woff2' },
      { url: ManropemediumWoff, format: 'woff' },
      { url: ManropemediumTtf, format: 'ttf' },
    ],
    fontWeight: 500,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropethinWoff2, format: 'woff2' },
      { url: ManropethinWoff, format: 'woff' },
      { url: ManropethinTtf, format: 'ttf' },
    ],
    fontWeight: 100,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropelightWoff2, format: 'woff2' },
      { url: ManropelightWoff, format: 'woff' },
      { url: ManropelightTtf, format: 'ttf' },
    ],
    fontWeight: 300,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManroperegularWoff2, format: 'woff2' },
      { url: ManroperegularWoff, format: 'woff' },
      { url: ManroperegularTtf, format: 'ttf' },
    ],
    fontWeight: 400,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: ManropeboldWoff2, format: 'woff2' },
      { url: ManropeboldWoff, format: 'woff' },
      { url: ManropeboldTtf, format: 'ttf' },
    ],
    fontWeight: 700,
    fontStyle: 'normal',
  },
];

export default MONROPE_FONTS_TYPES;
