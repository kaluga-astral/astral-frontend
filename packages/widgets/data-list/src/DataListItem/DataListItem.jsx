import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ListItem } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderLeftWidth: theme.spacing(1),
      borderStyle: 'solid',
      borderColor: 'transparent',
      padding: theme.spacing(4, 0),
      marginBottom: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.gray[800],
      background: theme.palette.common.white,
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
    },
  }),
  { name: 'DataListItem' },
);

const DataListItem = ({ className, disableGutters, button, ...props }) => {
  const classes = useStyles(props);

  return (
    <ListItem
      className={cn(className, classes.root)}
      disableGutters={disableGutters}
      button={button}
      {...props}
    />
  );
};

DataListItem.defaultProps = {
  className: null,
  disableGutters: true,
  button: true,
};

DataListItem.propTypes = {
  className: PropTypes.string,
  disableGutters: PropTypes.bool,
  button: PropTypes.bool,
};

export default DataListItem;
