const newTenderFields = [
  {
    label: 'Description',
    key: 'description',
    placeholder: 'Specify any particular requirements that you have...',
    inputType:'textarea',
    rows: 3
  },
  {
    label: 'Quantity',
    key: 'quantity',
    required: true,
    placeholder: 'Quantity',
    inputType:'text'
  },
  {
    label: 'Start Date',
    key: 'startDate',
    componentType:'datepicker',
    placeholder: 'Start Date',
  },
  {
    label: 'End Date',
    key: 'endDate',
    componentType:'datepicker',
    placeholder: 'End Date',
  },
]
export default newTenderFields;
