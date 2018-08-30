import React from 'react';
import Layout from './Layout';
import Header from './Header';
import Main from './Main';

const LayoutDemo = () => (
  <Layout>
    <Header>
      <Header.Brand productName="Личный кабинет" />
    </Header>
    <Main>12</Main>
  </Layout>
);

export default [
  {
    component: LayoutDemo,
  },
];
