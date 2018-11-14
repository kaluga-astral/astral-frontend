import { uniq } from "lodash-es";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import Field from "./Field";

class FileButtonField extends Component {
  state = { file: null, error: null };

  fileInput = React.createRef();

  validate = () => {
    const { error } = this.state;

    return error && error.message;
  };

  handleInputChange = onChange => event => {
    const { uploadHook } = this.props;
    const file = Array.from(event.target.files)[0];
    const formData = new FormData();
    formData.append("file", file);

    uploadHook(formData)
      .then(fileGuid => {
        this.setState({ file, error: null }, () => {
          onChange(fileGuid);
        });
      })
      .catch(error => {
        this.setState({ file: null, error }, () => {
          onChange(uniq());
        });
      });
  };

  render = () => {
    const {
      classes,
      accept,
      buttonText,
      uploadHook,
      mapResponseToResult,
      renderButton,
      ...props
    } = this.props;
    const { file } = this.state;

    return (
      <Field {...props} validate={this.validate}>
        {({ input: { onChange, onBlur, onFocus } }) => (
          <Fragment>
            {renderButton(
              {
                type: "button",
                onBlur,
                onFocus,
                onClick: () => this.fileInput.current.click()
              },
              file
            )}
            <input
              multiple={false}
              type="file"
              accept={accept}
              className={classes.input}
              ref={this.fileInput}
              onChange={this.handleInputChange(onChange)}
            />
          </Fragment>
        )}
      </Field>
    );
  };
}

FileButtonField.defaultProps = {
  accept: null
};

FileButtonField.propTypes = {
  classes: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  accept: PropTypes.arrayOf(PropTypes.string),
  uploadHook: PropTypes.func.isRequired,
  renderButton: PropTypes.func.isRequired
};

export default withStyles({
  input: {
    display: "none"
  },
  icon: {
    height: "20px",
    width: "20px",
    marginRight: "10px"
  }
})(FileButtonField);
