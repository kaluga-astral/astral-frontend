import { uniq } from 'lodash-es';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Field from './Field';

class FileButtonField extends Component {
  state = {
    file: null,
    meta: { isFetching: false, error: null, percentComplete: 0 },
  };

  fileInput = React.createRef();

  validate = () => {
    const {
      meta: { error },
    } = this.state;

    return error && error.message;
  };

  handleUploadProgress = (event) => {
    this.setState(prevState => ({
      ...prevState,
      meta: {
        ...prevState.meta,
        percentComplete: (event.loaded / event.total) * 100,
      },
    }));
  };

  handleInputChange = onChange => (event) => {
    const { uploadHook } = this.props;
    const file = Array.from(event.target.files)[0];
    const formData = new FormData();
    formData.append('file', file);

    this.setState({ file, meta: { isFetching: true, error: null, percentComplete: 0 } }, () => {
      uploadHook(formData, this.handleUploadProgress)
        .then((fileGuid) => {
          this.setState(
            prevState => ({
              ...prevState,
              meta: { ...prevState.meta, isFetching: false, error: null },
            }),
            () => {
              onChange(fileGuid);
            },
          );
        })
        .catch((error) => {
          this.setState(
            prevState => ({
              ...prevState,
              meta: { ...prevState.meta, isFetching: false, error },
            }),
            () => {
              onChange(uniq());
            },
          );
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
    const { file, meta } = this.state;

    return (
      <Field {...props} validate={this.validate}>
        {({ input: { onChange, onBlur, onFocus } }) => (
          <Fragment>
            {renderButton(
              {
                type: 'button',
                onBlur,
                onFocus,
                onClick: () => this.fileInput.current.click(),
              },
              file,
              meta,
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
  accept: null,
};

FileButtonField.propTypes = {
  classes: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  accept: PropTypes.arrayOf(PropTypes.string),
  uploadHook: PropTypes.func.isRequired,
  renderButton: PropTypes.func.isRequired,
};

export default withStyles({
  input: {
    display: 'none',
  },
  icon: {
    height: '20px',
    width: '20px',
    marginRight: '10px',
  },
})(FileButtonField);
