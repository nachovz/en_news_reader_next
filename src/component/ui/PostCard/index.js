import React from 'react';
import tagCleaner from 'utils/tagCleaner';
import { urlCleaner } from 'utils/urlUtil';
import getBestImage from 'utils/getBestImage';
import dateAgoToText from 'utils/dateAgoToText';
import { TEXT_SPACING, SPACING, BORDER_STYLE, COLORS, DEVICE_WIDTH } from 'styles/constants';

const styles = {
  post_container:{
    background: 'white'
  },
  imagesContainer:{
    display: 'flex'
  },
  title_container:{
    padding: TEXT_SPACING
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
  return(
    <article style={styles.post_container}>
      {!!_embedded && !noImage && !!_embedded["wp:featuredmedia"]["0"].media_details && !!link &&
        <div style={styles.imagesContainer}>
          <a href={urlCleaner(link)}>
            <img 
              src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
              width={DEVICE_WIDTH} 
              alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
          </a>
        </div>
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