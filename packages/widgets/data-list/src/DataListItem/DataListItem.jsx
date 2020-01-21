import PropTypes from 'prop-types';
import React from 'react';
import { ListItem } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import ListItemIcon from './DataListItemIcon';
import DataListContext from '../DataListContext';
import DataListItemContext from './DataListItemContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderStyle: 'solid',
      borderColor: 'transparent',
      padding: theme.spacing(4, 0),
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

const DataListItem = ({
  className,
  disableGutters,
  button,
  Icon,
  children,
  ...props
}) => {
  const classes = useStyles(props);
  const [hovered, setHovered] = React.useState(false);
  const { dataItem } = React.useContext(DataListItemContext);
  const { isItemSelectable } = React.useContext(DataListContext);

  const handleListItemMouseEnter = React.useCallback(() => {
    if (isItemSelectable(dataItem)) {
      setHovered(true);
    }
  }, [dataItem]);
  const handleListItemMouseLeave = () => {
    setHovered(false);
  };

  return (
    <ListItem
      className={className}
      classes={classes}
      disableGutters={disableGutters}
      button={button}
      component="div"
      onMouseEnter={handleListItemMouseEnter}
      onMouseLeave={handleListItemMouseLeave}
      {...props}
    >
      <ListItemIcon Icon={Icon} itemHovered={hovered} />
      {children}
    </ListItem>
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
  children: PropTypes.func.isRequired,
  Icon: PropTypes.func.isRequired,
};

export default DataListItem;
