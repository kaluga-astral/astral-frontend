import { isFunction } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { IconButton, SvgIcon } from '@astral/components';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      padding: theme.spacing(0, 3),
      borderRight: `1px solid ${theme.palette.primary.light}`,
      color: theme.palette.gray[800],
      fontWeight: theme.typography.fontWeightBold,
    },
    count: {
      marginRight: theme.spacing(3),
    },
  }),
  { name: 'NavBarSelectedItems' },
);

export const NavBarSelectedItems = ({
  data: { selectedItemsLength },
  onSelectedItemsClear,
}) => {
  const classes = useStyles();

  const handleClick = React.useCallback(() => {
    if (isFunction(onSelectedItemsClear)) {
      onSelectedItemsClear();
    }
  }, []);

  if (selectedItemsLength <= 0) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={classes.count}>{`Выбрано: ${selectedItemsLength}`}</div>
      <IconButton onClick={handleClick}>
        <SvgIcon>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </SvgIcon>
      </IconButton>
    </div>
  );
};

NavBarSelectedItems.defaultProps = {
  onSelectedItemsClear: null,
};

NavBarSelectedItems.propTypes = {
  data: PropTypes.shape({
    selectedItemsLength: PropTypes.number,
  }).isRequired,
  onSelectedItemsClear: PropTypes.func,
};

export default NavBarSelectedItems;
