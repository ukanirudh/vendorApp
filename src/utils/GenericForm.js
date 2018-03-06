import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import ReduxForm from './ReduxForm'
import validate from './postTenderValidation'
import formRoutes from '../constants/form-routes'
import { CreateBrowserHistory } from '../commonComponents'

const Form = (props) => {
  return <ReduxForm formFields={props.formFields} />
}

export const EntityForm = ({name, onUpdate, type, fields}) => reduxForm({
  form: name,
  validate,
  onSubmit: onUpdate,
  onSubmitSuccess: (result, dispatch, props) => {
    const {form} = props
    console.log(formRoutes)
    CreateBrowserHistory.push({
      pathname: formRoutes[form]
    })
  },
  onSubmitFail : (errors, submitError, props) => {console.log(errors, submitError, props)},
  formFields: fields
})(Form)
