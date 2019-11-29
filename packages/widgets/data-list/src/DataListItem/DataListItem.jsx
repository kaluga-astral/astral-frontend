import PropTypes from 'prop-types';
import React from 'react';
import { ListItem } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderStyle: 'solid',
      borderColor: 'transparent',
      padding: theme.spacing(4, 0),
      marginBottom: theme.spacing(1),
      borderWidth: theme.spacing(0, 0, 0, 1),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.gray[800],
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  }),
  { name: 'DataListItem' },
);

const DataListItem = ({ className, disableGutters, button, ...props }) => {
  const classes = useStyles(props);

  return (
    <ListItem
      className={className}
      classes={classes}
      disableGutters={disableGutters}
      button={button}
      component="div"
      {...props}
    />
  );
};

DataListItem.defaultProps = {
  className: null,
  disableGutters: true,
  button: false,
};

DataListItem.propTypes = {
  className: PropTypes.string,
  disableGutters: PropTypes.bool,
  button: PropTypes.bool,
};

export default DataListItem;
