import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

class Autocomplete extends PureComponent {
  renderInput = (InputProps) => {
    const { classes, renderInput } = this.props;

    if (renderInput) {
      return renderInput(InputProps);
    }

    return (
      <TextField
        fullWidth
        InputProps={{
          classes: {
            root: classes.inputRoot,
          },
          ...InputProps,
        }}
      />
    );
  };

  renderSuggestions = ({ getItemProps, highlightedIndex }) => {
    const { classes, items } = this.props;

    return (
      <Paper className={classes.paper} square>
        {items.map((item, index) => {
          const itemProps = getItemProps({ item });
          const isSelected = highlightedIndex === index;

          return (
            <MenuItem {...itemProps} key={item.label} selected={isSelected} component="div">
              {item.label}
            </MenuItem>
          );
        })}
      </Paper>
    );
  };

  render = () => {
    const {
      classes, className, placeholder, ...props
    } = this.props;

    return (
      <Downshift {...props} itemToString={item => (item ? item.label : '')}>
        {({ getInputProps, isOpen, ...downshiftState }) => (
          <div className={cn(classes.root, className)}>
            {this.renderInput(getInputProps({ placeholder }))}
            {isOpen && this.renderSuggestions(downshiftState)}
          </div>
        )}
      </Downshift>
    );
  };
}

Autocomplete.defaultProps = {
  placeholder: null,
  className: null,
  renderInput: null,
};

Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  className: PropTypes.string,
  renderInput: PropTypes.func,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    zIndex: 1,
    left: 0,
    right: 0,
  },
}))(Autocomplete);
