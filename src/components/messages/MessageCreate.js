import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createMessage } from '../../actions';

/**
 * This component return a form for the creation of a message using redux-form to connect the form to the redux store.
 *
 * There is 3 Field :
 * *Title*, the title of the message
 * *Body*, the body of the message
 * *Confidential*, a Boolean value to indicate the privacy of the message
 *
 * each type field as a render method
 *
 * a *renderError()* and *validate()* help to keep a record of the validity of the form and inform the user if it is incomplete
 *
 */

class MessageCreate extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="o-form__error">{error}</div>;
    }
  };

  renderInput = ({ input, label, meta, placeholder }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} placeholder={placeholder} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderTextArea = ({ input, label, meta, placeholder }) => {
    return (
      <div>
        <label>{label}</label>
        <textarea
          {...input}
          placeholder={placeholder}
          autoComplete="off"
          rows="4"
          cols="33"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderCheckbox = ({ input, label, meta, id }) => {
    return (
      <div>
        <label className="label--inline" htmlFor={id}>
          {label}
        </label>
        <input type="checkbox" {...input} id={id} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createMessage(formValues);
  };

  render() {
    return (
      <React.Fragment>
        <div className="m-message-controls">
          <Link to={'/'}>
            <button className="a-button a-button--light a-button--lg a-button--direction a-button--shadow">
              ‹
            </button>
            Retour
          </Link>
        </div>
        <form
          className="o-form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <fieldset>
            <h2>Nouveau message</h2>
            <Field
              name="title"
              component={this.renderInput}
              label="Titre"
              placeholder="Titre de votre message"
            />
            <Field
              name="body"
              component={this.renderTextArea}
              label="Message"
              placeholder="Votre message"
            />
            <Field
              name="confidential"
              component={this.renderCheckbox}
              value="true"
              label="Ce message est privé"
              id="privacy"
            />
          </fieldset>
          <fieldset>
            <button
              onClick={() => {
                this.props.reset();
              }}
              type="button"
              className="a-button a-button--md a-button--primary"
              disabled={this.props.pristine || this.props.submitting}
            >
              Reset
            </button>
            <button
              type="submit"
              className="a-button a-button--md a-button--secondary"
              disabled={this.props.invalid}
            >
              Envoyer
            </button>
          </fieldset>
        </form>
      </React.Fragment>
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
