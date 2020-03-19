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

const getProductsUrl = identityApiUrl => `${identityApiUrl}/Products/Widget`;
const getFileServiceUrl = identityApiUrl => `${identityApiUrl}/Files`;

const productsToClientAdapter = responseProducts =>
  responseProducts.filter(
    ({ productUrl }) => !productUrl.includes(window.location.hostname),
  );

export {
  getPopoverArrowStyles,
  getProductsUrl,
  getFileServiceUrl,
  productsToClientAdapter,
};
