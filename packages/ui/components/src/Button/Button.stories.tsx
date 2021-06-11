import React from 'react';
import { EditIcon } from '@astral-frontend/icons';

import Box from '../Box';

import Button, { ButtonProps, ButtonSizes, ButtonVariants } from './Button';

const args = {
  children: 'Click me!',
  loading: false,
  disabled: false,
  variant: ButtonVariants.TEXT,
  size: ButtonSizes.MEDIUM,
};

export default {
  title: 'components/Button',
  component: Button,
  args,
  argTypes: {
    variant: {
      options: Object.values(ButtonVariants),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(ButtonSizes),
      control: { type: 'select' },
    },
  },
};

const Template = ({ variant, ...props }: ButtonProps) => (
  <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gridGap="20px">
    <Button {...props} variant={variant} />
    <Button {...props} startIcon={<EditIcon />} variant={variant} />
  </Box>
);

export const Default = Template.bind({});

export const Variants = (props: ButtonProps) => (
  <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gridGap="20px">
    {Object.values(ButtonVariants).map(variant => (
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

export const Sizes = (props: ButtonProps) => (
  <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridGap="20px">
    {Object.values(ButtonSizes).map(size => (
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
