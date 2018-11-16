import PropTypes from 'prop-types';
import React from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

export const Context = React.createContext();

const Dialog = ({ onClose, ...props }) => (
  <Context.Provider value={{ onClose }}>
    <MuiDialog {...props} onClose={onClose} />
  </Context.Provider>
);

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default withStyles({
  root: {},
  paper: {
    borderRadius: '2px',
  },
})(Dialog);
