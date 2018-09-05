import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Logo from '../logo.png';

const HomeFooterInfo = ({ classes, onSearch }) => (
  <section className={classes.root}>
    <img className={classes.logo} src={Logo} alt="Астрал" />
    <p className={classes.address}>
      248000, г. Калуга ул.Суворова 121, 4 этаж, офис 430.
      тел: (4842) 7-88-999 доб. 7032, 7037, 7034, 7031
      email: client@astralnalog.ru
      Время работы: с 8:30 до 17:30
    </p>
    <p className={classes.address}>
      248000, г. Калуга пер.Воскресенский 29А, 1этаж.
      тел: (4842) 7-88-999 доб. 7036, 7039, 7033
      email: client@astralnalog.ru 
      Время работы с 8:30 до 17:30
    </p>
    <input />
  </section>
);

HomeFooterInfo.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default withStyles({
  root: {

  },
  logo: {

  },
  address: {

  },
})(HomeFooterInfo);
