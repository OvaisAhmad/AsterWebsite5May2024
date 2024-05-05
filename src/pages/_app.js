import "../styles/navbar.css";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const handleStart = (url) => setLoading(true);
    const handleComplete = (url) => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
