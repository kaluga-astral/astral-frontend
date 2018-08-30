import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const LinkAsButton = props => <Button component={Link} {...props} />;

export default LinkAsButton;
