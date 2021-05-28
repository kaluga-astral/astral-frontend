import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import ListItem from '../ListItem';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'baseline',
      fontSize: theme.typography.pxToRem(14),
    },
    title: {
      color: theme.palette.gray[600],
      marginRight: theme.spacing(1),
      whiteSpace: 'nowrap',
    },
    value: {
      display: 'inline-block',
      color: theme.palette.gray[800],
      overflow: 'hidden',
      wordBreak: 'break-word',
      textOverflow: 'ellipsis',
    },
  }),
  { name: 'DetailsListItem' },
);

const DetailsListItem = ({ title, value }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root} dense disableGutters>
      <span className={classes.title}>{title || 'Не указано'}</span>
      <span className={classes.value}>{value || 'Не указано'}</span>
    </ListItem>
  );
};

DetailsListItem.defaultProps = {
  value: null,
};

DetailsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default DetailsListItem;
