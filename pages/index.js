import React from 'react';
import dynamic from "next/dynamic";
import client from 'utils/client';
import { routes } from 'data/constants';
import parseFilter from 'utils/parseFilter'

const Home = dynamic(import('component/view/Home'));
const Error = dynamic(import('./_error'));

const HomePage = (props) => {
  if (!props.posts) return <Error status={404} />;
    
  return (<Home {...props}/>)
};

export async function getServerSideProps(){
  const posts = await client.posts().get({
    per_page: 20,
    ...parseFilter([routes['home'].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  const yoastFetch = await fetch('https://www.elnacional.com/wp-json/wp-rest-yoast-meta/v1/home');
  const yoast = await yoastFetch.json();

  return { props: { posts, yoast }};
};

export default HomePage;