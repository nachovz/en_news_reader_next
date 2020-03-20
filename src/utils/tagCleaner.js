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
      .replace(/<blockquote/g,`<div class="wrapped-content"><blockquote`)
      .replace(/<\/blockquote>/g,`</blockquote></div>`)

  );
  
  if(type==='title') return parsed;

  let withAds = [];
  let paragraphs = 1;
  parsed.forEach( (node, ind) => {
    const inset = paragraphs % 4 === 0;
    const top = !!node.type.match(/h2|iframe|h3|h4|h5|h6/);
    const isP = node.type === 'p';
    if(isP){
      if(top && inset){
        withAds.push(<AdUnit key={`ad_${ind}`} />)
      }
      withAds.push(node);
      if(!top && inset) {
        withAds.push(<AdUnit key={`ad_${ind}`} />)
      }
      paragraphs++;
    }else{
      withAds.push(node);
    }
  })

  return withAds;
}