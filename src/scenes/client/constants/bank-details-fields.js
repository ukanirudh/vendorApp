const bankInfoFields = [
  {
      key: 'bankname',
      icon:'user',
      name: 'bankname',
      inputType:'text',
      placeholder:'Bank name',
  },
  {
    key: 'branch',
    required: true,
    icon:'building outline',
    placeholder:'Branch',
    name:'branch',
    inputType:'text',
  },
  {
    key: 'accontnumber',
    icon:'address card outline',
    name:'accontnumber',
    placeholder:'Accont number',
    inputType:'text',
  },
  {
    icon:'universal access',
    name:'gst',
    key: 'gst',
    placeholder: 'Gst in',
    inputType:'text',
  },
]
export default bankInfoFields;
