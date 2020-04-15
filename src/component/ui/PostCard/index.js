import React, { useState } from 'react';
import SkeletonImage from 'component/ui/SkeletonImage';
import tagCleaner from 'utils/tagCleaner';
import { urlCleaner } from 'utils/urlUtil';
import getBestImage from 'utils/images/getBestImage';
import dateAgoToText from 'utils/dateAgoToText';
import { TEXT_SPACING, SPACING, BORDER_STYLE, COLORS, DEVICE_WIDTH, PLACEHOLDER_IMAGE } from 'styles/constants';

const styles = {
  post_container:{
    background: 'white'
  },
  image_container:{
    display: 'flex',
    background: 'rgb(194, 200, 200)',
    height: 250
  },
  title_container:{
    padding: `${TEXT_SPACING/2}px ${TEXT_SPACING}px`
  },
  title_smaller:{
    fontSize: '1.3em'
  },
  date_container:{
    width: '100%',
    textAlign: 'right',
    fontStyle: 'italic',
    color: COLORS.text_light,
    paddingBottom: SPACING,
    borderBottom: BORDER_STYLE
  },
  margin_bottom:{
    marginBottom: SPACING*2
  }
}

export default function({ 
  title, 
  _embedded, 
  link, 
  excerpt, 
  date_gmt, 
  noImage=false, 
  margin=false
}){
  const [ client, setClient ] = useState(typeof window !== 'undefined');

  return(
    <article style={styles.post_container}>
      {!!_embedded && !noImage && !!_embedded["wp:featuredmedia"] && !!_embedded["wp:featuredmedia"]["0"] && !!_embedded["wp:featuredmedia"]["0"].media_details && !!link &&
        <figure>
          <a href={urlCleaner(link)}>
            {!!client ?
              <>
                <img
                  src={PLACEHOLDER_IMAGE}
                  data-src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
                  alt={_embedded["wp:featuredmedia"]["0"].title.rendered} 
                />
                <figcaption style={{display: 'none'}}>
                  {tagCleaner(_embedded["wp:featuredmedia"]["0"].title.rendered)}
                </figcaption>
              </>
              :
              <SkeletonImage/>
            }
          </a>
        </figure>
      }
      <div style={{...styles.title_container, ...margin ? styles.margin_bottom : {}}}>
        {!!link && !!title && !!excerpt && !!date_gmt && 
          <React.Fragment>
            <a href={urlCleaner(link)}>
              <h2 style={noImage ? styles.title_smaller : {}}>
                {tagCleaner(title.rendered)}
              </h2>
              <div>{tagCleaner(excerpt.rendered)}</div>
            </a>
            <div style={styles.date_container}>
              <span>{dateAgoToText(new Date(date_gmt+'Z'))}</span>
            </div>
          </React.Fragment>
        }
      </div>
    </article>
  )
}