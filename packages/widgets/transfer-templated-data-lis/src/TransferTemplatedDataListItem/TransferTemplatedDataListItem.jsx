import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ListItem, ListItemText } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
    highlight: {
      '&:hover $text': {
        color: theme.palette.primary.main,
      },
    },
    text: {
      transition: theme.transitions.create(['color']),
    },
  }),
  { name: 'TransferTemplatedDataListItem' },
);

export const TransferTemplatedDataListItem = ({
  text,
  children,
  className,
  loading,
  highlightOnHover,
  ...props
}) => {
  const classes = useStyles({ highlightOnHover });

  return (
    <ListItem
      dense
      disableGutters
      {...props}
      className={cn(
        classes.root,
        { [classes.highlight]: highlightOnHover },
        className,
      )}
    >
      <ListItemText className={classes.text}>{text}</ListItemText>
      {children}
    </ListItem>
  );
};

TransferTemplatedDataListItem.defaultProps = {
  className: null,
  children: null,
  highlightOnHover: false,
  loading: false,
};

TransferTemplatedDataListItem.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
};

export default TransferTemplatedDataListItem;
