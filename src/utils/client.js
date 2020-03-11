import 'isomorphic-unfetch';
import Client from '@wp-headless/client';
//import FetchTransport from '@wp-headless/transport-fetch';
import dummy from 'data/posts.json';
import dummyPost from 'data/post.json';

/*const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    ) ||
    //gitpod
    window.location.hostname.indexOf('gitpod.io')
);*/

class OfflineClient {
  posts = () => {
    return this;
  }
  
  get = () =>{
    return dummy;
  }

  param = () => {
  }

  slug = () =>{
    return dummyPost;
  }
}

export default true ? new OfflineClient() : new Client('https://www.elnacional.com/wp-json');
/*
export default new Client({
  transport: new FetchTransport(),
  endpoint: 'https://www.elnacional.com/wp-json/wp/v2'
});*/