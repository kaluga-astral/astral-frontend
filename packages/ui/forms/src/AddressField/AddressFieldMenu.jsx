import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem, Paper } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const FormAddressFieldMenu = ({
  classes,
  isOpen,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  suggestions,
}) => (
  <div {...getMenuProps()}>
    {isOpen && (
      <Paper className={classes.paper}>
        {suggestions.map((suggestion, index) => {
          const itemProps = getItemProps({ item: suggestion });
          const selected = highlightedIndex === index;

          return (
            <MenuItem {...itemProps} key={suggestion.value} selected={selected} component="div">
              {suggestion.value}
            </MenuItem>
          );
        })}
      </Paper>
    )}
  </div>
);

FormAddressFieldMenu.defaultProps = {
  suggestions: [],
  highlightedIndex: null,
};

FormAddressFieldMenu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  getMenuProps: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  getItemProps: PropTypes.func.isRequired,
  highlightedIndex: PropTypes.number,
  suggestions: PropTypes.arrayOf(PropTypes.shape({})),
};

export default withStyles(theme => ({
  root: {},
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
}))(FormAddressFieldMenu);
