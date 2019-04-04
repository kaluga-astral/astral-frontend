import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { makeServer } from '@astral-frontend/server';
import { Document } from '@astral-frontend/components';
import { ThemeProvider, SheetsRegistry, createGenerateClassName } from '@astral-frontend/styles';
import { AstralEDOTheme } from '@astral-frontend/themes';

import App from './App';

const theme = new AstralEDOTheme();

const server = makeServer({
  renderDocumentToStream: ({ request, staticAssets, routerContext }) => {
    const sheetsRegistry = new SheetsRegistry();
    const sheetsManager = new Map();
    const generateClassName = createGenerateClassName();
    const rootMarkup = renderToString(
      <ThemeProvider
        theme={theme}
        sheetsRegistry={sheetsRegistry}
        sheetsManager={sheetsManager}
        generateClassName={generateClassName}
      >
        <StaticRouter location={request.url} context={routerContext}>
          <App />
        </StaticRouter>
      </ThemeProvider>,
    );
    const css = sheetsRegistry.toString();
    const helmet = Helmet.renderStatic();
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return renderToNodeStream(
      <Document
        css={css}
        htmlAttrs={htmlAttrs}
        title={helmet.title.toComponent()}
        meta={helmet.meta.toComponent()}
        link={helmet.link.toComponent()}
        bodyAttrs={bodyAttrs}
        rootMarkup={rootMarkup}
        staticAssets={staticAssets}
      />,
    );
  },
});

// TODO: PORT from process.env or cli
server.listen(3001, '0.0.0.0', () => {
  console.info('Server listening on 0.0.0.0:3001');
});

if (module.hot) {
  console.log('HERE-0');
  module.hot.accept('./App', () => {
    console.log('HERE-1');
  });
}
