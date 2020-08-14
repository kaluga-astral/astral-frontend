import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import AsideContext from './AsideContext';

const useStyles = makeStyles(
  {
    root: {
      flexShrink: 0,
    },
  },
  { name: 'Aside' },
);

const Aside = React.forwardRef(({ children, className }, ref) => {
  const classes = useStyles();
  const [expandedNavDropdownId, setExpandedNavDropdownId] = React.useState();

  return (
    <AsideContext.Provider
      value={{ expandedNavDropdownId, setExpandedNavDropdownId }}
    >
      <FlexContainer
        ref={ref}
        className={cn(className, classes.root)}
        direction="column"
      >
        {children}
      </FlexContainer>
    </AsideContext.Provider>
  );
});

Aside.defaultProps = {
  className: null,
};

Aside.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Aside;
