import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HomeLayout, { Footer, Main } from './index';
import { FooterInfo, FooterSection, FooterSectionItem, FooterCopyright } from './Footer';

storiesOf('Layouts/Home', module).add('Layout', () => (
  <MemoryRouter initialEntries={['/']}>
    <HomeLayout>
      <Main>
        Content
      </Main>
      <Footer>
        <FooterInfo onSearch={action('Searched')} />
        <FooterSection title="Section">
          <FooterSectionItem name="Product link" place="/" />
          <FooterSectionItem name="Product link" place="/" />
          <FooterSectionItem name="Product link" place="/" />
          <FooterSectionItem name="Product link" place="/" />
          <FooterSectionItem name="Product link" place="/" />
          <FooterSectionItem name="Product link" place="/" />
          <FooterSectionItem name="Product link" place="/" />
          <FooterSectionItem name="Product link" place="/" />
          <FooterSectionItem name="Product link" place="/" />
        </FooterSection>
        <FooterSection title="Section">
          <FooterSectionItem name="Support link" place="/" />
          <FooterSectionItem name="Support link" place="/" />
          <FooterSectionItem name="Support link" place="/" />
          <FooterSectionItem name="Support link" place="/" />
          <FooterSectionItem name="Support link" place="/" />
        </FooterSection>
        <FooterSection title="Section">
          <FooterSectionItem name="About link" place="/" />
          <FooterSectionItem name="About link" place="/" />
          <FooterSectionItem name="About link" place="/" />
          <FooterSectionItem name="About link" place="/" />
          <FooterSectionItem name="About link" place="/" />
          <FooterSectionItem name="About link" place="/" />
          <FooterSectionItem name="About link" place="/" />
          <FooterSectionItem name="About link" place="/" />
        </FooterSection>
        <FooterCopyright onQuestionClick={action('Question button clicked')} />
      </Footer>
    </HomeLayout>
  </MemoryRouter>
));
