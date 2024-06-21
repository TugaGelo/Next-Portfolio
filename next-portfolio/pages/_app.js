import { useEffect } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Add external stylesheets dynamically
    const boxiconsLink = document.createElement('link');
    boxiconsLink.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    boxiconsLink.rel = 'stylesheet';
    document.head.appendChild(boxiconsLink);

    const uniconsLink = document.createElement('link');
    uniconsLink.href = 'https://unicons.iconscout.com/release/v4.0.8/css/line.css';
    uniconsLink.rel = 'stylesheet';
    document.head.appendChild(uniconsLink);

    // Clean up function to remove the dynamically added stylesheets on unmount
    return () => {
      document.head.removeChild(boxiconsLink);
      document.head.removeChild(uniconsLink);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
