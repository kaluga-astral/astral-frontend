import React from 'react';
import { storiesOf } from '@storybook/react';

import SvgIcon from '../SvgIcon';
import IconTableCell from './IconTableCell';

storiesOf('IconTableCell', module)
  .add('indeterminateLoading', () => (
    <IconTableCell
      loading={true}
      selected={false}
      error={false}
      percentCompleted={null}
      Icon={SvgIcon}
      ErrorIcon={SvgIcon}
      {/* onChange={handleIconTableCellChange} */}
    />
  ))
  .add('determinateLoading', () => {
    let loadingPercent = 1;
    setInterval(() => loadingPercent = loadingPercent > 90 ? 1 : loadingPercent + 10, 300);

    return (
      <IconTableCell
        loading={true}
        selected={false}
        error={false}
        percentCompleted={null}
        Icon={SvgIcon}
        ErrorIcon={SvgIcon}
      />
    )
  })
  .add('success', () => (
    <IconTableCell
      loading={false}
      selected={false}
      error={false}
      percentCompleted={100}
      Icon={SvgIcon}
      ErrorIcon={SvgIcon}
    />
  ))
  .add('error', () => (
    <IconTableCell
      loading={false}
      selected={false}
      error={true}
      percentCompleted={null}
      Icon={SvgIcon}
      ErrorIcon={SvgIcon}
    />
  ))
  .add('selected', () => (
    <IconTableCell
      loading={false}
      selected={true}
      error={false}
      percentCompleted={100}
      Icon={SvgIcon}
      ErrorIcon={SvgIcon}
    />
  ))
