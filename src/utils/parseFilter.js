import { MAP_ID } from 'data/constants';
const parseFilter =  (filter) => {
  return filter.reduce( (final, name) => {
    final[MAP_ID[name].type] = (final[MAP_ID[name].type] || '') + `${!!final[MAP_ID[name].type] ? ',' : ''}${MAP_ID[name].value}`;
    return  final
  }, {})  
}

export default parseFilter;