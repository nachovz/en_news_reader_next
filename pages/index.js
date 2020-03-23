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

HomePage.getInitialProps = async function( { query: { slug } } ) {
  const posts = await client.posts().get({
    per_page: 10,
    ...parseFilter([routes['home'].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  return { posts, cat: 'home' };
};

export default HomePage;