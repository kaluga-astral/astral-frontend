import React from 'react';
import { CircularProgress } from '@astral/core';

const Loader = props => <CircularProgress thickness={2} {...props} />;

export default Loader;
