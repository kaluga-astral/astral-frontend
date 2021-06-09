/* eslint-disable react/jsx-props-no-spreading */
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

import Collapse from '../Collapse';

import FormGridSectionContext from './FormGridSectionContext';
import FormGridSectionTitle from './FormGridSectionTitle';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      '&:not(:last-child)': {
        marginBottom: '45px',
      },
    },
    icon: {
      marginRight: '20px',
      fill: theme.palette.grey[600],
    },
    main: {
      flexGrow: 1,
    },
    content: {},
  }),
  { name: 'FormGridSection' },
);

const FormGridSection = ({
  collapsable,
  Icon,
  title,
  children,
  className,
  ...props
}) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = React.useState(false);
  const renderChildren = () => {
    if (collapsable) {
      return <Collapse in={collapsed}>{children}</Collapse>;
    }

    return children;
  };

  return (
    <FormGridSectionContext.Provider
      value={{ collapsable, collapsed, setCollapsed }}
    >
      <section className={cn(classes.root, className)} {...props}>
        <Icon className={classes.icon} />
        <div className={classes.main}>
          {title && (
            <FormGridSectionTitle className={classes.title}>
              {title}
            </FormGridSectionTitle>
          )}
          <div className={classes.content}>{renderChildren()}</div>
        </div>
      </section>
    </FormGridSectionContext.Provider>
  );
};

FormGridSection.defaultProps = {
  collapsable: false,
  className: null,
  title: null,
  Icon: () => null,
};

FormGridSection.propTypes = {
  collapsable: PropTypes.bool,
  Icon: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FormGridSection;
