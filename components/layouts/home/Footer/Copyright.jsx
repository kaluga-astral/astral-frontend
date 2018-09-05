import { noop } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../../Button';

const HomeFooterCopyright = ({
  className,
  classes,
  children,
  onQuestionClick,
}) => (
  <div className={cn(classes.root, className)}>
    <p className={classes.copyright}>
      © 2009-
      {new Date().getFullYear()}
      , ЗАО «Калуга Астрал»
    </p>
    {children}
    <Button color="secondary" onClick={onQuestionClick}>
      Задать вопрос
    </Button>
  </div>
);

HomeFooterCopyright.defaultProps = {
  children: null,
  className: null,
  onQuestionClick: noop,
};

HomeFooterCopyright.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    copyright: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  onQuestionClick: PropTypes.func,
};

export default withStyles({
  root: {

  },
  copyright: {

  },

})(HomeFooterCopyright);
