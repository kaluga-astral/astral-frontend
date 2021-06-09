import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import { Link as MuiLink } from '@astral/core';

const Link = React.forwardRef((props, ref) => (
  <MuiLink ref={ref} component={RRLink} {...props} />
));

export default Link;
