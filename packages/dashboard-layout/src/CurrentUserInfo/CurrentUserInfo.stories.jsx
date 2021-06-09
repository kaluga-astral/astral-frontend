/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';

import { ArrowIcon } from '../../../icons/src';
import Sidebar from '../Sidebar';
import Layout from '../Layout';
import AsideNav from '../AsideNav';

import CurrentUserInfo from './CurrentUserInfo';

storiesOf('packages/dashboard-layout/CurrentUserInfo', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <StaticRouter location="/">
          <AsideNav />
          <CurrentUserInfo avatarAlt="UN" userName="template@mail.com">
            <CurrentUserInfo.Item
              Icon={ArrowIcon}
              text="Выйти"
              onClick={() => alert('SignOut callback')}
            />
          </CurrentUserInfo>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
