import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';

import { makeStyles } from '@astral-frontend/styles';

import TextField from '../TextField';
import ListItem from '../ListItem';
import Paper from '../Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

const Autocomplete = ({
  suggestions,
  selectedItem,
  itemToString,
  onInputValueChange,
  onChange,
  // ======MUITextFieldProps=====
  InputProps,
  ...MUITextFieldProps
}) => {
  const classes = useStyles();

  return (
    <Downshift
      selectedItem={selectedItem}
      itemToString={itemToString}
      onInputValueChange={onInputValueChange}
      onChange={onChange}
    >
      {({
        getInputProps, getItemProps, getMenuProps, highlightedIndex, isOpen,
      }) => (
        <div className={classes.root}>
          <TextField
            fullWidth
            type="text"
            margin="normal"
            InputProps={getInputProps({
              ...InputProps,
            })}
            {...MUITextFieldProps}
          />
          <div {...getMenuProps()}>
            {isOpen && (
            <Paper className={classes.paper}>
              {suggestions.map((suggestion, index) => {
                const itemProps = getItemProps({ item: suggestion });
                const selected = highlightedIndex === index;

                return (
                  <ListItem
                    {...itemProps}
                    key={suggestion.key}
                    selected={selected}
                    component="div"
                  >
                    {suggestion.label}
                  </ListItem>
                );
              })}
            </Paper>
            )}
          </div>
        </div>
      )}
    </Downshift>
  );
};

Autocomplete.defaultProps = {
  selectedItem: null,
  InputProps: null,
  itemToString: (item) => {
    if (!item) {
      return '';
    }

    return item.label;
  },
};

Autocomplete.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      key: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  selectedItem: PropTypes.any,
  itemToString: PropTypes.func,
  onInputValueChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  InputProps: PropTypes.shape({}),
};

export default Autocomplete;
