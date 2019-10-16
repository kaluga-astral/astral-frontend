import { makeStyles } from '@astral-frontend/styles';

import { getPopoverArrowStyles } from '../../utils/styles';

const LIST_ITEM_HOVER_BG_COLOR = '#F6F9FE';

const useProductsListStyles = makeStyles(() => ({
  container: {
    width: '100%',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  listItem: {
    overflow: 'hidden',
    '&:first-child': {
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,

      // стили для decorArrow
      '&:hover > span': {
        opacity: 1,
        zIndex: 1,
      },
    },
    '&:last-child': {
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
    },
  },
  // необходимо, чтобы при наведении на первый элемент списка стрелка поповера тоже окрашивалась
  // здесь поверх основной стрелки появляется новая с нужным цветом
  decorArrow: {
    ...getPopoverArrowStyles(LIST_ITEM_HOVER_BG_COLOR),
    opacity: 0,
    zIndex: -1,
    transition: 'opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
}));

const useProductListItemStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '22px 20px',
    textDecoration: 'none',
    transition: 'background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    '&:hover': {
      backgroundColor: LIST_ITEM_HOVER_BG_COLOR,
    },
  },
  icon: {
    boxSizing: 'content-box',
    padding: 7,
    marginRight: 20,
    width: 18,
    height: 18,
    backgroundColor: ({ backgroundHexColor }) => backgroundHexColor,
    borderRadius: '50%',
  },
  name: {
    margin: 0,
    fontSize: 14,
    lineHeight: '19px',
    color: theme.palette.text.primary,
  },
  description: {
    margin: 0,
    fontSize: 12,
    color: theme.palette.grey[600],
  },
}));

export { useProductsListStyles, useProductListItemStyles };
