/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { DocumentIcon, DocumentIconError } from '@astral-frontend/icons';

import IconTableCell from './IconTableCell';

storiesOf('packages/components/IconTableCell', module)
  .add('indeterminateLoading', () => (
    <IconTableCell
      loading
      selected={false}
      error={false}
      percentCompleted={null}
      Icon={DocumentIcon}
      ErrorIcon={DocumentIcon}
    />
  ))
  .add('determinateLoading', () => {
    const [loadingPercent, setLoadingPercent] = React.useState(10);
    React.useEffect(() => {
      setInterval(() => {
        setLoadingPercent(prevPercent =>
          prevPercent > 99 ? 0 : prevPercent + 10,
        );
      }, 300);
    }, []);

    return (
      <IconTableCell
        loading
        selected={false}
        error={false}
        percentCompleted={loadingPercent}
        Icon={DocumentIcon}
        ErrorIcon={DocumentIconError}
      />
    );
  })
  .add('success', () => (
    <IconTableCell
      loading={false}
      selected={false}
      error={false}
      percentCompleted={100}
      Icon={DocumentIcon}
      ErrorIcon={DocumentIconError}
    />
  ))
  .add('error', () => (
    <IconTableCell
      loading={false}
      selected={false}
      error
      percentCompleted={null}
      Icon={DocumentIcon}
      ErrorIcon={DocumentIconError}
    />
  ))
  .add('selected', () => (
    <IconTableCell
      loading={false}
      selected
      error={false}
      percentCompleted={100}
      Icon={DocumentIcon}
      ErrorIcon={DocumentIconError}
    />
  ));
