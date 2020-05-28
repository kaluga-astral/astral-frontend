import { merge } from 'lodash-es';

import Theme from '../Theme';
import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import overrides from './overrides';
import props from './props';

class AstralTheme extends Theme {
  constructor(options) {
    super(
      merge(
        {},
        { spacing: 4, palette, typography, shadows, overrides, props },
        options,
      ),
    );
  }
}

export default AstralTheme;
