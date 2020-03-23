import React, { useState, useEffect } from 'react';
import client from 'utils/client';
import Home from 'component/view/Home';
import { COLORS, TEXT_SPACING } from 'styles/constants';
import parseFilter from 'utils/parseFilter'; 
import { routes } from 'data/constants';

const styles = {
  link:{
    textDecoration: 'underline',
    color: COLORS.primary,
  },
  title_container:{
    textAlign: 'center', 
    padding: TEXT_SPACING,
     lineHeight: '1.5em'
  }
}

const fetchPosts = async (page=0, filter=[]) => {
  const posts = await client.posts().get({
    per_page: 10,
    offset: page,
    ...parseFilter([routes['home'].value]),
    _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
    _embed: 1,
  });
  return posts;
};

function CustomError({ statusCode }) {
  const [ posts, setPosts ] = useState([]);

  useEffect(()=>{
    fetchPosts().then((posts)=>{
      setPosts(posts);
    })
  });

  let title = '';
  switch(statusCode){
    case 404:
      title = (<>
        <h2><strong> Ups, error 404</strong></h2>
        <h3> Lo sentimos, no hemos encontrado este URL. Por favor intenta otra dirección. O visita nuestra <br/><a href="/" style={styles.link}>Página Principal</a></h3>
        </>)
      break;
    default:
      title = (<>
        <h2><strong> Ups, error {statusCode}</strong></h2>
        <h3> Lo sentimos, parece que tenemos un error. Intenta visitando nuestra <a style={styles.link} href="/">Página Principal</a></h3>
        </>)
  }

  return (
    <div>
      <div style={styles.title_container}>
        {title}
      </div>
      <div style={styles.title_container}>
        <h2>Noticias Destacadas:</h2>
      </div>
      <Home noMenu posts={posts}/>
    </div>
  );
}

function getInitialProps({ res, err }) {
  let statusCode;
  // If the res variable is defined it means nextjs
  // is in server side
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    // Something really bad/weird happen and status code
    // cannot be determined.
    statusCode = null;
  }
  return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;