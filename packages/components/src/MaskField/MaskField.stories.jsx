/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import MaskField from './MaskField';

storiesOf('packages/components/MaskField', module)
  .add('default', () => <MaskField label="HEX" mask="#******" />)
  .add('without maskChar', () => (
    <MaskField label="HEX" mask="#*****0*" maskChar={null} />
  ));
