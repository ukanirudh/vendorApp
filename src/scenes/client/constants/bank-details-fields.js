const bankInfoFields = [
  {
    key: 'bankName',
    icon:'user',
    name: 'bankName',
    inputType:'text',
    placeholder:'Bank name',
  },
  {
    key: 'bankBranch',
    required: true,
    icon:'building outline',
    placeholder:'Branch',
    name:'bankBranch',
    inputType:'text',
  },
  {
    key: 'ifscCode',
    required: true,
    icon:'building outline',
    placeholder:'IFSC Code',
    name:'ifscCode',
    inputType:'text',
  },
  {
    key: 'accountNumber',
    icon:'address card outline',
    name:'accountNumber',
    placeholder:'Accont number',
    inputType:'text',
  },
  {
    icon:'universal access',
    name:'gstNumber',
    key: 'gstNumber',
    placeholder: 'Gst in',
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
export default bankInfoFields;
