import { useEffect } from 'react';

const useScript = (url, callback) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = false;
        script.onload = callback;

        document.body.appendChild(script);
        console.log('attach script');

        return () => {
            console.log('remove script');
            document.body.removeChild(script);
        }
    }, [url, callback]);
};

export default useScript;