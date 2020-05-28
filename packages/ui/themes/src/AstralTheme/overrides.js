import palette from './palette';
import shadows from './shadows';
import typography from './typography';

export default {
  MuiStepper: {
    root: {
      padding: '15px 0',
    },
  },
  MuiPaper: {
    root: {
      boxShadow: shadows[0],
    },
  },
  MuiTableCell: {
    root: {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
  MuiButtonBase: {
    root: {
      display: 'flex',
    },
  },
  MuiTooltip: {
    arrow: {
      color: palette.gray[900],
    },
    tooltip: {
      backgroundColor: palette.gray[900],
      color: 'white',
    },
    tooltipPlacementTop: {
      top: '6px',
    },
  },
  MuiTypography: {
    subtitle1: {
      fontSize: '18px',
      fontWeight: typography.fontWeightBold,
    },
  },
};
