import React, { useState, useEffect } from 'react';
import client from 'utils/client';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PostCard from 'component/ui/PostCard';
import AdUnit from 'component/ui/AdUnit';
import { BORDER_STYLE, COLORS } from 'styles/constants';
import { AD_BOX, AD_BANNER, MAP_ID } from 'data/constants';

const styles = {
  nav_menu: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'auto',
    overflowY: 'hidden',
    msOverflowStyle: '-ms-autohiding-scrollbar',
    WebkitOverflowScrolling: 'touch',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    height: 50,
    borderBottom: BORDER_STYLE,
    position: 'fixed',
    background: COLORS.background
  },
  default_container: {
    minHeight: '100vh'
  },
  article_wrapper: {
    paddingTop: 50
  }
};

const menuElements = [
  {
    value: 'ultima-hora',
    tag: 'DESTACADO'
  },
  {
    value: 'venezuela',
    tag: 'VENEZUELA'
  },
  {
    value: 'mundo',
    tag: 'MUNDO'
  },
  { 
    value: 'economia',
    tag: 'ECONOMÍA'
  },
  {        
    value: 'deportes',
    tag: 'DEPORTES'
  },
  {
    value: 'ciencia-tecnologia',
    tag: 'CIENCIA Y TECNOLOGÍA'        
  },
  {
    value: 'entretenimiento',
    tag: 'ENTRETENIMIENTO'
  },        
  {
    value: 'opinion',
    tag: 'OPINIÓN'
  },        
  {
    value: 'life-style',
    tag: 'ESTILO DE VIDA'
  }
];

const fetchPosts = async (page=0, filter=[]) => {
  const posts = await client.posts().get({
    per_page: 10,
    offset: page,
    ...parseFilter(filter),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  return posts;
};

const parseFilter = (filter) => {
  return filter.reduce( (final, name) => {
    final[MAP_ID[name].type] = (final[MAP_ID[name].type] || '') + `${!!final[MAP_ID[name].type] ? ',' : ''}${MAP_ID[name].value}`;
    return  final
  }, {})  
}

export default function() {
  const [ state, setState ] = useState({ 
    filter: ['ultima-hora'], 
    page: 0, 
    posts: [] 
  });
  const [ viewState, setViewState ] = useState('ultima-hora')
  const [ loadingMore, setLoadingMore] = useState(true); 
  console.log(viewState)

  useEffect(() => {
    //if(state.posts.length === 0){
      fetchPosts(0, [viewState]).then((posts) => {
        setState( 
          s => ({ ...s, posts: [...posts] })
        );
        setLoadingMore(false);
      });
    //}
  }, [viewState]);

  
  typeof window !== 'undefined' && useScrollPosition(({ currPos }) => {
    console.log((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5))
    if((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5)){
      setLoadingMore(true);
      fetchPosts(state.page+10, [viewState]).then((posts) => {
        setState({ ...state, page: state.page+10, posts: [...state.posts,...posts]});
        setLoadingMore(false);
      });
    }
  }, [state.posts], null, false, 3000);
  
  console.log(state.posts);
  return (
    <div>
      <div id="nav_menu" style={styles.nav_menu}>
        {menuElements.map( (elem, ind) => (
          <span 
            key={ind} 
            className={elem.value === viewState ? 'active':''}
            onClick={() => {
              setViewState(elem.value);
              setLoadingMore(true);
              typeof window !== 'undefined' && window.scrollTo(0, 0);
              setState(s => ({...s, posts: []}))
            }}
          >
            {elem.tag}
          </span>
        ))}
        &nbsp;
      </div>
      <div style={styles.article_wrapper}>
        {state.posts.map((post, ind) => {
          return(
            <React.Fragment key={ind}>
              <PostCard noImage={ind % 3} margin={(ind+1) % 3 === 0} {...post} />
              {(ind+1) % 3 === 0 &&
                <AdUnit type={ind % 2 === 0 ? AD_BOX: AD_BANNER }/>
              }
            </React.Fragment>
          )
        })}
        {loadingMore && 
        <div style={styles.default_container}>
          <PostCard />
          <PostCard />
        </div>}
      </div>
    </div>
  );
};
