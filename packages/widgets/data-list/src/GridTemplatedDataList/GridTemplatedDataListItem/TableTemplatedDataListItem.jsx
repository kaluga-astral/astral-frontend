import { xorBy } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ListItem, FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { DataListContext, DataListItemContext } from '../../DataList';
import TableTemplatedDataListItemDefaultSelector from './TableTemplatedDataListItemDefaultSelector';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      minHeight: '70px',
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
      '&:hover $selector': {
        display: 'block',
      },
      '&:hover $icon': {
        display: 'none',
      },
    },
    icon: {},
    selector: {
      display: 'none',
    },
    checked: {
      display: 'block',
    },
    hidden: {
      display: 'none',
    },
  }),
  { name: 'TableTemplatedDataListItem' },
);

const TableTemplatedDataListItem = ({
  className,
  Icon,
  Selector,
  children,
  ...props
}) => {
  const classes = useStyles();
  const { selectedItems, setSelectedItems } = React.useContext(DataListContext);
  const { data } = React.useContext(DataListItemContext);
  const checked = selectedItems.find(
    selectedItem => selectedItem.id === data.id,
  );
  const handleSelectorChange = () => {
    setSelectedItems(prevSelectedItems => {
      return xorBy(prevSelectedItems, [data], 'id');
    });
  };

  return (
    <ListItem
      className={cn(classes.root, className)}
      component="div"
      {...props}
    >
      <FlexContainer justifyContent="center">
        <Icon className={cn(classes.icon, { [classes.hidden]: checked })} />
        <Selector
          className={classes.selector}
          classes={{
            checked: classes.checked,
          }}
          checked={checked}
          onChange={handleSelectorChange}
        />
      </FlexContainer>
      {children}
    </ListItem>
  );
};

TableTemplatedDataListItem.defaultProps = {
  className: null,
  disableGutters: true,
  button: false,
  Icon: () => <div />,
  Selector: TableTemplatedDataListItemDefaultSelector,
};

TableTemplatedDataListItem.propTypes = {
  className: PropTypes.string,
  disableGutters: PropTypes.bool,
  button: PropTypes.bool,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  ).isRequired,
  Icon: PropTypes.func,
  Selector: PropTypes.func,
};

export default TableTemplatedDataListItem;
