import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Form from './Form';
import SubmitButton from './SubmitButton';

class FormWizard extends React.Component {
  state = {
    page: 0,
    values: this.props.initialValues,
  };

  next = (values) => {
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));
  };

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[this.state.page];

    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  // eslint-disable-next-line
  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    }
    this.next(values);
  };

  render = () => {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Form
        className="form-wizard"
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {formProps =>
          activePage.props.children(formProps, {
            PrevButton: props => page > 0 && <Button onClick={this.previous} {...props} />,
            NextButton: !isLastPage && SubmitButton,
            SubmitButton: isLastPage && SubmitButton,
          })
        }
      </Form>
    );
  };
}

FormWizard.defaultProps = {
  initialValues: {},
};

FormWizard.propTypes = {
  initialValues: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const FormWizardPage = ({ children }) => children({ formProps: 'formProps' });

FormWizard.Page = FormWizardPage;

export default FormWizard;
