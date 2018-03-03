import React, {Component} from 'react'
import {pick} from 'lodash'
import { Form, Button, Dropdown, Checkbox, TextArea } from 'semantic-ui-react'

const CheckboxField = (input, label) => {
  const {name, onBlur, onDragStart, onDrop, onFocus} = input
  const inputs = {
    name,
    onBlur,
    onDragStart,
    onDrop,
    onFocus,
    checked: input.value,
    onChange: (e, {checked}) => input.onChange(checked)
  }
  return (
    <div className='field'>
      <Checkbox {...inputs} label={label} />
    </div>
  )
}

const DropdownField = (input, placeholder, label, helpText='', options, touched, error) => {
  const optionsArray = options()
  const inputs =  {
    ...input,
    onBlur: (event, data) => input.onBlur(data.value),
    onChange: (event, data) => input.onChange(data.value)
  }
  return (
    <div className='field'>
      <label>{placeholder}</label>
      <Dropdown {...inputs} openOnFocus={false} multiple search selection options={optionsArray} placeholder={placeholder} error={!!(touched && error)} fluid />
      <div className='help-text text-right'>({helpText})</div>
    </div>
  )
}

const InputField = (input, placeholder, label, required, type, touched, error, rows) => {
  if( type === 'textarea')
    return (
      <Form.TextArea {...input} rows={rows} placeholder={placeholder} required={required} label={label} error={!!(touched && error)} />
    )
  else
    return (
      <Form.Input {...input} placeholder={placeholder} required={required} label={label} type={type} error={!!(touched && error)} />
    )
}

const renderSingleField = (input, componentType, attributes, touched, error) => {
  const {placeholder, label, required, type, options, rows, helpText} = attributes
  switch (componentType) {
    case 'dropdown':
      return DropdownField(input, placeholder, label, helpText, options, touched, error)

    case 'checkbox':
      return CheckboxField(input, label)

    default:
      return InputField(input, placeholder, label, required, type, touched, error, rows)
  }
}

const renderField = (props) => {
  const {input, componentType, placeholder, label, required, type, options,
     helpText, rows, meta} = props
  const {touched, error} = meta
  const attributes = { placeholder, label, required, type, options, helpText, rows}
  return (
    <div>
      { renderSingleField(input, componentType, attributes, touched, error) }
      { touched && error && <label className='error-block'>{error}</label> }
    </div>
  )
}


export default renderField;
