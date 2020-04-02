import { useEffect } from 'react';

const useScript = (url, np) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url, np]);
};

export default useScript;