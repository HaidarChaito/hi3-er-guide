'use client';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { faqType } from '@/types/Faq';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

type props = {
  faq: faqType;
};

export default function FaqBuble({ faq }: props) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  useEffect(() => {
    if (isAnswerVisible && videoRef.current) {
      // Start autoplay when the div is visible
      videoRef.current.play();
    } else if (videoRef.current) {
      // Pause the video if the div is not visible
      videoRef.current.pause();
    }
  }, [isAnswerVisible]);
  return (
    <motion.div onClick={(e) => e.stopPropagation()}>
      <motion.div layout className='chat chat-start' onClick={toggleAnswerVisibility}>
        <motion.div className='chat-bubble chat-bubble-success cursor-pointer opacity-90'>
          {faq.question}
          {isAnswerVisible && (
            <span className='mx-2 my-auto inline-flex cursor-pointer justify-center align-middle'>
              <BsFillArrowUpCircleFill />
            </span>
          )}
          {!isAnswerVisible && (
            <span className='mx-2 my-auto inline-flex cursor-pointer justify-center align-middle'>
              <BsFillArrowDownCircleFill />
            </span>
          )}
        </motion.div>
      </motion.div>
      {isAnswerVisible && (
        <motion.div
          layout
          initial={{ opacity: 0, right: '-100px' }}
          animate={{ opacity: 1, right: '0' }}
          className='chat chat-end'
        >
          {faq.answer && (
            <motion.div className='chat-bubble chat-bubble-info opacity-90'>
              {faq.answer}
            </motion.div>
          )}
          {faq.gif && (
            <motion.div className='chat-bubble chat-bubble-info opacity-90'>
              <video
                loop
                autoPlay
                width={200}
                height={200}
                src={`/static/gifs/${faq.gif}`}
                ref={videoRef}
              />
            </motion.div>
          )}
          {faq.image && (
            <motion.div className='chat-bubble chat-bubble-info opacity-90'>
              <Image
                priority
                className='block'
                width={300}
                height={350}
                alt={faq.question}
                src={`/static/images/faq/${faq.image}`}
              />
            </motion.div>
          )}
          {faq.multiLines && (
            <motion.div
              className={`answer  ${isAnswerVisible ? 'block' : 'hidden'} mt-2 leading-snug `}
            >
              {faq.multiLines && (
                <div
                  className={`answer ${isAnswerVisible ? 'block' : 'hidden'} mt-2 leading-snug `}
                >
                  {faq.multiLines.map((line, index) => {
                    const urlRegex = /(https?:\/\/[^\s]+)/g;
                    const segments = line.split(urlRegex);
                    const renderedSegments = segments.map((segment, segmentIndex) => {
                      if (urlRegex.test(segment)) {
                        return (
                          <Link
                            className='link-neutral link'
                            target='_blank'
                            href={segment}
                            key={segmentIndex}
                          >
                            {segment}
                          </Link>
                        );
                      } else {
                        return segment;
                      }
                    });
                    return (
                      <div
                        className='chat-bubble chat-bubble-info mx-2 my-2 w-full opacity-90'
                        key={index}
                      >
                        {renderedSegments}
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
