import { useEffect } from "react";

const useScript = (url, callback) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = false;
    script.onload = callback;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, callback]);
};

export default useScript;
