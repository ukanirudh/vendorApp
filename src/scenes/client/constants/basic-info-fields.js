const basicInfoFields = [
  {
    key: 'username',
    icon:'mail',
    name: 'username',
    inputType:'text'

  },
  {
    key: 'name',
    required: true,
    icon:'user',
    placeholder:'Name',
    name:'name',
    inputType:'text',
  },
  {
    key: 'phone',
    icon:'phone',
    name:'phone',
    placeholder:'Phone number',
    inputType:'text',
  },
  {
    icon:'phone',
    name:'address',
    key: 'address',
    placeholder: 'Address',
    inputType:'textarea',
    rows: 3,
  },
]
export default basicInfoFields;
