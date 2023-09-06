'use client';
import { Faq } from '@/types/Faq';
import React, { useState, useEffect, useRef } from 'react';

type props = {
    faq: Faq;
};

export default function FaqCard({ faq }: props) {
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
        <div className="lg:w-3/4 mx-auto">
            <div
                className="question-and-answer select-none cursor-pointer border border-redprimary mx-8 my-3 px-6 py-4 rounded-lg text-sm group"
                onClick={toggleAnswerVisibility}
            >
                <div className="question">
                    <div className="flex justify-between">
                        <div className="text-redprimary font-semibold">
                            {faq.question}
                        </div>
                        <div>
                            <svg
                                fill='currentColor'
                                className={`question-chevron group-hover:bg-gray-500 h-5 block text-primary bg-gray-400 rounded-full p-1 ${isAnswerVisible ? 'rotate-180' : ''}`}
                                viewBox="0 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g stroke="currentColor" stroke-width="1" fill='currentColor' fill-rule="evenodd">
                                    <g>
                                        <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                {faq.answer && (
                    <div className={`answer ${isAnswerVisible ? 'block' : 'hidden'} mt-2 leading-snug text-primary`}>
                        {faq.answer}
                    </div>
                )}
                {faq.gif && (
                    <div className={`answer ${isAnswerVisible ? 'block' : 'hidden'} mt-2 leading-snug text-primary`}>
                        <video
                            loop
                            autoPlay
                            src={`/gifs/${faq.gif}`}
                            ref={videoRef} // Set the ref to the video element
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
