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
    <Button className={classes.question} color="secondary" onClick={onQuestionClick}>
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
    question: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  onQuestionClick: PropTypes.func,
};

export default withStyles(theme => ({
  root: {
    marginTop: '54px',
    paddingTop: '41px',
    borderTop: `1px solid ${theme.palette.common.white}`,
    display: 'flex',
    justifyContent: 'space-between',
  },
  copyright: {
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  question: {
    width: '200px',
    height: '50px',
  }
}))(HomeFooterCopyright);
