import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AstralSquareLogo } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      height: '75px',
      padding: '0 20px',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.dark,
    },
    logo: {
      flexShrink: 0,
      width: '32px',
      height: '32px',
      marginRight: '15px',
    },
    title: {
      flexGrow: 1,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(32),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }),
  { name: 'DashboardLayoutProduct' },
);

const DefaultLogo = props => <AstralSquareLogo color="monochrome" {...props} />;

const DashboardLayoutProduct = ({
  className,
  Logo,
  EndContent,
  title,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className)} {...props}>
      <Logo className={classes.logo} />
      <div className={classes.title}>{title}</div>
      {EndContent && <EndContent />}
    </div>
  );
};

DashboardLayoutProduct.defaultProps = {
  className: null,
  EndContent: null,
  Logo: DefaultLogo,
};

DashboardLayoutProduct.propTypes = {
  className: PropTypes.string,
  Logo: PropTypes.func,
  EndContent: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default DashboardLayoutProduct;
