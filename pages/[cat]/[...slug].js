import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
//import Error from 'next/error';
import client from 'utils/client';
import useInfiniteScroll from 'hook/useInfiniteScroll';
import Post from 'component/ui/Post';
import lazyLoadImages from 'utils/images/lazyLoadImages';

const Error = dynamic(import('../_error'));

const globalParamsPost = {
  per_page: 1,
  _fields: 'id,title,content,_embedded,link,date_gmt,modified_gmt,featured_media,_links,slug,categories,yoast_title,yoast_meta,yoast_json_ld',
  _embed: 1,
};

const PostView = ({ post, cat }) => {
  const [ posts, setPosts] = useState([ post ]);
  const [ isFetching, setIsFetching ] = useInfiniteScroll(fetchMorePosts);

  if (!post || posts.length < 1) return <Error statusCode={404} />;

  const fetchPost = async () => {
    const newPost = await client.posts().get({
      ...globalParamsPost,
      per_page: 2,
      offset: posts.length,
      categories: posts[0].categories[0],
      exclude: (posts || []).map(p=> p.id || 0)
    });
    return newPost;
  }

  useEffect(() => {
    lazyLoadImages();
    typeof window !== 'undefined' && window.scrollTo(0, 0);
  }, []);

  function fetchMorePosts () {
    fetchPost().then((post) => {
      if(post.length > 0){
        setPosts( [...posts, { ...post[0], lazyLoaded: true } ] );
        const title = post[0].title.rendered || '';
        window.history.replaceState({}, title, (window.location.href.endsWith('/') ? '../' : '') + post[0].slug);
        setIsFetching(false);
        lazyLoadImages();
      }
    });
  }
  return (
    <React.Fragment>
      {posts.map((post, ind)=> <Post key={ind} {...post} cat={cat}/>)}
      {isFetching && <Post />}
    </React.Fragment>
  );
}

export async function getServerSideProps({ query: {  slug, cat } }) {
  client.param(globalParamsPost);
  const post = await client.posts().slug(slug);
  return { props: { post: (post || null), cat }};
};

export default PostView;