import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SectionTitle from './Title';
import SectionBody from './Body';

const Section = ({ classes, className, children }) => (
  <section className={cn(classes.root, className)}>{children}</section>
);

Section.defaultProps = {
  className: null,
};

Section.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.Title = SectionTitle;
Section.Body = SectionBody;

export default withStyles({
  root: {
    margin: '25px',
  },
})(Section);
