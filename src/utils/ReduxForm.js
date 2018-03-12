import React from 'react'
import { Field } from 'redux-form';
import { Form, Button } from 'semantic-ui-react'
import InputWithErrors from './InputWithErrors'

const ReduxForm = (props) => {
	const { formFields} = props
  const renderedFeilds = formFields.map((field, index) => {
  	const {key, options, inputType, placeholder, label,
			 required, componentType, rows, helpText, icon} = field
        return (
          <Field
              name={key}
              component={InputWithErrors}
              options={options}
              type={inputType}
              placeholder={placeholder}
              label={label}
              required={required}
              componentType={componentType}
              key={index}
              rows={rows}
              icon={icon}
              helpText={helpText}
            />
        )
      })
	return (
    <Form className='simple reduxFromGeneric' size='large'>
      {renderedFeilds}
    </Form>
  )
}

export default ReduxForm
