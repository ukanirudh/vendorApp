import React from 'react'
import { Field } from 'redux-form';
import { Form, Button } from 'semantic-ui-react'
import InputWithErrors from './InputWithErrors'

const ReduxForm = (props) => {
	const { formFields} = props
  const renderedFeilds = formFields.map((field, index) => {
  	const {key, options, inputType, placeholder, label,
			 required, componentType, rows, helpText} = field
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
              helpText={helpText}
            />
        )
      })
	return (
    <Form className='simple' size='large'>
      {renderedFeilds}
    </Form>
  )
}

export default ReduxForm
