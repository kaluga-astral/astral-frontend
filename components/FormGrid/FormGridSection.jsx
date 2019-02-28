import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Title = ({ children }) => <h3>{children}</h3>;

Title.defaultProps = {
  children: null,
};

Title.propTypes = {
  children: PropTypes.node,
};

const FormGridSection = ({
  className, children, title, ...props
}) => (
  <div {...props} className={cn('form__section', className)}>
    <Title>{title}</Title>
    {children}
  </div>
);

FormGridSection.defaultProps = {
  className: null,
  title: null,
};

FormGridSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FormGridSection.Title = Title;

export default FormGridSection;
