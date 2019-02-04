import rebotoV18300Woff2 from './roboto-v18-300.woff2';
import rebotoV18300Woff from './roboto-v18-300.woff';

const styles = () => ({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Roboto',
        src: `local("Roboto Light"), local("Roboto-Light"),
            url("${rebotoV18300Woff2}") format("woff2"),
            url("${rebotoV18300Woff}") format("woff")`,
        fontStyle: 'normal',
        fontWeight: 300,
        fontDisplay: 'swap',
      },
      // {
      //   fontFamily: 'Roboto',
      //   src: `local("Roboto"), local("Roboto-Regular"),
      //       url("./roboto-v18-400.woff2") format("woff2"),
      //       url("./roboto-v18-400.woff") format("woff")`,
      //   fontStyle: 'normal',
      //   fontWeight: 400,
      //   fontDisplay: 'swap',
      // },
      // {
      //   fontFamily: 'Roboto',
      //   src: `local("Roboto Medium"), local("Roboto-Medium"),
      //       url("./roboto-v18-500.woff2") format("woff2"),
      //       url("./roboto-v18-500.woff") format("woff")`,
      //   fontStyle: 'normal',
      //   fontWeight: 500,
      //   fontDisplay: 'swap',
      // },
    ],
  },
});

export default styles;
