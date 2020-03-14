import React from 'react';

export default  ({ src,
  srcSet,
  alt,
  fallbackSrc,
  isLazy=false,
  onClick=()=>{},
  style }) => (
    <img
      src={isLazy ? fallbackSrc : src}
      alt={alt}
      className={isLazy ? 'lazy' : ''}
      srcSet={isLazy ? '' : srcSet}
      data-srcset={srcSet}
      data-src={src}
      style={style}
      onClick={onClick}
    />
  )
