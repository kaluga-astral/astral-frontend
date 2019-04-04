/* eslint-disable jsx-a11y/html-has-lang */
import PropTypes from 'prop-types';
import React from 'react';

const Document = ({
  css, htmlAttrs, title, meta, link, bodyAttrs, staticAssets,
}) => (
  <html {...htmlAttrs}>
    <head>
      {title}
      {meta}
      {link}
      {/* TODO: replace by normaly favicon */}
      <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />
      {/* <style id="jss-server-side">{css}</style> */}
      <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: css }} />
    </head>
    <body {...bodyAttrs}>
      <div id="root" dangerouslySetInnerHTML={{ __html: '' }} />
      {staticAssets.js.map(staticAsset => (
        <script key={staticAsset.src} src={staticAsset.src} />
      ))}
    </body>
  </html>
);

Document.propTypes = {
  css: PropTypes.string.isRequired,
  htmlAttrs: PropTypes.shape({}).isRequired,
  title: PropTypes.node.isRequired,
  meta: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
  bodyAttrs: PropTypes.shape({}).isRequired,
  // rootMarkup: PropTypes.string.isRequired,
  staticAssets: PropTypes.shape({
    js: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default Document;
