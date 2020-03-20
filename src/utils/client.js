import 'isomorphic-unfetch';
import Client from '@wp-headless/client';
//import FetchTransport from '@wp-headless/transport-fetch';
import dummy from 'data/posts.json';
import dummy2 from 'data/posts2.json';
import dummy3 from 'data/posts3.json';
import dummyPost from 'data/post.json';
import dummyPost2 from 'data/post2.json';


const isLocalhost = Boolean( 
  typeof window === 'undefined' || 
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    ) ||
    //gitpod
    window.location.hostname.indexOf('gitpod.io')
);

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class OfflineClient {
  params = {};
  param = (params) =>{
    this.params = params;
  }
  posts = () => {
    return this;
  }
  
  get = async () =>{
    //console.log('Querying with params: ',this.params);
    await sleep(2000);
    return [dummy, dummy2, dummy3][Math.floor(Math.random()*3)];
  }

  slug = async (slug) =>{
    //console.log('Querying with params: ',{...this.params, slug});
    await sleep(2000);
    return [dummyPost, dummyPost2][Math.floor(Math.random()*1)];
  }
}

export default false ? new OfflineClient() : new Client('https://www.elnacional.com/wp-json');
/*
export default new Client({
  transport: new FetchTransport(),
  endpoint: 'https://www.elnacional.com/wp-json/wp/v2'
});*/
//Last 10 posts
//https://www.elnacional.com/wp-json/wp/v2/posts?per_page=10&_embed&_fields=title,excerpt,link,date_gmt,featured_media,_links,slug

//Single Post by slug (With yoast meta)
//https://www.elnacional.com/wp-json/wp/v2/posts?per_page=1&slug=critican-a-la-mama-de-robert-serra-por-ofrecer-tapabocas-artesanales-con-huecos&_embed&_fields=title,excerpt,content,link,date_gmt,featured_media,_links,slug,categories,yoast_title,yoast_meta,yoast_json_ld

//By categories offset 1
//https://www.elnacional.com/wp-json/wp/v2/posts?per_page=1&_embed&categories=23799&offset=1&_fields=title,excerpt,link,date_gmt,featured_media,_links,slug