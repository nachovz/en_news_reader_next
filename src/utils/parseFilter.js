import { MAP_ID } from 'data/constants';
export default (filter) => {
  return filter.reduce( (final, name) => {
    final[MAP_ID[name].type] = (final[MAP_ID[name].type] || '') + `${!!final[MAP_ID[name].type] ? ',' : ''}${MAP_ID[name].value}`;
    return  final
  }, {})  
}