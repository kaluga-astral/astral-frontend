import { uniq } from 'lodash-es';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Field from '../Field';
import AppButton from '../../../Button';

class FileButtonField extends Component {
  state = { file: null, error: null };

  fileInput = React.createRef();

  validate = () => {
    const { error } = this.state;

    return error && error.message;
  };

  handleInputChange = onChange => (event) => {
    const { uploadHook } = this.props;
    const file = Array.from(event.target.files)[0];
    const formData = new FormData();
    formData.append('file', file);

    uploadHook(formData)
      .then(({ result }) => {
        this.setState({ file }, () => {
          onChange(result);
        });
      })
      .catch((error) => {
        this.setState({ error }, () => {
          onChange(file);
        });
      });
  };

  render = () => {
    const {
      classes, accept, uploadHook, buttonText, Button, ...props
    } = this.props;
    const { file } = this.state;
    console.log(file);

    return (
      <Field {...props} validate={this.validate}>
        {({ input: { onChange, onBlur, onFocus } }) => (
          <Fragment>
            <Button
              type="button"
              onBlur={onBlur}
              onFocus={onFocus}
              onClick={() => this.fileInput.current.click()}
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="currentColor"
                style={{ marginRight: '10px' }}
              >
                <path d="M7.96739 10.6312C7.95245 10.6287 7.9375 10.625 7.92391 10.6213C7.76223 10.5878 7.6481 10.4549 7.65217 10.3034V1.22209L5.46739 3.21918C5.41712 3.26513 5.35326 3.29742 5.28261 3.3086C5.23641 3.31729 5.1875 3.31729 5.1413 3.3086C5.01087 3.28748 4.90625 3.20055 4.86957 3.08504C4.83288 2.9683 4.87092 2.8441 4.96739 2.76213L7.70652 0.268265C7.73234 0.232248 7.76495 0.20244 7.80435 0.178843L8 0L8.19565 0.178843C8.20652 0.185052 8.21739 0.191262 8.22826 0.198714L8.25 0.218586C8.25 0.222312 8.25 0.224795 8.25 0.228521C8.25815 0.234731 8.26495 0.240941 8.27174 0.248393L11.0326 2.76213C11.1712 2.88881 11.1712 3.0925 11.0326 3.21918C10.894 3.34586 10.6712 3.34586 10.5326 3.21918L8.34783 1.22209V10.3034C8.34783 10.3133 8.34783 10.3232 8.34783 10.3332C8.34783 10.3431 8.34783 10.353 8.34783 10.363C8.34375 10.3866 8.3356 10.4102 8.32609 10.4325C8.31929 10.44 8.3125 10.4462 8.30435 10.4524C8.2962 10.4735 8.28533 10.4934 8.27174 10.512C8.26495 10.5195 8.25815 10.5257 8.25 10.5319C8.23913 10.5393 8.22826 10.5455 8.21739 10.5517C8.1481 10.6076 8.05842 10.6362 7.96739 10.6312ZM0 10.5026V12.4103C0 13.2834 0.783967 14 1.73913 14H14.2609C15.216 14 16 13.2834 16 12.4103V10.5026H15.3043V12.4103C15.3043 12.9369 14.837 13.3641 14.2609 13.3641H1.73913C1.16304 13.3641 0.695652 12.9369 0.695652 12.4103V10.5026H0Z" />
              </svg>
              <span>{buttonText}</span>
            </Button>
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
  buttonText: 'Загрузить текст',
  Button: AppButton,
};

FileButtonField.propTypes = {
  classes: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  accept: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  // Button: PropTypes.onOfType([PropTypes.string, PropTypes.func]),
  uploadHook: PropTypes.func.isRequired,
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
