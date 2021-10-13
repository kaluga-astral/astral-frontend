import PropTypes from 'prop-types';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@astral-frontend/styles';
import {
  Box,
  IconButton,
  SvgIcon,
  Typography,
} from '@astral-frontend/components';

const useStyles = makeStyles(
  theme => ({
    root: {},
    goBackButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.gray[900],
    },
  }),
  { name: 'DashboardLayoutPageTitle' },
);

const DashboardLayoutPageTitle = ({
  title,
  withHistoryGoBack,
  goBackURL,
  ...props
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      display="flex"
      alignSelf="center"
      alignItems="center"
      flexGrow={1}
      {...props}
    >
      {goBackURL && (
        <IconButton
          className={classes.goBackButton}
          component={Link}
          to={goBackURL}
        >
          <SvgIcon width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M3.43936 12.0001L9.96973 5.46973L11.0304 6.53039L6.31073 11.2501L21 11.2501L21 12.7501L6.31073 12.7501L11.0304 17.4697L9.96972 18.5304L3.43936 12.0001Z"
              fill="#B7C2CE"
            />
          </SvgIcon>
        </IconButton>
      )}
      {withHistoryGoBack && (
        <IconButton
          className={classes.goBackButton}
          onClick={() => history.goBack()}
        >
          <SvgIcon width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M3.43936 12.0001L9.96973 5.46973L11.0304 6.53039L6.31073 11.2501L21 11.2501L21 12.7501L6.31073 12.7501L11.0304 17.4697L9.96972 18.5304L3.43936 12.0001Z"
              fill="#B7C2CE"
            />
          </SvgIcon>
        </IconButton>
      )}
      <Typography className={classes.title} component="h1">
        {title}
      </Typography>
    </Box>
  );
};

DashboardLayoutPageTitle.defaultProps = {
  withHistoryGoBack: false,
  goBackURL: null,
};

DashboardLayoutPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  withHistoryGoBack: PropTypes.bool,
  goBackURL: PropTypes.string,
};

export default DashboardLayoutPageTitle;
