import React, { useState, useEffect, useLayoutEffect } from 'react';
import client from 'utils/client';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PostCard from 'component/ui/PostCard';
import AdUnit from 'component/ui/AdUnit';
import Skeleton from 'component/ui/Skeleton';
import lazyLoadImages from 'utils/images/lazyLoadImages';
import { BORDER_STYLE, COLORS } from 'styles/constants';
import { AD_BOX, AD_BANNER, MAP_ID, menuElements } from 'data/constants';

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

const Home = ({ posts }) => {
  const [ state, setState ] = useState({ 
    filter: ['ultima-hora'], 
    page: 0, 
    posts: [...posts] 
  });
  const [ viewState, setViewState ] = useState('ultima-hora')
  const [ loadingMore, setLoadingMore] = useState(true); 

  useEffect(() => {
    //setLoadingMore(typeof window !== 'undefined')
    lazyLoadImages();
  }, [loadingMore]);

  typeof window !== 'undefined' && useScrollPosition(({ currPos }) => {
    console.log((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5))
    if((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5)){
      setLoadingMore(true);
      fetchPosts(state.page+10, [viewState]).then((posts) => {
        setState({ ...state, page: state.page+10, posts: [...state.posts,...posts]});
        setLoadingMore(false);
        lazyLoadImages();
      });
      
    }
  }, [state.posts], null, false, 1000);

  const changeCategory = (elem) =>{
    setViewState(elem.value);
    setLoadingMore(true);
    setState({filter: [elem.value], page: 0, posts: []});
    typeof window !== 'undefined' && window.scrollTo(0, 0);
    fetchPosts(0, [elem.value]).then((posts) => {
      setState( 
        s => ({ filter: [elem.value], page: 0, posts: [...posts] })
      );
      setLoadingMore(false);
    });
  }
  return (
    <div>
      <div id="nav_menu" style={styles.nav_menu}>
        {menuElements.map( (elem, ind) => (
          <span 
            key={ind} 
            className={elem.value === viewState ? 'active':''}
            onClick={() => changeCategory(elem)}
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
        <div>
          <Skeleton />
        </div>}
      </div>
    </div>
  );
};

Home.getInitialProps = async function() {
  const posts = await client.posts().get({
    per_page: 10,
    ...parseFilter(['ultima-hora']),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  return { posts };
};

export default Home;