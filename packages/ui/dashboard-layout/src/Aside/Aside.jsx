import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { SidebarContextProvider } from '../Sidebar';

import AsideContextProvider from './AsideContextProvider';

const useStyles = makeStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
    },
  },
  { name: 'Aside' },
);

const Aside = React.forwardRef(({ children, className }, ref) => {
  const classes = useStyles();

  return (
    <SidebarContextProvider alwaysExpanded>
      <AsideContextProvider>
        <Box ref={ref} className={cn(className, classes.root)}>
          {children}
        </Box>
      </AsideContextProvider>
    </SidebarContextProvider>
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
