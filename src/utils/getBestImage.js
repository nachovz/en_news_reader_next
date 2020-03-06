export default (media_details) => {
  let images = [];
  Object.keys(media_details).forEach( sizeName => {
    const retinaDevice = window.devicePixelRatio > 1;
    if (retinaDevice && sizeName.indexOf('_retina')){
      if(media_details[sizeName].width/2 <= document.documentElement.clientWidth) images.push({sizeName, ...media_details[sizeName]});
    }
    if (!retinaDevice && !sizeName.indexOf('_retina')){
      if(media_details[sizeName].width <= document.documentElement.clientWidth) images.push({sizeName, ...media_details[sizeName]});
    }
  });
  return images.sort((a, b) => b.width - a.width)[0].source_url || "";
}