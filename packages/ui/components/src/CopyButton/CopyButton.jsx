import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '../IconButton';
import Tooltip from '../Tooltip';
import CopyButtonCopyIcon from './CopyButtonCopyIcon';

const CopyButton = ({ nodeRef, tooltipProps, iconButtonProps }) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const handleClick = React.useCallback(() => {
    const range = document.createRange();
    const selection = window.getSelection();
    const currentRange =
      selection.rangeCount === 0 ? null : selection.getRangeAt(0);

    range.selectNodeContents(nodeRef.current);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand('copy');
      setTooltipOpen(true);
      setTimeout(() => {
        setTooltipOpen(false);
      }, 500);
    } catch {
      console.error('Unable to copy selection');
    } finally {
      selection.removeAllRanges();
      if (currentRange) {
        selection.addRange(currentRange);
      }
    }
  }, [nodeRef]);

  return (
    <Tooltip
      title="Скопировано"
      open={tooltipOpen}
      placement="right"
      {...tooltipProps}
    >
      <IconButton {...iconButtonProps} onClick={handleClick}>
        <CopyButtonCopyIcon />
      </IconButton>
    </Tooltip>
  );
};

CopyButton.defaultProps = {
  tooltipProps: null,
  iconButtonProps: null,
};

CopyButton.propTypes = {
  nodeRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  tooltipProps: PropTypes.shape({}),
  iconButtonProps: PropTypes.shape({}),
};

export default CopyButton;
