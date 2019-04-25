/* eslint-disable react/prop-types */
import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@astral-frontend/styles';

// FIXME: описать PropTypes и удалить eslint-disable react/prop-types
const OrganizationSelectorNotFoundPlaceholder = ({
  classes,
  className,
  name,
  addLinkHref,
  ...props
}) => (
  <div className={cn(classes.root, className)} {...props}>
    <Link className={classes.link} to={addLinkHref}>добавить огранизацию</Link>
  </div>
);

export default withStyles({
  root: {},
  link: {},
})(OrganizationSelectorNotFoundPlaceholder);
