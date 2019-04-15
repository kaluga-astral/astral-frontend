import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

// TODO: вынести в отдельный файл
// TODO: FormGridSectionTitle
const Title = ({
  classes, className, component: Component, ...props
}) => (
  <Component className={cn(classes.root, className)} {...props} />
);

Title.defaultProps = {
  component: 'h3',
  className: null,
};

Title.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
};

const FormGridSection = ({
  classes, className, children, ...props
}) => (
  <div className={cn(classes.root, className)} {...props}>
    {children}
  </div>
);

FormGridSection.defaultProps = {
  className: null,
};

FormGridSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
};

FormGridSection.Title = withStyles({
  root: {
    marginBottom: 0,
  },
})(Title);

export default withStyles({
  root: {},
})(FormGridSection);
