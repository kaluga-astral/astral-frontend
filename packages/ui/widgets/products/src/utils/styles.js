const getPopoverArrowStyles = color => ({
  position: 'absolute',
  fontSize: 7,
  top: '9px !important',
  left: '6px !important',
  width: '1em',
  height: '3em',
  marginLeft: '-0.9em',
  '&::before': {
    borderColor: `transparent ${color} transparent transparent`,
    borderWidth: '1em 1em 1em 0',
    width: 0,
    height: 0,
    margin: 'auto',
    content: '""',
    display: 'block',
    borderStyle: 'solid',
  },
});

// eslint-disable-next-line
export { getPopoverArrowStyles };
