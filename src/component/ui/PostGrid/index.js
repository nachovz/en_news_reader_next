import React, { useState } from 'react';
import SkeletonImage from 'component/ui/SkeletonImage';
import tagCleaner from 'utils/tagCleaner';
import { urlCleaner } from 'utils/urlUtil';
import getBestImage from 'utils/images/getBestImage';
import dateAgoToText from 'utils/dateAgoToText';
import { TEXT_SPACING, SPACING, BORDER_STYLE, COLORS } from 'styles/constants';

const styles = {
  post_container:{
    background: 'white',
		display: 'flex',
		padding: `${TEXT_SPACING}px ${TEXT_SPACING}px 0`
  },
  image_container:{
    display: 'flex',
    background: 'rgb(194, 200, 200)',
    height: 250
  },
  content_container:{
    borderBottom: BORDER_STYLE,
		paddingBottom:  `${TEXT_SPACING}px`,
		width: '100%'
  },
  title_smaller:{
    fontSize: '1.1em',
		fontWeight: 'bold',
  },
  date_container:{
    width: '100%',
    textAlign: 'right',
    fontStyle: 'italic',
    color: COLORS.text_light,
    paddingBottom: SPACING,
    
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
      <div style={{...styles.content_container, ...margin ? styles.margin_bottom : {}}}>
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
    </article>
  )
}

export default PostCard;