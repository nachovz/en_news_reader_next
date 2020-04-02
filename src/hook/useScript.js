import { useEffect } from 'react';

const useScript = (url, np) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
    console.log("inyecta script: ",url,np);

    return () => {
      document.body.removeChild(script);
    }
  }, [url, np]);
};

export default useScript;