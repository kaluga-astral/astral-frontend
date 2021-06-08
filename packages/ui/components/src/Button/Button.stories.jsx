import React from 'react';
import { EditIcon } from '@astral-frontend/icons';

import Box from '../Box';

import Button, { BUTTON_SIZES, BUTTON_VARIANTS } from './Button';

const args = {
  children: 'Click me!',
  loading: false,
  disabled: false,
  variant: BUTTON_VARIANTS.text,
  size: BUTTON_SIZES.medium,
};

export default {
  title: 'components/Button',
  component: Button,
  args,
  argTypes: {
    variant: {
      options: Object.values(BUTTON_VARIANTS),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(BUTTON_SIZES),
      control: { type: 'select' },
    },
  },
};

// eslint-disable-next-line react/prop-types
const Template = ({ variant, ...props }) => (
  <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gridGap="20px">
    <Button {...props} variant={variant} />
    <Button {...props} startIcon={<EditIcon />} variant={variant} />
  </Box>
);

export const Default = Template.bind({});

export const Variants = props => (
  <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gridGap="20px">
    {Object.values(BUTTON_VARIANTS).map(variant => (
      <>
        <Button {...props} variant={variant}>
          {variant}
        </Button>
        <Button {...props} startIcon={<EditIcon />} variant={variant}>
          {variant}
        </Button>
      </>
    ))}
  </Box>
);

export const Sizes = props => (
  <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridGap="20px">
    {Object.values(BUTTON_SIZES).map(size => (
      <>
        <Button {...props} size={size}>
          {size}
        </Button>
        <Button {...props} startIcon={<EditIcon />} size={size}>
          {size}
        </Button>
      </>
    ))}
  </Box>
);

Sizes.args = { ...args, variant: 'regular' };
