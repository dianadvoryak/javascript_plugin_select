import {Select} from './select/select'

const select = new Select('#select', {
  placeholder: 'Select element',
  selectedId: null,
  data: [
    {id: '1', value: 'JavaScript'},
    {id: '2', value: 'Python'},
    {id: '3', value: 'С++'},
    {id: '4', value: 'PHP'},
    {id: '5', value: 'Go'},
    {id: '6', value: 'React'},
    {id: '7', value: 'Kotlin'},
    {id: '8', value: 'Vue'},
  ],
  onSelect(item){
    console.log(item)
  }
})

window.s = select