import palette from './palette';
import shadows from './shadows';

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
      fontFamily: 'inherit',
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
    gutterBottom: {
      marginBottom: '0.75em',
    },
  },

  MuiFormControl: {
    root: {
      marginTop: 0,
      marginBottom: '15px',
      paddingBottom: '20px',
    },
    marginNormal: {
      marginBottom: 0,
    },
  },

  MuiFormHelperText: {
    root: {
      position: 'absolute',
      minHeight: '24px',
      marginTop: '4px',
      top: 'calc(100% - 22px)',
    },
  },

  MuiInputLabel: {
    root: {
      '&$disabled': {
        opacity: 0.7,
      },
    },

    outlined: {
      transform: 'translate(16px, 17px) scale(1)',

      // 16px
      fontSize: '1.142rem',
    },

    shrink: {
      transform: 'translate(14px, -5px) scale(0.75)',
    },
  },

  MuiInputBase: {
    root: {
      // 16px
      fontSize: '1.142rem',
      color: palette.gray[900],

      '&::placeholder': {
        fontSize: '1rem',
        color: palette.gray[600],
      },
    },
  },

  MuiOutlinedInput: {
    input: {
      padding: '15px 16px',
    },

    notchedOutline: {
      borderColor: palette.gray[500],
    },
  },
};
