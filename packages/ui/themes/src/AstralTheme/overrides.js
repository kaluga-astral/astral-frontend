import palette from './palette';

export default {
  MuiStepper: {
    root: {
      padding: '15px 0',
    },
  },
  MuiPaper: {
    root: {
      boxShadow: 'none',
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
};
