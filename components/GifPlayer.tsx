'use client';

import { useRef, useEffect } from 'react';

type props = {
  video: string;
};

export default function Footer({ video }: props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
  }, [videoRef]);

  return <video className='block w-full' ref={videoRef} loop src={`/static/gifs/${video}`} />;
}
