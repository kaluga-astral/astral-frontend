// FIXME: need refactoring
import axios from 'axios';
import { merge } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { material } from '../../../icons';

import Field from '../Field';

const { CloudUpload } = material;

const onValueChange = onChange => (value) => {
  onChange(value);
};

class FileButtonField extends Component {
  state = { file: null };

  onAdd = onChange => ({ target: { files } }) => {
    const file = Array.from(files)[0];

    this.uploadFile(file, onChange);
  };

  onUploadDone = onChange => (response) => {
    const fileGuid = response.data;

    this.setState(
      prevState => ({
        file: merge({}, prevState.file, { fileGuid }),
      }),
      () => onChange(this.state.file.fileGuid),
    );
  };

  onUploadError = onChange => () => {
    onChange(this.state.file.fileGuid);
  };

  uploadFile = (file, onChange) => {
    const { url } = this.props;
    const formData = new FormData();
    formData.append('file', file);

    this.setState({ file }, () =>
      axios
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(this.onUploadDone(onChange))
        .catch(this.onUploadError(onChange)));
  };

  name = this.props.name || 'fileGuid';
  fileInput = React.createRef();

  render = () => {
    const {
      disabled, classes, accept, ...props
    } = this.props;
    const { file } = this.state;

    return (
      <Field {...props} name={this.name}>
        {({ input: { onChange } }) => (
          <Fragment>
            <button
              disabled={disabled}
              type="button"
              className={classes.button}
              onClick={() => this.fileInput.click()}
            >
              <CloudUpload className={classes.icon} />
              <p className={classes.buttonText}>{(file && file.name) || 'Загрузить файл'}</p>
            </button>
            <input
              accept={accept}
              type="file"
              className={classes.input}
              ref={(el) => {
                this.fileInput = el;
              }}
              multiple={false}
              onChange={this.onAdd(onValueChange(onChange))}
            />
          </Fragment>
        )}
      </Field>
    );
  };
}

FileButtonField.defaultProps = {
  disabled: false,
  url: '/api/files',
  name: null,
  accept: 'file/*',
};

FileButtonField.propTypes = {
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  url: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles({
  input: {
    display: 'none',
  },
  button: {
    height: '100%',
    fontSize: '14px',
    color: '#008BEC',
    fontWeight: 'bold',
    border: 'none',
    background: 'transparent',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    maxWidth: '200px',
    outline: 'none',
  },
  icon: {
    height: '20px',
    width: '20px',
    marginRight: '10px',
  },
  buttonText: {
    minWidth: '0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
})(FileButtonField);
