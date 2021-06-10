export default {
  htmlFontSize: 14,
  fontWeightRegular: 400,
  fontWeightBold: 600,
  fontWeightExtraBold: 800,
  fontFamily: '"Manrope", sans-serif, system-ui',
  body1: {
    fontSize: '1rem',
  },
  body2: {
    fontSize: '1rem',
  },
  get subtitle1() {
    return {
      fontSize: `${18 / this.htmlFontSize}rem`,
      fontWeight: this.fontWeightBold,
    };
  },
};
