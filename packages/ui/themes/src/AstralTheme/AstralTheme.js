import { merge } from 'lodash-es';

import Theme from '../Theme';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

class AstralTheme extends Theme {
  constructor(options) {
    super(merge({}, { palette, typography, overrides }, options));
  }
}

export default AstralTheme;
