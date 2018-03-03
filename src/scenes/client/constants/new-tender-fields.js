//import staticData from '../utils/static-data'
const addRoomFields = [
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
  // {
  //   label: 'Meeting Type',
  //   key: 'activities',
  //   componentType:'dropdown',
  //   placeholder: 'Meeting Type',
  //   options: () => {}
  // },
]
export default addRoomFields;
