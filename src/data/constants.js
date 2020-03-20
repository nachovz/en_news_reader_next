export const SITE_URL = 'https://www.elnacional.com';

//AD unit types
export const AD_BOX = 'box';
export const AD_BANNER = 'banner';

export const MAP_ID = {
  'principal-portada': {
    type: 'tags',
    value: 989
  },
  'ultima-hora': {
    type: 'tags',
    value: 990
  },
  'video-portada': {
    type: 'tags',
    value: 3451
  },
  'deportes': {
    type: 'categories',
    value: 36
  },
  'entretenimiento': {
    type: 'categories',
    value: 37
  },
  'mundo': {
    type: 'categories',
    value: 35
  },
  'venezuela': {
    type: 'categories',
    value: 290
  },
  'economia': {
    type: 'categories',
    value: 33
  },
  'ciencia-tecnologia': {
    type: 'categories',
    value: 295
  },
  'opinion': {
    type: 'categories',
    value: 38
  },
  'life-style	': {
    type: 'categories',
    value: 308
  }
};

export const menuElements = [
  {
    value: 'ultima-hora',
    tag: 'DESTACADO',
    slug: '/'
  },
  {
    value: 'venezuela',
    tag: 'VENEZUELA',
    slug: '/venezuela/'
  },
  {
    value: 'mundo',
    tag: 'MUNDO',
    slug: '/mundo/'
  },
  { 
    value: 'economia',
    tag: 'ECONOMÍA',
    slug: '/economia/'
  },
  {        
    value: 'deportes',
    tag: 'DEPORTES',
    slug: '/deportes/'
  },
  {
    value: 'ciencia-tecnologia',
    tag: 'CIENCIA Y TECNOLOGÍA',
    slug: '/ciencia-tecnologia/'        
  },
  {
    value: 'entretenimiento',
    tag: 'ENTRETENIMIENTO',
    slug: '/entretenimiento/'
  },        
  {
    value: 'opinion',
    tag: 'OPINIÓN',
    slug: '/opinion/'
  },        
  {
    value: 'life-style',
    tag: 'ESTILO DE VIDA',
    slug: '/life-style/'
  }
];

export const routes = {
  '': {
    value: 'ultima-hora',
    tag: 'DESTACADO'
  },
  'venezuela': {
    value: 'venezuela',
    tag: 'VENEZUELA' 
  },
  'mundo': {
    value: 'mundo',
    tag: 'MUNDO' 
  },
  'economia':{  
    value: 'economia',
    tag: 'ECONOMÍA' 
  },
  'deportes':{         
    value: 'deportes',
    tag: 'DEPORTES' 
  },
  'ciencia-tecnologia': {
    value: 'ciencia-tecnologia',
    tag: 'CIENCIA Y TECNOLOGÍA'        
  },
  'entretenimiento': {
    value: 'entretenimiento',
    tag: 'ENTRETENIMIENTO' 
  },        
  'opinion': {
    value: 'opinion',
    tag: 'OPINIÓN' 
  },        
  'life-style': {
    value: 'life-style',
    tag: 'ESTILO DE VIDA'
  }
}