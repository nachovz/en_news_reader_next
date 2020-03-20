import React, { useEffect, useState } from 'react';
import Error from 'next/error';
import client from 'utils/client';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Post from 'component/ui/Post';
import KeepReading from 'component/ui/KeepReading';
import lazyLoadImages from 'utils/images/lazyLoadImages';

const globalParamsPost = {
  per_page: 1,
  _fields: 'title,content,_embedded,link,date_gmt,modified_gmt,featured_media,_links,slug,categories,yoast_title,yoast_meta,yoast_json_ld',
  _embed: 1,
};

const PostView = ({ post, cat }) => {
  const [ posts, setPosts] = useState([ post ]);
  const [ loadingMore, setLoadingMore ] = useState(false);

  if (!post) return <Error status={404} />;

  const fetchPost = async () => {
    const newPost = await client.posts().get({
      ...globalParamsPost,
      per_page: 1,
      offset: posts.length,
      categories: posts[0].categories[0],//next post of same category. TO TEST & Validate
    });
    return newPost;
  }

  useEffect(() => {
    lazyLoadImages();
  }, [loadingMore]);

  /*typeof window !== 'undefined' && useScrollPosition(({ currPos }) => {
    //console.log((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5))
    if((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5)){
      setLoadingMore(true);
      fetchPost().then((post) => {
        setPosts( [...posts, post ] );
        setLoadingMore(false);
        lazyLoadImages();
      });
    }
  }, [posts], null, false, 1000);*/

  return (
    <React.Fragment>
      {posts.map((post, ind)=> <Post key={ind} {...post} cat={cat}/>)}
      {/*posts.length > 0 && <KeepReading />*/}
      {loadingMore && <Post />}
    </React.Fragment>
  );
}

PostView.getInitialProps = async function({ query: {  slug, cat } }) {
  console.log('SLUG')
  client.param(globalParamsPost);
  const post = await client.posts().slug(slug);
  return { post, cat };
};

export default PostView;