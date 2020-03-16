import React, { useEffect, useState } from 'react';
import client from 'utils/client';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Post from 'component/ui/Post';
import KeepReading from 'component/ui/KeepReading';
import lazyLoadImages from 'utils/images/lazyLoadImages';

const PostView = ({ post }) => {
  const [ posts, setPosts] = useState([ post ]);
  const [ loadingMore, setLoadingMore ] = useState(false);

  const fetchPost = async () => {
    console.log(posts);
    const newPost = await client.posts().get({
      per_page: 10,
      offset: posts.length,
      categories: posts[0].categories[0],//next post of same category. TO TEST & Validate
      _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
      _embed: 1,
    });
    return newPost;
  }

  useEffect(() => {
    lazyLoadImages();
  }, [loadingMore]);

  typeof window !== 'undefined' && useScrollPosition(({ currPos }) => {
    console.log((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5))
    if((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5)){
      setLoadingMore(true);
      fetchPost().then((post) => {
        setPosts( [...posts, post ] );
        setLoadingMore(false);
        lazyLoadImages();
      });
    }
  }, [posts], null, false, 3000);

  return (
    <React.Fragment>
      {posts.map((post, ind)=> <Post key={ind} {...post}/>)}
      {posts.length > 0 && <KeepReading />}
      {loadingMore && <Post />}
    </React.Fragment>
  );
}

PostView.getInitialProps = async function({ query: { cat, slug } }) {
  client.param('_embed', true);
  const post = await client.posts().slug(slug);
  return { post };
};

export default PostView;