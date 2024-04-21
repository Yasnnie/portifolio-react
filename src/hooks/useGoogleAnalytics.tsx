import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

export const useGoogleAnalytics = (trackingID:string) => {
  const router = useRouter();

  useEffect(() => {
    if (!trackingID) {
      console.warn('Google Analytics tracking ID not provided.');
      return;
    }

    ReactGA.initialize(trackingID);

    const handleRouteChange = (url:string) => {
      ReactGA.set({ page: url });
      ReactGA.pageview(url);
    };

    handleRouteChange(router.asPath);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, [trackingID, router.events]);
};
