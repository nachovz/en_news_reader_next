export const HEADER_HEIGHT = 36;
export const HEADER_WIDTH = 105;
export const HEADER_CALC = 53;
export const SPACING = 8;
export const TEXT_SPACING = 20;
export const DEVICE_WIDTH = typeof window !== 'undefined' ? document.documentElement.clientWidth: 300;
export const IS_RETINA = typeof window !== 'undefined' && window.devicePixelRatio > 1;
export const COLORS = {
  text: '#060606',
  text_light:'#505050',
  text_dark: '#a0a0a0',
  text_contrast: '#ffffff', 
  primary: '#011689',
  border: '#dcdcdc',
  background: '#ffffff',
  background_dark: '#f3f3f3',
  background_darkest: '#0d0d0d'
}
export const BORDER_STYLE = `1px solid ${COLORS.border}`;
export const PLACEHOLDER_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";