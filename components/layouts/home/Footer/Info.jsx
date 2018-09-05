import { noop } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AstralLogo } from '../../../brand';

const HomeFooterInfo = ({ className, classes, onSearch }) => (
  <div className={cn(classes.root, className)}>
    <AstralLogo width={135} height={40} />
    <p className={classes.address}>
      248000, г. Калуга ул.Суворова 121, 4 этаж, офис 430.
      <br />тел: (4842) 7-88-999 доб. 7032, 7037, 7034, 7031
      <br />email: client@astralnalog.ru
      <br />Время работы: с 8:30 до 17:30
    </p>
    <p className={classes.address}>
      248000, г. Калуга пер.Воскресенский 29А, 1этаж.
      <br />тел: (4842) 7-88-999 доб. 7036, 7039, 7033
      <br />email: client@astralnalog.ru 
      <br />Время работы с 8:30 до 17:30
    </p>
    <input className={classes.search} onChange={onSearch} />
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
    search: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  onSearch: PropTypes.func,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  address: {
    margin: '31px auto 0',
    fontSize: '12px',
    lineHeight: '18px',
    color: theme.palette.common.white,
    fontWeight: 200,
    width: '300px',
  },
  search: {
    marginTop: 'auto',
  },
}))(HomeFooterInfo);
