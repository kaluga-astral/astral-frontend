import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SectionTitle from './Title';
import SectionBody from './Body';

const DashboardSection = ({ classes, className, children }) => (
  <section className={cn(classes.root, className)}>{children}</section>
);

DashboardSection.defaultProps = {
  className: null,
};

DashboardSection.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DashboardSection.Title = SectionTitle;
DashboardSection.Body = SectionBody;

export default withStyles({
  root: {
    margin: '25px',
  },
})(DashboardSection);
