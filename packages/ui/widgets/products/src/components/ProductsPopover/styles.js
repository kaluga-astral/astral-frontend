import { makeStyles } from '@astral-frontend/styles';

import { getPopoverArrowStyles } from '../../utils/styles';

export default makeStyles(() => ({
  arrow: getPopoverArrowStyles('#ffffff'),
  popoverContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 300,
    // для того, чтобы стрелка поповера не заезжала на anchor
    marginLeft: 6,
    minHeight: 80,
    borderRadius: 2,
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
}));
