import React, { useState } from 'react';
import SkeletonImage from 'component/ui/SkeletonImage';
import tagCleaner from 'utils/tagCleaner';
import { urlCleaner } from 'utils/urlUtil';
import getBestImage from 'utils/images/getBestImage';
import { TEXT_SPACING, SPACING, BORDER_STYLE, COLORS, PLACEHOLDER_IMAGE } from 'styles/constants';

const styles = {
  post_container:{
    background: 'white',
		padding: `${TEXT_SPACING}px ${TEXT_SPACING}px 0`
  },
  image_container:{
    display: 'flex',
    background: 'rgb(194, 200, 200)',
    height: 250
  },
  bottom_separator:{
    borderBottom: BORDER_STYLE,
		paddingBottom:  `${TEXT_SPACING}px`,
  },
  title_smaller:{
    fontSize: '1.3em',
		fontWeight: 'bold'
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

const PostCard = ({ 
  title, 
  _embedded, 
  link, 
  excerpt, 
  date_gmt,
	noImage=false, 
  margin=false
}) => {
  const [ client, setClient ] = useState(typeof window !== 'undefined');

  return(
    <article style={styles.post_container}>
      <div style={{ ...margin ? styles.margin_bottom : {}, width: '100%'}}>
        {!!link && !!title && !!excerpt && !!date_gmt && 
          <React.Fragment>
            <a href={urlCleaner(link)}>
              <h2 style={styles.title_smaller}>
                {tagCleaner(title.rendered)}
              </h2>
              <div>{tagCleaner(excerpt.rendered, 'excerpt')}</div>
            </a>
          </React.Fragment>
        }
      </div>
			{!noImage && !!_embedded && !!_embedded["wp:featuredmedia"] && !!_embedded["wp:featuredmedia"]["0"] && !!_embedded["wp:featuredmedia"]["0"].media_details && !!link &&
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
			<div style={styles.bottom_separator}></div>
    </article>
  )
}

export default PostCard;