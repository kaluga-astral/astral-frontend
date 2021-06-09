import cn from 'classnames';
import React from 'react';
import { ListItem, ListItemText } from '@astral/components';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => ({
    root: {},
    highlight: {
      '&:hover $text': {
        color: theme.palette.primary.main,
      },
    },
    text: {
      transition: theme.transitions.create(['color']),
    },
  }),
  { name: 'FlatTemplatedDataListItem' },
);

const FlatTemplatedDataListItem = ({
  text,
  children,
  className,
  highlightOnHover,
  ...props
}) => {
  const classes = useStyles({ highlightOnHover });

  return (
    <ListItem
      disableGutters
      {...props}
      className={cn({ [classes.highlight]: highlightOnHover }, className)}
    >
      <ListItemText className={classes.text}>{text}</ListItemText>
      {children}
    </ListItem>
  );
};

export default FlatTemplatedDataListItem;
