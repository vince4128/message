import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createMessage } from '../../actions';

class MessageCreate extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div>{error}</div>;
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderTextArea = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <textarea {...input} autoComplete="off" rows="5" cols="33" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderCheckbox = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input type="checkbox" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createMessage(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Titre" />
        <Field name="body" component={this.renderTextArea} label="Message" />
        <Field
          name="confidential"
          component={this.renderCheckbox}
          label="Privé"
        />
        <button>Envoyer</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Saisissez un titre';
  }

  if (!formValues.body) {
    errors.body = 'Saisissez votre texte';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'messageCreate',
  validate: validate
})(MessageCreate);

export default connect(
  null,
  { createMessage }
)(formWrapped);
