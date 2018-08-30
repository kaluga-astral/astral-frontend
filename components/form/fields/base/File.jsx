// FIXME: need refactoring
// FIXME: need rename to FileDropzone
import cn from 'classnames';
import axios from 'axios';
import { reduce, filter } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';

import Field from '../Field';
import Progress from '../../../status/Progress';
import { Upload as UploadIcon, File as FileIcon } from '../../../icons';

const onValueChange = (multiple, onChange) => (value) => {
  onChange(multiple ? [].concat(value) : value[0]);
};

class FileField extends Component {
  state = {
    files: [],
  };

  onDrop = onChange => (files) => {
    const currentLen = this.state.files.length;

    files.forEach((file, index) => this.uploadFile(file, currentLen + index, onChange));
  };

  onUploadProgress = index => (event) => {
    // eslint-disable-next-line
    const percentComplete = Math.round((event.loaded * 100) / event.total);

    this.setState(prevState => ({
      files: reduce(
        prevState.files,
        (result, value, i) =>
          result.concat(index === i
            ? {
              ...value,
              percentComplete,
            }
            : value),
        [],
      ),
    }));
  };

  onUploadDone = (index, onChange) => (response) => {
    const fileGuid = response.data;

    this.setState(
      prevState => ({
        files: reduce(
          prevState.files,
          (result, value, i) =>
            result.concat(index === i
              ? {
                ...value,
                status: 'success',
                fileGuid,
              }
              : value),
          [],
        ),
      }),
      () => onChange(this.state.files.map(f => f.fileGuid)),
    );
  };

  onUploadError = (index, onChange) => (error) => {
    this.setState(
      prevState => ({
        files: reduce(
          prevState.files,
          (result, value, i) =>
            result.concat(index === i
              ? {
                ...value,
                status: 'failure',
                errorMessage: error.response.data.message || error.message,
              }
              : value),
          [],
        ),
      }),
      () => onChange(this.state.files.map(f => f.fileGuid)),
    );
  };

  removeFile = (index, onChange) => () => {
    this.setState(
      prevState => ({
        files: filter(prevState.files, (v, i) => index !== i),
      }),
      () => onChange(this.state.files.map(f => f.fileGuid)),
    );
  };

  uploadFile = (file, index, onChange) => {
    const { url } = this.props;
    const formData = new FormData();
    formData.append('file', file);

    this.setState(
      prevState => ({
        files: prevState.files.concat({
          status: 'loading',
          errorMessage: null,
          fileGuid: null,
          percentComplete: 0,
          file,
        }),
      }),
      () =>
        axios
          .post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: this.onUploadProgress(index),
          })
          .then(this.onUploadDone(index, onChange))
          .catch(this.onUploadError(index, onChange)),
    );
  };

  name = this.props.name || (this.props.multiple ? 'fileGuids' : 'fileGuid');

  render = () => {
    const {
      disabled, multiple, classes, className, accept, ...props
    } = this.props;
    const { files } = this.state;

    return (
      <Field
        {...props}
        disabled={disabled}
        name={this.name}
        className={cn(classes.root, className)}
      >
        {({ input: { onChange } }) => (
          <Fragment>
            {((!multiple && files.length === 0) || multiple) && (
              <Dropzone
                accept={accept}
                disabled={disabled}
                multiple={multiple}
                className={classes.dropzone}
                onDrop={this.onDrop(onValueChange(multiple, onChange))}
              >
                <UploadIcon className={classes.dropzone__uploadIcon} />
                <span>Загрузить {multiple ? 'файлы' : 'файл'}</span>
              </Dropzone>
            )}
            {files.length > 0 && (
              <ul className={classes.filesList}>
                {files.map((file, index) => (
                  <li key={file.file.name} className={classes.filesListItem}>
                    <div className={classes.filesListItem__meta}>
                      <FileIcon className={classes.filesListItem__icon} />
                      <div className={classes.filesListItem__fileName}>{file.file.name}</div>
                      <button
                        className={classes.filesListItem__removeFileButton}
                        onClick={this.removeFile(index, onValueChange(multiple, onChange))}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.510967 9.99955C0.380116 9.99955 0.249265 9.9498 0.149763 9.84962C-0.0499209 9.64994 -0.0499209 9.32554 0.149763 9.12586L9.12601 0.149761C9.3257 -0.0499203 9.64942 -0.0499203 9.8491 0.149761C10.0488 0.349441 10.0488 0.673156 9.8491 0.872837L0.87217 9.84962C0.772669 9.9498 0.641818 9.99955 0.510967 9.99955Z"
                            transform="translate(0.00146484)"
                            fill="#C00000"
                          />
                          <path
                            d="M9.4879 9.99887C9.35705 9.99887 9.2262 9.94912 9.1267 9.84894L0.149763 0.872837C-0.0499212 0.673156 -0.0499212 0.349442 0.149763 0.149761C0.349447 -0.0499201 0.673168 -0.0499201 0.872852 0.149761L9.8491 9.12586C10.0488 9.32554 10.0488 9.64994 9.8491 9.84962C9.7496 9.94912 9.61875 9.99887 9.4879 9.99887Z"
                            transform="translate(0 0.00146484)"
                            fill="#C00000"
                          />
                        </svg>
                      </button>
                    </div>
                    <Progress
                      className={classes.filesListItem__progressBar}
                      variant="determinate"
                      value={file.percentComplete}
                    />
                  </li>
                ))}
              </ul>
            )}
          </Fragment>
        )}
      </Field>
    );
  };
}

FileField.defaultProps = {
  disabled: false,
  multiple: false,
  url: '/api/files',
  name: null,
  className: null,
  accept: 'file/*',
};

FileField.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string),
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  url: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    maxHeight: '300px',
  },
  filesList: {
    margin: '10px 0 0 0',
    padding: 0,
    listStyle: 'none',
    overflowY: 'scroll',
  },
  filesListItem: {
    marginBottom: '15px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  filesListItem__icon: {
    marginRight: '10px',
  },
  filesListItem__meta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  filesListItem__fileName: {
    marginRight: '10px',
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontWeight: 300,
    fontSize: '14px',
    color: theme.palette.common.black,
  },
  filesListItem__removeFileButton: {
    width: '10px',
    height: '10px',
    border: 0,
    padding: 0,
    margin: 0,
    background: 'inherit',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
  },
  filesListItem__progressBar: {
    borderRadius: '10px',
  },
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
    boxSizing: 'border-box',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#008BEC', // FIXME: цвета в тему
    cursor: 'pointer',
  },
  dropzone__uploadIcon: {
    height: '20px',
    marginRight: '10px',
    fill: '#008BEC', // FIXME: цвета в тему
  },
}))(FileField);
