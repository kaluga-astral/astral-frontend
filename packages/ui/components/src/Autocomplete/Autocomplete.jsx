import PropTypes from 'prop-types';
import React from 'react';
import Downshift from 'downshift';

import { makeStyles } from '@astral-frontend/styles';

import TextField from '../TextField';
import InputAdornment from '../InputAdornment';
import IconButton from '../IconButton';
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
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        isOpen,
        clearSelection,
      }) => (
        <div className={classes.root}>
          <TextField
            multiline
            fullWidth
            type="text"
            margin="normal"
            InputProps={getInputProps({
              ...InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={clearSelection}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      preserveAspectRatio="none"
                      width={12}
                      fill="transparent"
                      stroke="#979797"
                      strokeWidth="1.1px"
                    >
                      <path d="M1,1 L19,19" />
                      <path d="M19,1 L1,19" />
                    </svg>
                  </IconButton>
                </InputAdornment>
              ),
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
  itemToString: item => {
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
