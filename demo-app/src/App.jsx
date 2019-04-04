import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { SvgIcon } from '@astral-frontend/components';
import {
  ActionButton,
  Layout,
  Container,
  Content,
  ContentNav,
  CurrentUserInfo,
  Product,
  PageTitle,
  Header,
  HeaderSearch,
  Sidebar,
  SidebarNav,
  SidebarNavLink,
  SidebarNavDropdown,
  Main,
  MainPaper,
  MainModal,
} from '@astral-frontend/dashboard-layout';

const ActionButtonIcon = props => (
  <SvgIcon viewBox="0 0 32 32" {...props}>
    <circle cx="16" cy="16" r="16" fill="white" />
    <path
      d="M10.25 15.25H15.25V10.25C15.25 10.1119 15.3619 10 15.5 10H16.5C16.6381 10 16.75 10.1119 16.75 10.25V15.25H21.75C21.8881 15.25 22 15.3619 22 15.5V16.5C22 16.6381 21.8881 16.75 21.75 16.75H16.75V21.75C16.75 21.8881 16.6381 22 16.5 22H15.5C15.3619 22 15.25 21.8881 15.25 21.75V16.75H10.25C10.1119 16.75 10 16.6381 10 16.5V15.5C10 15.3619 10.1119 15.25 10.25 15.25Z"
      fill="#4E30C7"
    />
  </SvgIcon>
);

const Icon = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </SvgIcon>
);

const App = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
    </Helmet>

    <Layout>
      <Header>
        <Product title="Lorem ipsum" />
        <PageTitle>Входящие</PageTitle>
        <HeaderSearch />
        <div style={{ padding: '0 15px' }}>organization-selector</div>
      </Header>

      <Container>
        <Sidebar>
          <ActionButton
            Icon={ActionButtonIcon}
            text="Vivamus at odio aliquam"
          />
          <SidebarNav>
            <SidebarNavLink
              to="/section-1"
              Icon={Icon}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            />
            <SidebarNavLink
              to="/section-2"
              Icon={Icon}
              text="Proin rutrum lectus"
            />
            <SidebarNavLink to="/section-3" Icon={Icon} text="Morbi ex odio" />
            <SidebarNavDropdown
              Icon={Icon}
              text="Aliquam sit amet ultrices erat"
            >
              <SidebarNavDropdown.Item
                to="/section-4-1"
                text="Aenean molestie"
              />
              <SidebarNavDropdown.Item
                to="/section-4-2"
                text="Donec velit ex"
              />
            </SidebarNavDropdown>
            <SidebarNavDropdown
              Icon={Icon}
              text="Nullam non dui a magna pellentesque volutpat"
            >
              <SidebarNavDropdown.Item
                to="/section-5-1"
                text="Phasellus convallis mauris"
              />
              <SidebarNavDropdown.Item
                to="/section-5-2"
                text="Suspendisse bibendum orci in neque fringilla, vitae gravida enim vulputate"
              />
              <SidebarNavDropdown.Item
                to="/section-5-3"
                text="Fusce vel mauris vestibulum"
              />
            </SidebarNavDropdown>
          </SidebarNav>

          <CurrentUserInfo avatarAlt="UU" userName="User" userRole="Role" />
        </Sidebar>

        <Content>
          <ContentNav>
            <Switch>
              <Route
                path="*"
                render={() => (
                  <ul>
                    <li>All 120</li>
                    <li>Special one 20</li>
                    <li>Normal one 120</li>
                  </ul>
                )}
              />
            </Switch>
          </ContentNav>

          <Main>
            <Switch>
              <Route
                path="*"
                render={() => <MainPaper>MainPaperContent</MainPaper>}
              />
            </Switch>

            <Switch>
              <Route
                path="/section-3"
                render={() => <MainModal>MainModalContent</MainModal>}
              />
            </Switch>
          </Main>
        </Content>
      </Container>
    </Layout>
  </>
);

export default App;
