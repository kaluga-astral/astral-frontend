import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '../IconButton';
import Tooltip from '../Tooltip';

const CopyToClipboardIconButton = ({
  text,
  tooltipProps,
  iconButtonProps,
  children,
}) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setTooltipOpen(true);
      setTimeout(() => {
        setTooltipOpen(false);
      }, 500);
    });
  }, [text]);

  return (
    <Tooltip open={tooltipOpen} {...tooltipProps}>
      <IconButton {...iconButtonProps} onClick={handleClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

CopyToClipboardIconButton.defaultProps = {
  tooltipProps: {
    title: 'Скопировано',
    placement: 'right',
  },
  iconButtonProps: null,
};

CopyToClipboardIconButton.propTypes = {
  text: PropTypes.string.isRequired,
  tooltipProps: PropTypes.shape({
    title: PropTypes.string,
    placement: PropTypes.oneOf([
      'bottom-end',
      'bottom-start',
      'bottom',
      'left-end',
      'left-start',
      'left',
      'right-end',
      'right-start',
      'right',
      'top-end',
      'top-start',
      'top',
    ]),
  }),
  iconButtonProps: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

export default CopyToClipboardIconButton;
