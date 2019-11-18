/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from './Layout';

storiesOf('packages/dashboard-layout/Layout', module).add('default', () => (
  <Layout>
    <ul>
      Контейнер-обертка, которая выполняет несколько функций:
      <li>расположение элементов на странице</li>
      <li>хранит состояние сайдбара</li>
    </ul>
  </Layout>
));
