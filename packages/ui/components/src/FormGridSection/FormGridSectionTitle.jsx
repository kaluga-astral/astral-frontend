import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@astral-frontend/styles';

import FormGridSectionContext from './FormGridSectionContext';
import FlexContainer from '../FlexContainer';
import FlexItem from '../FlexItem';
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

// ToDo: use typography insted of h3
const FormGridSectionTitle = ({
  classes, className, children, ...props
}) => {
  const { collapsable } = React.useContext(FormGridSectionContext);

  return (
    <FlexContainer className={cn(classes.root, className)} {...props}>
      <FlexItem grow={1} component="h3" className={classes.text}>
        {children}
      </FlexItem>
      {collapsable && <FormGridSectionTitleCollapseToggler />}
    </FlexContainer>
  );
};

FormGridSectionTitle.defaultProps = {
  className: null,
};

FormGridSectionTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {},
  text: {
    margin: '0',
    lineHeight: '24px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
})(FormGridSectionTitle);
