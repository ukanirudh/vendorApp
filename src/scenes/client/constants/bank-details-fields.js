const bankInfoFields = [
  {
      key: 'bankname',
      icon:'mail',
      iconPosition:'left',
      name: 'bankname',
      inputType:'text',
      placeholder:'Bank name',
  },
  {
    
    key: 'branch',
    required: true,
    icon:'user',
    iconPosition:'left',
    placeholder:'Branch',
    name:'branch',
    inputType:'text',
   

  },
  {
  
    key: 'accontnumber',
    icon:'phone',
    iconPosition:'left',
    name:'accontnumber',
    placeholder:'Accont number',
    inputType:'text',
    
  },
  {
    icon:'phone',
    iconPosition:'left',
    name:'gst',
    key: 'gst',
    placeholder: 'Gst in',
    inputType:'text',
    
  },
]
export default bankInfoFields;
