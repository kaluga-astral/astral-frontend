import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import FormGridSectionContext from './FormGridSectionContext';
import Button from '../Button';

const FormGridSectionTitleCollapseToggler = () => {
  const { collapsed, setCollapsed } = React.useContext(FormGridSectionContext);
  const handleTogglerButtonClick = () => {
    setCollapsed(prevValue => !prevValue);
  };

  return (
    <Button variant="text" size="small" onClick={handleTogglerButtonClick}>
      {collapsed ? 'Скрыть' : 'Показать'}
    </Button>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  text: {
    flex: 1,
    margin: '0',
    lineHeight: theme.typography.pxToRem(24),
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
  },
}));

// ToDo: use typography insted of h3
const FormGridSectionTitle = ({ className, children, ...props }) => {
  const classes = useStyles();
  const { collapsable } = React.useContext(FormGridSectionContext);

  return (
    <div className={cn(classes.root, className)} {...props}>
      <div component="h3" className={classes.text}>
        {children}
      </div>
      {collapsable && <FormGridSectionTitleCollapseToggler />}
    </div>
  );
};

FormGridSectionTitle.defaultProps = {
  className: null,
};

FormGridSectionTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormGridSectionTitle;
