import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

// TODO: вынести в отдельный файл
// TODO: FormGridSectionTitle
const Title = ({
  classes, className, children, ...props
}) => (
  <h3 className={cn(classes.root, className)} {...props}>
    {children}
  </h3>
);

Title.defaultProps = {
  className: null,
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
};

const FormGridSection = ({
  classes, className, Icon, children, ...props
}) => (
  <div className={cn(classes.root, className)} {...props}>
    <Icon className={classes.icon} />
    <div className={classes.content}>{children}</div>
  </div>
);

FormGridSection.defaultProps = {
  className: null,
  Icon: () => null,
};

FormGridSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
  Icon: PropTypes.func,
};

FormGridSection.Title = withStyles({
  root: {
    margin: '0',
    lineHeight: '24px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
})(Title);

export default withStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: '15px',
  },
  icon: {
    marginRight: '20px',
    fill: theme.palette.grey[600],
  },
  content: {
    flexGrow: 1,
  },
}))(FormGridSection);
