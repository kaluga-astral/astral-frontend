import { merge } from 'lodash-es';

import Theme from '../Theme';

import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import overrides from './overrides';

class AstralTheme extends Theme {
  constructor(options) {
    super(merge({}, { palette, typography, shadows, overrides }, options));
  }
}

export default AstralTheme;
