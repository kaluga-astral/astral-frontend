import { noop } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AstralLogo } from '../../../brand';

const HomeFooterInfo = ({ className, classes, onSearch }) => (
  <div className={cn(classes.root, className)}>
    <AstralLogo />
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
    <input onChange={onSearch} />
  </div>
);

HomeFooterInfo.defaultProps = {
  className: null,
  onSearch: noop,
};

HomeFooterInfo.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    logo: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  onSearch: PropTypes.func,
};

export default withStyles({
  root: {

  },
  address: {

  },
})(HomeFooterInfo);
