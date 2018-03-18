import React, {Component} from 'react'
import {pick, isEmpty} from 'lodash'
import { Form, Button, Dropdown, Checkbox, TextArea } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

const DatePickerComponent = (input, placeholder, label, touched, error) => {
  // const inputs =  {
  //   ...input,
  //   onBlur: (event, data) => input.onBlur(data.value),
  //   onChange: (event, data) => input.onChange(data.value)
  // }

  const selectedValue = input.value ? moment(input.value) : null
  return (
    <div className='field'>
      <label>{label}</label>
      <DatePicker
      {...input}
      selected={selectedValue}
      placeholderText={placeholder} />
    </div>
  )
}

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
  //const optionsArray = options()
  const inputs =  {
    ...input,
    onBlur: (event, data) => input.onBlur(data.value),
    onChange: (event, data) => input.onChange(data.value)
  }
  return (
    <div className='field'>
      <label>{placeholder}</label>
      <Dropdown {...inputs} openOnFocus={false} multiple search selection options={options} placeholder={placeholder} error={!!(touched && error)} fluid />
    </div>
  )
}

const InputField = (input, placeholder, label, required, type, disabled, icon, touched, error, rows) => {
  if( type === 'textarea')
    return (
      <Form.TextArea {...input} rows={rows} placeholder={placeholder} required={required} label={label} error={!!(touched && error)} />
    )
  else
    return (
      <Form.Input
      icon={icon} iconPosition='left' disabled={disabled}
       {...input} placeholder={placeholder} required={required} label={label} type={type} error={!!(touched && error)} />
    )
}

const renderSingleField = (input, componentType, attributes, touched, error) => {
  const {placeholder, label, required, type, disabled, options, icon, rows, helpText} = attributes
  switch (componentType) {
    case 'dropdown':
      return DropdownField(input, placeholder, label, helpText, options, touched, error)

    case 'checkbox':
      return CheckboxField(input, label)

    case 'datepicker':
      return DatePickerComponent(input, placeholder, label, touched, error)

    default:
      return InputField(input, placeholder, label, required, type, disabled, icon, touched, error, rows)
  }
}

const renderField = (props) => {
  const {input, componentType, placeholder, label, required, type, options, disabled,
     helpText, icon, rows, meta} = props
  const {touched, error} = meta
  const attributes = { placeholder, label, required, type, disabled, options, icon, helpText, rows}
  return (
    <div className='input-with-error'>
      { renderSingleField(input, componentType, attributes, touched, error) }
      { touched && error && <label className='error-block'>{error}</label> }
    </div>
  )
}


export default renderField;
