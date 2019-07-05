import PropTypes from 'prop-types';
import { makeStyles } from '@astral-frontend/styles';
import { FONTS_CONFIGS, LOCAL_FALLBACK_FONTS } from '@astral-frontend/fonts';
import { flatten } from 'lodash-es';

const getDownloadableFontsFamily = fontFamilyString => fontFamilyString
  .split(', ')
  .map(fontName => fontName.replace(/"/g, ''))
  .filter(font => !LOCAL_FALLBACK_FONTS.includes(font));

const getSrc = srcList => srcList
  .map(({ url, format }) => `url('${url}') format('${format}')`)
  .join(', ');

const generateFontsFace = (fontsConfig, fontFamily, fontDisplay) => fontsConfig.map((fontFace) => {
  const { srcList, ...fontFaceProps } = fontFace;

  return {
    ...fontFaceProps,
    fontFamily,
    fontDisplay,
    src: getSrc(srcList),
  };
});

const getFontsFace = ({ typography }) => ({ fontDisplay, customFontsConfig }) => {
  const fontsConfigs = { ...FONTS_CONFIGS, ...customFontsConfig };
  const { fontFamily: themeFontFamily } = typography;
  const downloadableFontsFamily = getDownloadableFontsFamily(themeFontFamily);

  return flatten(
    downloadableFontsFamily.map((fontFamily) => {
      const fontsConfig = fontsConfigs[fontFamily];

      return fontsConfig ? generateFontsFace(fontsConfig, fontFamily, fontDisplay) : [];
    }),
  );
};

// при попытке получения props нормальным способом из свойсв стили просто не генерятся
const useFont = props => makeStyles(theme => ({
  '@global': {
    '@font-face': getFontsFace(theme)(props),
  },
}), { name: 'fonts' })();

const FontsConnector = ({ children, ...props }) => {
  useFont(props);

  return children;
};

FontsConnector.defaultProps = {
  fontDisplay: 'swap',
  customFontsConfig: {},
  children: null,
};

FontsConnector.propTypes = {
  fontDisplay: PropTypes.string,
  // такой же как FONTS_CONFIGS
  customFontsConfig: PropTypes.shape(),
  children: PropTypes.element,
};

export default FontsConnector;
