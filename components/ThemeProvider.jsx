import PropTypes from 'prop-types';
import { create } from 'jss';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import BaseCss from './BaseCSS';

const insertionPoint = 'insertion-point-jss';
const styleNode = document.createComment(insertionPoint);
const generateClassName = createGenerateClassName();
const jss = create(
  jssPreset({
    insertionPoint,
  }),
);

document.head.insertBefore(styleNode, document.head.firstChild);

const ThemeProvider = ({ theme, children }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <BaseCss />
      {children}
    </MuiThemeProvider>
  </JssProvider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
