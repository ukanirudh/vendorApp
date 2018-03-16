const newTenderFields = [
  {
    key: 'description',
    placeholder: 'Specify any particular requirements that you have...',
    inputType:'textarea',
    rows: 3
  },
  {
    key: 'quantity',
    required: true,
    icon:'cubes',
    placeholder: 'Quantity',
    inputType:'text'
  },
  {
    key: 'startDate',
    componentType:'datepicker',
    placeholder: 'Start Date',
  },
  {
    key: 'endDate',
    componentType:'datepicker',
    placeholder: 'End Date',
  },
]
export default newTenderFields;
