import GolosSemiboldTtf from './binary/Golos-SemiBold.ttf';
import GolosMediumTtf from './binary/Golos-Medium.ttf';
import GolosRegularTtf from './binary/Golos-Regular.ttf';
import GolosBoldTtf from './binary/Golos-Bold.ttf';
import GolosExtraBoldTtf from './binary/Golos-ExtraBold.ttf';

const GOLOS_FONT_NAME = 'Golos';

const GOLOS_FONTS_CONNECT_INFO = [
  {
    srcList: [{ url: GolosRegularTtf, format: 'truetype' }],
    fontWeight: 400,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: GolosMediumTtf, format: 'truetype' }],
    fontWeight: 500,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: GolosSemiboldTtf, format: 'truetype' }],
    fontWeight: 600,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: GolosBoldTtf, format: 'truetype' }],
    fontWeight: 700,
    fontStyle: 'normal',
  },
  {
    srcList: [{ url: GolosExtraBoldTtf, format: 'truetype' }],
    fontWeight: 800,
    fontStyle: 'normal',
  },
];

const GOLOS_FONTS_CONFIG = {
  name: GOLOS_FONT_NAME,
  connectInfo: GOLOS_FONTS_CONNECT_INFO,
};

export default GOLOS_FONTS_CONFIG;
