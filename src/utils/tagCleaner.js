import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import AdUnit from 'component/ui/AdUnit';
import { DEVICE_WIDTH } from 'styles/constants';

export default (ren, type='title') => {
  const parsed = ReactHtmlParser(
    ren.replace(/style="text-align: justify;"/g, '')
      .replace(/&#171;/g, '“<em>')
      .replace(/&#187;/g,'</em>”')
      .replace(/<p><iframe/g,'<iframe')
      .replace(/\/iframe><\/p>/g,'/iframe>')
      .replace(/width="[0-9]*"/g, `width="100%"`)
      .replace(/height="[0-9]*"/g, `height="250px"`)
      .replace(/style="width: [0-9]*px"/g, `style="width:100%"`)
      .replace(/src/g,`data-src`)
      .replace(/srcset/g,`data-srcset`)
      .replace(/http:\/\/www.elnacional.com/g, `https://www.elnacional.com`)
  );
  
  if(type==='title') return parsed;

  let withAds = [];
  
  parsed.forEach( (node, ind) => {
    const inset = (ind+1) % 3 === 0;
    const top = !!node.type.match(/h2|iframe|h3|h4|h5|h6/);
    if(top && inset){
      withAds.push(<AdUnit key={`ad_${ind}`} />)
    }
    withAds.push(node);
    if(!top && inset) {
      withAds.push(<AdUnit key={`ad_${ind}`} />)
    }
  })

  return withAds;
}