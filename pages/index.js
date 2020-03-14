import React from 'react';
import Error from 'next/error';
import client from 'utils/client';
import Home from 'component/view/Home';
import { routes } from 'data/constants';
import parseFilter from 'utils/parseFilter'

const HomePage = (props) => {
  if (!props.posts) return <Error status={404} />;
    
  return (<Home {...props}/>)
};

HomePage.getInitialProps = async function( { asPath } ) {
  const posts = !routes[asPath] ? null : await client.posts().get({
    per_page: 10,
    ...parseFilter([routes[asPath].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  return { posts, cat: asPath };
};

export default HomePage;