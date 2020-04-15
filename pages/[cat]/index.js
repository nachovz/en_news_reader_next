import React from 'react';
import dynamic from "next/dynamic";
//import Error from '../_error';
import client from 'utils/client';
//import Home from 'component/view/Home';
import { routes } from 'data/constants';
import parseFilter from 'utils/parseFilter'

const Home = dynamic(import('component/view/Home'));
const Error = dynamic(import('../_error'));

const HomePage = (props) => {
  if (!props.posts) return <Error statusCode={404} />;
    
  return (<Home {...props}/>)
};

export async function getServerSideProps( { query: { cat } } ) {
  const posts = !routes[cat] ? null : await client.posts().get({
    per_page: 20,
    ...parseFilter([routes[cat].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  const yoastFetch = await fetch('https://www.elnacional.com/wp-json/wp-rest-yoast-meta/v1/home');
  const yoast = await yoastFetch.json();
  return { props: { posts, cat, yoast }};
};

export default HomePage;