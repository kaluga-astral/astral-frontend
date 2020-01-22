import React from 'react';
import PropTypes from 'prop-types';

import DefaultSelector from './DataListItemDefaultSelector';
import DataListContext from '../../DataListContext';
import DataListItemContext from '../DataListItemContext';
import useDataListManager from '../../useDataListManager';

const DataListItemIcon = ({ Icon, SelectorComponent, itemHovered }) => {
  const { dataItem } = React.useContext(DataListItemContext);
  const { selectedItems, disableSelect } = React.useContext(DataListContext);
  const { toggleItemSelector } = useDataListManager(DataListContext);

  const itemSelected = React.useMemo(
    () =>
      selectedItems.map(selectedItem => selectedItem.id).includes(dataItem.id),
    [selectedItems],
  );
  const handleSelectorChange = React.useCallback(() => {
    toggleItemSelector(dataItem);
  }, [itemSelected]);

  const shouldSelectorComponentBeRendered =
    !disableSelect && (itemHovered || itemSelected);

  return (
    <div>
      {shouldSelectorComponentBeRendered ? (
        <SelectorComponent
          selected={itemSelected}
          onChange={handleSelectorChange}
        />
      ) : (
        <Icon />
      )}
    </div>
  );
};

DataListItemIcon.defaultProps = {
  itemHovered: false,
  SelectorComponent: DefaultSelector,
};

DataListItemIcon.propTypes = {
  itemHovered: PropTypes.bool,
  Icon: PropTypes.func.isRequired,
  /*
   * SelectorComponent - компонент, который
   * отобразится, если selected = true
   */
  SelectorComponent: PropTypes.func,
};

export default DataListItemIcon;
