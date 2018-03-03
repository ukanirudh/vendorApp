const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }

  if (values.contact_no && !values.contact_no.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/)) {
    errors.contact_no = 'Invalid contact number'
  }

  if (!values.capacity) {
    errors.capacity = 'Required'
  } else if (isNaN(Number(values.capacity))) {
    errors.capacity = 'Please enter a number'
  } else if ( values.capacity <= 0 ) {
    errors.capacity = 'Minimum capacity must be 1.'
  } else if ( values.capacity > 1000000 ) {
    errors.capacity = 'Maximum capacity must be 1000000.'
  }
  return errors
}

export default validate;
