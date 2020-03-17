import React, { useState, useEffect } from 'react';
import { Skeleton } from 'component/ui/Skeleton';
import getBestImage from 'utils/images/getBestImage';
import tagCleaner from 'utils/tagCleaner';
import { unicodeToChar } from 'utils/textUtil';
import { NextSeo } from 'next-seo';
import { TEXT_SPACING, COLORS, PLACEHOLDER_IMAGE } from 'styles/constants';

const styles = {
  article:{
      minHeight:'100vh',
      borderBottom:`${TEXT_SPACING}px solid ${COLORS.primary}`  
  },
  paddedContent:{
    color: COLORS.text,
    marginLeft: '20px',
    marginRight: '20px',
    width: `calc(100% - ${TEXT_SPACING*2}px)`,
    maxWidth: '600px',
    fontSize: '1.125rem',
    paddingTop: TEXT_SPACING
  },
  figure: {
    marginTop: TEXT_SPACING,
    marginBottom: TEXT_SPACING
  },
  skeleton_content:{
      marginTop: TEXT_SPACING,
      lineHeight:'1.5em' 
  }
};

const yoastProcess = (yoast_meta) =>{
  return yoast_meta.reduce( ( final, meta) => {
    final[(meta.name || meta.property || 'key')] = (meta.content || 'value');
    return final;
  }, {} );
}

export default ({ title, content, _embedded, excerpt, yoast_title, yoast_meta, yoast_json_ld, ...props }) => {
  const [ client, setClient ] = useState(typeof window !== 'undefined');
  //console.log( yoastProcess(yoast_meta));
  yoast_meta = yoastProcess(yoast_meta);
  return (
    <article style={styles.article}>
      <NextSeo
        title={yoast_title || ''}
        description={yoast_meta.description || ''}
        openGraph={{
          type: yoast_meta['og:type'],
          url: 'https://www.example.com/page',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-2.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt 2',
            },
          ],
        }}
      />
      <header style={styles.paddedContent}>
        <h1>{!!title ?
            tagCleaner(title.rendered) 
            : 
            <span style={styles.skeleton_content}>
              <Skeleton/>
            </span>
        }</h1>
      </header>
      {!!_embedded ? 
        <figure style={styles.figure}> 
            {!!client &&
              <img 
                src={PLACEHOLDER_IMAGE}
                data-src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
                alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
            }
            <figcaption>
              {tagCleaner(_embedded["wp:featuredmedia"]["0"].title.rendered)}
            </figcaption>
        </figure>
        :
        <Skeleton height={200} />
      }
      <main>
        {!!content ? 
            tagCleaner(content.rendered, 'content') 
            : 
            <Skeleton/>
        }
      </main>
    </article>
  );
}