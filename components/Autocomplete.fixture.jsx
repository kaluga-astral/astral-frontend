import Autocomplete from './Autocomplete';

const items = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
];

export default [
  {
    component: Autocomplete,
    name: 'Автодополнение',
    props: {
      items,
      onChange: selectedItem => console.log('onChange', selectedItem),
      onInputValueChange: inputValue => console.log('onInputValueChange', inputValue),
    },
  },
];
