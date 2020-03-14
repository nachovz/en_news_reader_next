import { DEVICE_WIDTH, IS_RETINA } from 'styles/constants';
export default (media_details) => {
  let images = [];
  Object.keys(media_details).forEach( sizeName => {
    if (IS_RETINA && sizeName.indexOf('_retina') >= 1){
      if(media_details[sizeName].width/2 <= DEVICE_WIDTH) images.push({sizeName, ...media_details[sizeName]});
    }
    if (!IS_RETINA && sizeName.indexOf('_retina') < 1){
      if(media_details[sizeName].width <= DEVICE_WIDTH) images.push({sizeName, ...media_details[sizeName]});
    }
  });
  
  return images.sort((a, b) => b.width - a.width)[0].source_url || "";
}