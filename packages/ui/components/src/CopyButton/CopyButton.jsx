import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '../IconButton';
import CopyButtonCopyIcon from './CopyButtonCopyIcon';

const CopyButton = ({ nodeRef, ...props }) => {
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
    <IconButton {...props} onClick={handleClick}>
      <CopyButtonCopyIcon />
    </IconButton>
  );
};

CopyButton.propTypes = {
  nodeRef: PropTypes.shape({
    current: PropTypes.node.isRequired,
  }).isRequired,
};

export default CopyButton;
