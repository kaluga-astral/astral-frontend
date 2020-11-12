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
  textWrapper: {
    overflow: 'hidden',
  },
  icon: {
    flexShrink: 0,
    boxSizing: 'content-box',
    marginRight: 20,
    width: 44,
    height: 44,
    backgroundColor: ({ backgroundHexColor }) => backgroundHexColor,
    borderRadius: 12,
    color: 'transparent',
  },
  name: {
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 14,
    fontStyle: 'bold',
    lineHeight: '19px',
    color: theme.palette.grey[900],
  },
}));
