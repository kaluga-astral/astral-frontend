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
      fontWeight: theme.typography.fontWeightBold,
    },
    endContentWrapper: {
      opacity: ({ hideEndContent }) => (hideEndContent ? 0 : 1),
      pointerEvents: ({ hideEndContent }) => (hideEndContent ? 'none' : 'auto'),
      transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
  { name: 'DashboardLayoutProduct' },
);

const DefaultLogo = props => <AstralSquareLogo color="monochrome" {...props} />;

const DashboardLayoutProduct = ({
  hideEndContent,
  className,
  Logo,
  EndContent,
  title,
}) => {
  const classes = useStyles({ hideEndContent });

  return (
    <div className={cn(classes.root, className)}>
      <Logo className={classes.logo} />
      <div className={cn(classes.title, classes.endContentWrapper)}>
        {title}
      </div>
      <div
        className={classes.endContentWrapper}
        tabIndex={hideEndContent ? -1 : undefined}
      >
        {EndContent && <EndContent />}
      </div>
    </div>
  );
};

DashboardLayoutProduct.defaultProps = {
  hideEndContent: false,
  className: null,
  EndContent: null,
  Logo: DefaultLogo,
};

DashboardLayoutProduct.propTypes = {
  hideEndContent: PropTypes.bool,
  className: PropTypes.string,
  Logo: PropTypes.func,
  EndContent: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default DashboardLayoutProduct;
