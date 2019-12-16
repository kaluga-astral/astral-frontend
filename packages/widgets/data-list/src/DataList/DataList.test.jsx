/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@astral-frontend/components';
import { createMuiTheme } from '@astral-frontend/core';

import DataList from './DataList';

const EmptyState = () => <span>List is empty</span>;

const MockedTheme = ({ children }) => (
  <ThemeProvider
    theme={createMuiTheme({
      palette: {
        gray: {
          800: '#ccc',
        },
      },
    })}
  >
    {children}
  </ThemeProvider>
);

MockedTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

describe('<DataList />', () => {
  it('should render `EmptyStateComponent` when `items` is empty and `totalCount` is loading', async () => {
    const props = {
      pageSize: 15,
      columns: [
        { title: 'test0', component: () => null },
        { title: 'test1', component: () => null },
      ],
      dataQueryResult: {
        loading: false,
        called: true,
        data: { items: [] },
      },
      totalCountQueryResult: {
        loading: true,
        called: true,
        data: { totalCount: undefined },
      },
      EmptyStateComponent: EmptyState,
    };
    const wrapper = mount(
      <MockedTheme>
        <DataList {...props} />
      </MockedTheme>,
    );

    expect(
      wrapper
        .find(DataList)
        .children()
        .equals(<EmptyState />),
    ).toBeTruthy();
  });
  it('should render `EmptyStateComponent` when `items` is empty and `totalCount` is loaded', async () => {
    const props = {
      pageSize: 15,
      columns: [
        { title: 'test0', component: () => null },
        { title: 'test1', component: () => null },
      ],
      dataQueryResult: {
        loading: false,
        called: true,
        data: { items: [] },
      },
      totalCountQueryResult: {
        loading: false,
        called: true,
        data: { totalCount: 0 },
      },
      EmptyStateComponent: EmptyState,
    };
    const wrapper = mount(
      <MockedTheme>
        <DataList {...props} />
      </MockedTheme>,
    );

    expect(
      wrapper
        .find(DataList)
        .children()
        .equals(<EmptyState />),
    ).toBeTruthy();
  });
  it('should render `EmptyStateComponent` when `totalCount` is 0 and `items` is loading ', async () => {
    const props = {
      pageSize: 15,
      columns: [
        { title: 'test0', component: () => null },
        { title: 'test1', component: () => null },
      ],
      dataQueryResult: {
        loading: true,
        called: true,
        data: { items: [] },
      },
      totalCountQueryResult: {
        loading: false,
        called: true,
        data: { totalCount: 0 },
      },
      EmptyStateComponent: EmptyState,
    };
    const wrapper = mount(
      <MockedTheme>
        <DataList {...props} />
      </MockedTheme>,
    );

    expect(
      wrapper
        .find(DataList)
        .children()
        .equals(<EmptyState />),
    ).toBeTruthy();
  });
  it('should render `EmptyStateComponent` when `totalCount` is 0 and `items` is loaded ', async () => {
    const props = {
      pageSize: 15,
      columns: [
        { title: 'test0', component: () => null },
        { title: 'test1', component: () => null },
      ],
      dataQueryResult: {
        loading: false,
        called: true,
        data: { items: [] },
      },
      totalCountQueryResult: {
        loading: false,
        called: true,
        data: { totalCount: 0 },
      },
      EmptyStateComponent: EmptyState,
    };
    const wrapper = mount(
      <MockedTheme>
        <DataList {...props} />
      </MockedTheme>,
    );

    expect(
      wrapper
        .find(DataList)
        .children()
        .equals(<EmptyState />),
    ).toBeTruthy();
  });
});
