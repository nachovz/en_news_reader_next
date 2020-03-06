export const retinaDevice = true;//window.devicePixelRatio > 1;

export const logoSize = () =>{
  return retinaDevice ? '/logo_en@2x.png' : '/logo_en.png';
}