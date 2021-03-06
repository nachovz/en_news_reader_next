import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';
import useInfiniteScroll from 'hook/useInfiniteScroll';
import PostCard from 'component/ui/PostCard';
import PostGrid from 'component/ui/PostGrid';
import AdUnit from 'component/ui/AdUnit';
import lazyLoadImages from 'utils/images/lazyLoadImages';
import { fetchPostsByFilter } from 'utils/fetchs'
import { BORDER_STYLE, COLORS } from 'styles/constants';
import { AD_BOX, AD_BANNER, menuElements, routes } from 'data/constants';
import yoastProcess from 'utils/yoastProcess';

const Skeleton = dynamic(() => import('component/ui/Skeleton'), { ssr: false });

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
    paddingTop: 50,
    minHeight: '90vh'
  }
};

const Home = ({ 
  posts=[], 
  cat='home', 
  noMenu=false, 
  yoast=null
}) => {
  const [ state, setState ] = useState({
    page: 10, 
    posts: [...posts],
    loadingMore: false 
  });
  const [ isFetching, setIsFetching ] = useInfiniteScroll(fetchMorePosts); 
  const [ viewState, setViewState ] = useState(routes[cat] && routes[cat].value);
	//console.log(yoast);
  const horizontalNav = useRef(null);
  const { yoast_title, yoast_meta, yoast_json_ld } = yoast || { yoast_title:'', yoast_meta:[], yoast_json_ld:{} };
  const parsed_yoast_meta = yoastProcess(yoast_meta);

	useEffect(() => {
		fetchPostsByFilter(0, [viewState]).then((posts) => {
			setState( prevState => ({ ...prevState, page: state.page+10, posts: [...posts]}));
      setIsFetching(false);
      lazyLoadImages();
    });
	}, [viewState])

  useEffect(() => {
    lazyLoadImages();
    typeof window !== 'undefined' && window.scrollTo(0, 0);
  }, []);

  function fetchMorePosts () {
    //fetchPosts(state.page+10, [viewState]).then((posts) => {
    fetchPostsByFilter(state.page+10, [viewState]).then((posts) => {
			setState( prevState => ({ ...prevState, page: state.page+10, posts: [...prevState.posts,...posts]}));
      setIsFetching(false);
      lazyLoadImages();
    });
  }

  const changeCategory = (elem) =>{
    setViewState(elem.value);
    window.history.replaceState({}, '', elem.slug);
    typeof window !== 'undefined' && window.scrollTo(0, 0);
    setState({ page: 0, posts: []});
    //fetchPosts(0, [elem.value]).then((posts) => {
		fetchPostsByFilter(0, [elem.value]).then((posts) => {
      setState({ page: 0, filter: [elem.value], posts: [...posts] });
      lazyLoadImages();
      horizontalNav.current.scrollLeft = 0;
    });
  }
  const { tag, value } = (cat === 'home' || !routes[cat]) ? { tag: '', value: '' }:routes[cat];
  return (
    <div>
		{parsed_yoast_meta &&
      <NextSeo
        title={(!!tag ? `${tag} - `:'')+(yoast_title || "El Nacional")}
        description={parsed_yoast_meta.description || ''}
        openGraph={{
          type: 'website',
          locale: parsed_yoast_meta['og:locale'] || 'es_VE',
          url: (parsed_yoast_meta['og:url'] || 'https://www.elnacional.com/')+value,
          canonical: (parsed_yoast_meta['og:url'] || 'https://www.elnacional.com/')+value,
          title: (!!tag ? `${tag} - `:'')+(yoast_title || "El Nacional"),
          site_name: parsed_yoast_meta['og:site_name'] || 'El Nacional',
          description: parsed_yoast_meta.description || '',
        }}
        twitter={{
          description: parsed_yoast_meta['twitter:description'],
          site: parsed_yoast_meta['twitter:site'],
          handle: parsed_yoast_meta['twitter:creator'],
          title: parsed_yoast_meta['twitter:title']
        }}
      />
		}
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(yoast_json_ld)}}>
        </script>
      </Head>
      {!noMenu &&
        <div id="nav_menu" ref={horizontalNav} style={styles.nav_menu}>
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
      }
      <div style={{...(!noMenu ? styles.article_wrapper:{})}}>
        {state.posts.length > 0 ? state.posts.map((post,ind) => {
					return(
            <React.Fragment key={ind}>
							{ind % 3 === 0 
								? 
								(<>
									{ind > 0 && <AdUnit type={ind % 6 === 0 ? AD_BANNER : AD_BOX } unitId={`gtp-en-${ind}`}/>}
									<PostCard {...post} />
									{ind === 0 && <AdUnit type={AD_BANNER} unitId={`gtp-en-${ind}`}/>}
								</>)
								:
								<PostGrid {...post}/>
							}
							
            </React.Fragment>
          )
        })
        :
          <>
            <Skeleton />
            <Skeleton />
          </>
        }
        <div>
          {isFetching && <Skeleton />}
        </div>
      </div>
    </div>
  );
};

export default Home;