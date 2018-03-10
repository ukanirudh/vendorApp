const basicInfoFields = [
  {
      key: 'username',
      icon:'mail',
      iconPosition:'left',
      name: 'username',
      inputType:'text'

  },
  {
    
    key: 'name',
    required: true,
    icon:'user',
    iconPosition:'left',
    placeholder:'Name',
    name:'name',
    inputType:'text',
   

  },
  {
  
    key: 'phone',
    icon:'phone',
    iconPosition:'left',
    name:'phone',
    placeholder:'Phone number',
    inputType:'text',
    
  },
  {
    icon:'phone',
    iconPosition:'left',
    name:'address',
    key: 'address',
    placeholder: 'Address',
    inputType:'textarea',
    rows: 3,
    
  },
]
export default basicInfoFields;
