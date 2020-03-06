import React, { useEffect, useState } from 'react';
import client from 'utils/client';
import { useRouter } from 'next/router'
//import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { slugFinder } from 'utils/urlUtil';
import Post from 'component/ui/Post';
import KeepReading from 'component/ui/KeepReading';

export default function PostView() {
  const router = useRouter();
  const { all } = router.query;
  const [ posts, setPosts] = useState([]);
  const [ loadingMore, setLoadingMore ] = useState(true);

  const fetchPost = async () => {
    client.param('_embed', true);
    const post = await client.posts().slug(slugFinder(all.join('/')));
    return post;
  }

  useEffect(() => {
    if(posts.length === 0 && !!all){
      fetchPost().then((post) => {
        setPosts( [ post ] );
        setLoadingMore(false);
      });
    }
  });

  /*useScrollPosition(({ currPos }) => {
    console.log((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5))
    if((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5)){
      setLoadingMore(true);
      fetchPost().then((post) => {
        setPosts( [...posts, post ] );
        setLoadingMore(false);
      });
    }
  }, [posts], null, false, 3000)*/

  return (
    <React.Fragment>
      {posts.map((post, ind)=> <Post key={ind} {...post}/>)}
      {posts.length > 0 && <KeepReading />}
      {loadingMore && <Post />}
    </React.Fragment>
  );
}