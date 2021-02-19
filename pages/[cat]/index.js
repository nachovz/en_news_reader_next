import React from 'react';
import dynamic from "next/dynamic";
import { fetchPostsByFilter } from 'utils/fetchs'

const Home = dynamic(import('component/view/Home'));
const Error = dynamic(import('../_error'));

const CategoryPage = (props) => {
  if (!props.posts) return <Error statusCode={404} />;
    
  return (<Home {...props}/>)
};

export async function getServerSideProps( { query: { cat } } ) {
  const posts = !routes[cat] ? 
		null 
		: 
		await fetchPostsByFilter(0, [routes[cat].value], 12)
  const yoastFetch = await fetch('https://www.elnacional.com/wp-json/wp-rest-yoast-meta/v1/home');
  const yoast = await yoastFetch.json();
  return { props: { posts, cat, yoast }};
};

export default CategoryPage;