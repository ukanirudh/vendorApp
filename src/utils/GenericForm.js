import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import ReduxForm from './ReduxForm'
import validate from './postTenderValidation'


const Form = (props) => {
  return <ReduxForm formFields={props.formFields} />
}

export const EntityForm = ({name, onUpdate, type, fields}) => reduxForm({
  form: name,
  validate,
  onSubmit: onUpdate,
  onSubmitFail : (errors, submitError, props) => {console.log(errors, submitError, props)},
  formFields: fields
})(Form)
