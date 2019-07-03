import RobotoLightWoff2 from './binary/roboto-v18-300.woff2';
import RobotoLightWoff from './binary/roboto-v18-300.woff';

import RobotoRegularWoff2 from './binary/roboto-v18-400.woff2';
import RobotoRegularWoff from './binary/roboto-v18-400.woff';

import RobotoMediumWoff2 from './binary/roboto-v18-500.woff2';
import RobotoMediumWoff from './binary/roboto-v18-500.woff';

const ROBOTO_FONT_NAME = 'Roboto';

const ROBOTO_FONTS_CONNECT_INFO = [
  {
    srcList: [
      { url: RobotoLightWoff2, format: 'woff2' },
      { url: RobotoLightWoff, format: 'woff' },
    ],
    fontWeight: 300,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: RobotoRegularWoff2, format: 'woff2' },
      { url: RobotoRegularWoff, format: 'woff' },
    ],
    fontWeight: 400,
    fontStyle: 'normal',
  },
  {
    srcList: [
      { url: RobotoMediumWoff2, format: 'woff2' },
      { url: RobotoMediumWoff, format: 'woff' },
    ],
    fontWeight: 500,
    fontStyle: 'normal',
  },
];

const ROBOTO_FONTS_CONFIG = {
  name: ROBOTO_FONT_NAME,
  connectInfo: ROBOTO_FONTS_CONNECT_INFO,
};

export default ROBOTO_FONTS_CONFIG;
