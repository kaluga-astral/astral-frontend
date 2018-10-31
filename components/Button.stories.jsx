import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => {
    const disabled = boolean('disabled', false);
    const children = text('children', 'Default text');
    const variant = select(
      'variant',
      {
        flat: 'flat',
        rounded: 'rounded',
      },
      'flat',
    );
    const color = select(
      'color',
      {
        primary: 'primary',
        secondary: 'secondary',
      },
      'primary',
    );
    const size = select(
      'size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
    );

    return (
      <Button
        disabled={disabled}
        variant={variant}
        color={color}
        size={size}
        onClick={action('clicked')}
      >
        {children}
      </Button>
    );
  })
  .add('with icon', () => {
    const disabled = boolean('disabled', false);
    const variant = select(
      'variant',
      {
        flat: 'flat',
        rounded: 'rounded',
        float: 'float',
      },
      'flat',
    );
    const color = select(
      'color',
      {
        primary: 'primary',
        secondary: 'secondary',
      },
      'primary',
    );
    const size = select(
      'size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
    );

    return (
      <Button
        disabled={disabled}
        variant={variant}
        color={color}
        size={size}
        onClick={action('clicked')}
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
          <path d="M0.3125 6.5625H6.5625V0.3125C6.5625 0.139844 6.70234 0 6.875 0H8.125C8.29766 0 8.4375 0.139844 8.4375 0.3125V6.5625H14.6875C14.8602 6.5625 15 6.70234 15 6.875V8.125C15 8.29766 14.8602 8.4375 14.6875 8.4375H8.4375V14.6875C8.4375 14.8602 8.29766 15 8.125 15H6.875C6.70234 15 6.5625 14.8602 6.5625 14.6875V8.4375H0.3125C0.139844 8.4375 0 8.29766 0 8.125V6.875C0 6.70234 0.139844 6.5625 0.3125 6.5625Z" />
        </svg>
      </Button>
    );
  })
  .add('with icon and text', () => {
    const disabled = boolean('disabled', false);
    const variant = select(
      'variant',
      {
        flat: 'flat',
        rounded: 'rounded',
      },
      'flat',
    );
    const color = select(
      'color',
      {
        primary: 'primary',
        secondary: 'secondary',
      },
      'primary',
    );
    const size = select(
      'size',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
    );

    return (
      <Button
        disabled={disabled}
        variant={variant}
        color={color}
        size={size}
        onClick={action('clicked')}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="currentColor"
          style={{ marginRight: '10px' }}
        >
          <path d="M0.3125 6.5625H6.5625V0.3125C6.5625 0.139844 6.70234 0 6.875 0H8.125C8.29766 0 8.4375 0.139844 8.4375 0.3125V6.5625H14.6875C14.8602 6.5625 15 6.70234 15 6.875V8.125C15 8.29766 14.8602 8.4375 14.6875 8.4375H8.4375V14.6875C8.4375 14.8602 8.29766 15 8.125 15H6.875C6.70234 15 6.5625 14.8602 6.5625 14.6875V8.4375H0.3125C0.139844 8.4375 0 8.29766 0 8.125V6.875C0 6.70234 0.139844 6.5625 0.3125 6.5625Z" />
        </svg>
        <span>Default text</span>
      </Button>
    );
  });
