import { makeStyles } from '@astral-frontend/styles';

import { getPopoverArrowStyles } from '../utils';

import { LIST_ITEM_HOVER_BG_COLOR } from '../constants';

export default makeStyles(() => ({
  container: {
    width: '100%',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  listItem: {
    overflow: 'hidden',
    '&:first-child': {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,

      // стили для decorArrow
      '&:hover > span': {
        opacity: 1,
        zIndex: 1,
      },
    },
    '&:last-child': {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
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
