import React from 'react';
import dynamic from "next/dynamic";
import { fetchHome } from 'utils/fetchs'

const Home = dynamic(import('component/view/Home'));
const Error = dynamic(import('./_error'));

const HomePage = (props) => {
  if (!props.posts) return <Error status={404} />;
  //console.log(props)
	/*const posts = client.posts().get({
    per_page: 11,
    ...parseFilter([routes['home'].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
	console.log(posts)
	const pro = useSWR('/api/user', posts)*/

  return (<Home {...props}/>)
};

export async function getServerSideProps(){
//export async function getStaticProps(){
  /*const posts = await client.posts().get({
    per_page: 11,
    ...parseFilter([routes['home'].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  const portada = await client.posts().get({
    per_page: 1,
    ...parseFilter(['principal-portada']),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });*/
  //const yoastFetch = await fetch('https://www.elnacional.com/wp-json/wp-rest-yoast-meta/v1/home');
  //const yoast = await yoastFetch.json();
	const yoast = {}
	const posts = await fetchHome()

  return { props: { posts, yoast } };
};

export default HomePage;