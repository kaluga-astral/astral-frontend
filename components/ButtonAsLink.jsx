import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const ButtonAsLink = props => <Button component={Link} {...props} />;

export default ButtonAsLink;
