import { useState, useEffect } from 'react';
import debounce from 'utils/debounce'

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 300));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 300));
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      //console.log('called back');
    });
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + (Math.max( window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)) < (document.documentElement.scrollHeight-800) || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;