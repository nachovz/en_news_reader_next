import React, { useState } from 'react';
import Head from 'next/head';
import getBestImage from 'utils/images/getBestImage';
import tagCleaner from 'utils/tagCleaner';
import { NextSeo } from 'next-seo';
import { TEXT_SPACING, COLORS, PLACEHOLDER_IMAGE } from 'styles/constants';
import useScript from 'hook/useScript';

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
  },
  author_dateContainer:{
    marginBottom: TEXT_SPACING/2,
    display: 'flex',
    justifyContent: 'space-between'
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
};

const getDates = (date_gmt) =>{
  let ye = '';
  let mo = ''; 
  let da = '';
  if(!!date_gmt){
    const date = new Date(date_gmt+'Z');
    ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(date);
    mo = new Intl.DateTimeFormat('es', { month: 'long' }).format(date);
    da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(date);
  }
  return { ye, mo, da};
}

export default ({ 
  title, 
  content, 
  _embedded, 
  date_gmt, 
  modified_gmt, 
  link, 
  yoast_title, 
  yoast_meta=[], 
  yoast_json_ld, 
  lazyLoaded=false
}) => {
  const [ client, setClient ] = useState(typeof window !== 'undefined');
  useScript('https://platform.twitter.com/widgets.js', title);
  useScript('https://www.instagram.com/embed.js', title);
  yoast_meta = yoastProcess(yoast_meta);
  const { ye, mo, da } = getDates(date_gmt);
  if(!_embedded) return null;

  return (
    <article style={styles.article}>
      <NextSeo
        title={yoast_title || ''}
        description={yoast_meta.description || ''}
        openGraph={{
          canonical: link || yoast_meta['og:url'],
          locale: yoast_meta['og:locale'] || 'es_VE',
          type: yoast_meta['og:type'] || 'article',
          url: link || yoast_meta['og:url'],
          title: yoast_meta['og:title'] || yoast_title || '',
          description: yoast_meta['og:description'] || yoast_meta.description || '',
          site_name: yoast_meta['og:site_name'] || 'El Nacional',
          ...(_embedded['wp:featuredmedia'] && { images: [
              {
                url: yoast_meta['og:image:secure_url'],
                secure_url: yoast_meta['og:image:secure_url'],
                width: yoast_meta['og:image:width'],
                height: yoast_meta['og:image:height'],
                alt: _embedded['wp:featuredmedia'][0].alt_text || '',
              }
            ]
          }
          ),
          article: {
            publishedTime: `${date_gmt}Z`,
            modifiedTime: `${modified_gmt}Z`
          },
        }}
        twitter={{
          cardType: yoast_meta['twitter:card'],
          description: yoast_meta['twitter:description'],
          site: yoast_meta['twitter:site'],
          handle: yoast_meta['twitter:creator'],
          title: yoast_meta['twitter:title'],
          image: yoast_meta['twitter:image']
        }}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(yoast_json_ld)}}>
        </script>
      </Head>
      <header style={styles.paddedContent}>
        <h1 style={{fontSize: '1.7em'}}>{!!title && tagCleaner(title.rendered) }</h1>
      </header>
      <div style={{...styles.paddedContent, ...styles.author_dateContainer}}>
        <>
          {_embedded['author'] &&
            <span><strong>Por</strong> <a style={{textDecoration: 'underline',color: COLORS.primary}} href={_embedded['author'][0].link}>{_embedded['author'][0].name}</a></span>
          }  
        </>
        <>
          <span>{`${da} de ${mo.charAt(0).toUpperCase() + mo.slice(1)} ${ye}`}</span>
        </>
      </div>
      {!!_embedded && _embedded["wp:featuredmedia"] && 
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
      }
      <main >
        {!!content && tagCleaner(content.rendered, 'content', lazyLoaded) }
      </main>
    </article>
  );
}