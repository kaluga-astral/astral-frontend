import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Footer, {
  FooterInfo,
  FooterSection,
  FooterSectionItem,
  FooterCopyright,
} from './index';

storiesOf('Layouts/Home', module).add('Footer', () => (
  <MemoryRouter initialEntries={['/']}>
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
  </MemoryRouter>
));
