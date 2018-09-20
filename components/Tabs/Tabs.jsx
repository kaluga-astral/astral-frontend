import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

const Tabs = props => <MuiTabs {...props} />;

Tabs.defaultProps = {
  indicatorColor: 'primary',
};

export default withStyles({
  root: {},
})(Tabs);
