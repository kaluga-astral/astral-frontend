import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Layout from './Layout';
import Aside from './Aside';
import Main from './Main';

storiesOf('Layouts/Account/Layout', module)
  .add('with product description', () => (
    <MemoryRouter initialEntries={['/']}>
      <Layout>
        <Aside
          productName="Astral.HR"
          productDescription="Описание, много букв. Медиапланирование детерминирует креатив. Осведомленность о бренде
раскручивает институциональный ребрендинг. Conversion rate категорически изменяет пул лояльных изданий."
        />
        <Main>
          <Main.Title>Вход</Main.Title>
          <div>123</div>
        </Main>
      </Layout>
    </MemoryRouter>
  ))
  .add('without product description', () => (
    <MemoryRouter initialEntries={['/']}>
      <Layout>
        <Aside productName="Astral.HR" />
        <Main>
          <Main.Title>Вход</Main.Title>
          <div>123</div>
        </Main>
      </Layout>
    </MemoryRouter>
  ));
