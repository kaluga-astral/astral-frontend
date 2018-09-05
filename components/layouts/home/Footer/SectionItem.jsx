import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const HomeFooterSectionItem = ({ classes, name, place }) => (
  <Link className={classes.root} to={place}>
    {name}
  </Link>
);

HomeFooterSectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

export default withStyles({
  root: {

  },
})(HomeFooterSectionItem);
