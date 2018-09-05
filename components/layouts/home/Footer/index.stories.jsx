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
      <Footer.Container>
        <FooterInfo onSearch={action('Searched')} />
        <FooterSection title="Section">
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
        </FooterSection>
        <FooterSection title="Section">
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
        </FooterSection>
        <FooterSection title="Section">
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
          <FooterSectionItem to="/">Product link</FooterSectionItem>
        </FooterSection>
      </Footer.Container>
      <FooterCopyright onQuestionClick={action('Question button clicked')} />
    </Footer>
  </MemoryRouter>
));
