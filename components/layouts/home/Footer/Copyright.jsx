import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../../Button';

const HomeFooterCopyright = ({ classes, children, onQuestionClick }) => (
  <section className={classes.root}>
    <p className={classes.copyright}>
      © 2009-
      {new Date().getFullYear()}
      , ЗАО «Калуга Астрал»
    </p>
    {children}
    <Button color="secondary" onClick={onQuestionClick}>
      Задать вопрос
    </Button>
  </section>
);

HomeFooterCopyright.defaultProps = {
  children: null,
};

HomeFooterCopyright.propTypes = {
  classes: PropTypes.shape({

  }).isRequired,
  children: PropTypes.node,
  onQuestionClick: PropTypes.func.isRequired,
};

export default withStyles({

})(HomeFooterCopyright);
