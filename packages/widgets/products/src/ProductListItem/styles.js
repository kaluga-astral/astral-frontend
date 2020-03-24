import { makeStyles } from '@astral-frontend/styles';

import { LIST_ITEM_HOVER_BG_COLOR } from '../constants';

export default makeStyles(theme => ({
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
    color: 'transparent',
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
