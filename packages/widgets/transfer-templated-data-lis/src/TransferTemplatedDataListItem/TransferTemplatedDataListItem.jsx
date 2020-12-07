import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ListItem, ListItemText } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { TransferTemplatedDataListItemContext } from '../TransferTemplatedDataList';

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
      display: 'inline-flex',
      alignItems: 'center',
      overflow: 'hidden',
      wordBreak: 'break-all',
      transition: theme.transitions.create(['color']),
    },
  }),
  { name: 'TransferTemplatedDataListItem' },
);

export const TransferTemplatedDataListItem = ({
  text,
  endAdornment,
  children,
  className,
  loading,
  highlightOnHover,
  ActionsComponent,
  ...props
}) => {
  const classes = useStyles({ highlightOnHover });
  const { data } = React.useContext(TransferTemplatedDataListItemContext);

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
      <ListItemText className={classes.text} disableTypography>
        {text}
        {endAdornment}
      </ListItemText>
      {ActionsComponent && <ActionsComponent data={data} />}
    </ListItem>
  );
};

TransferTemplatedDataListItem.defaultProps = {
  className: null,
  children: null,
  highlightOnHover: false,
  loading: false,
  ActionsComponent: null,
  endAdornment: null,
};

TransferTemplatedDataListItem.propTypes = {
  text: PropTypes.string.isRequired,
  endAdornment: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
  ActionsComponent: PropTypes.func,
};

export default TransferTemplatedDataListItem;
