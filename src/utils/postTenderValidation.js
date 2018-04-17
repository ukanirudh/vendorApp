const validate = values => {
  const errors = {}
  if (!values.quantity) {
    errors.quantity = 'Quantity needs to be specified'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.description) {
    errors.description = 'Description is Mandatory'
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required'
  }
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.bankName) {
    errors.bankName = 'Required'
  }
  if (!values.ifscCode) {
    errors.ifscCode = 'Required'
  }
  if (!values.bankBranch) {
    errors.bankBranch = 'Required'
  }
  if (!values.address) {
    errors.address = 'Required'
  }
  if (!values.gstNumber) {
    errors.gstNumber = 'Required'
  }
  if (!values.accountNumber) {
    errors.accountNumber = 'Required'
  }

  // if (values.contact_no && !values.contact_no.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/)) {
  //   errors.contact_no = 'Invalid contact number'
  // }

  // if (!values.capacity) {
  //   errors.capacity = 'Required'
  // } else if (isNaN(Number(values.capacity))) {
  //   errors.capacity = 'Please enter a number'
  // } else if ( values.capacity <= 0 ) {
  //   errors.capacity = 'Minimum capacity must be 1.'
  // } else if ( values.capacity > 1000000 ) {
  //   errors.capacity = 'Maximum capacity must be 1000000.'
  // }
  return errors
}

export default validate;
