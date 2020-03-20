import React from 'react';
import Error from '../_error';
import client from 'utils/client';
import Home from 'component/view/Home';
import { routes } from 'data/constants';
import parseFilter from 'utils/parseFilter'

const HomePage = (props) => {
  if (!props.posts) return <Error statusCode={404} />;
    
  return (<Home {...props}/>)
};

HomePage.getInitialProps = async function( { query: { cat } } ) {
  const posts = !routes[cat] ? null : await client.posts().get({
    per_page: 10,
    ...parseFilter([routes[cat].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  return { posts, cat };
};

export default HomePage;