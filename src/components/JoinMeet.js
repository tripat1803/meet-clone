import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { BsMic, BsFillMicMuteFill } from 'react-icons/bs';
import { BiVideo, BiVideoOff } from "react-icons/bi";
import { MdOutlineDevices, MdPresentToAll } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function JoinMeet({ media, setMedia, videoRef }) {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center px-8 sm:px-16'>
            <Navbar />
            <div className='flex-1 w-full max-w-screen-2xl flex gap-12'>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <div className='bg-black relative rounded-xl overflow-hidden'>
                        <div className='absolute top-0 left-0 w-full h-[60px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_0,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0)_100%)]'></div>
                        <div className='absolute bottom-0 left-0 w-full h-[60px] bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0)_100%)]'></div>
                        <div className='w-[700px] h-[400px]'>
                            {
                                media.video ? <video ref={videoRef} autoPlay className='w-full h-full object-cover' /> :
                                    <div className='w-fulll h-full flex justify-center items-center bg-[rgb(32,33,36)]'>
                                        <h2 className='text-white text-2xl'>Camera is off</h2>
                                    </div>
                            }
                        </div>
                        <div className='absolute bottom-4 left-[50%] translate-x-[-50%] flex gap-6 items-center'>
                            <button onClick={() => {
                                setMedia({
                                    ...media,
                                    audio: !media.audio
                                })
                            }} style={media.audio ? {
                                backgroundColor: 'transparent',
                                border: "1px solid white"
                            } : {
                                backgroundColor: '#CE3B2F',
                                border: "1px solid #CE3B2F"
                            }} className='text-white p-4 text-xl rounded-full flex justify-center items-center'>
                                {(media.audio) ? <BsMic size={20} /> : <BsFillMicMuteFill size={20} />}
                            </button>
                            <button onClick={() => {
                                setMedia({
                                    ...media,
                                    video: !media.video
                                })
                            }} style={media.video ? {
                                backgroundColor: 'transparent',
                                border: "1px solid white"
                            } : {
                                backgroundColor: '#CE3B2F',
                                border: "1px solid #CE3B2F"
                            }} className='text-white p-4 text-xl rounded-full flex justify-center items-center'>
                                {(media.video) ? <BiVideo size={20} /> : <BiVideoOff size={20} />}
                            </button>
                        </div>
                        <button className='absolute top-3 right-4 hover:bg-[rgba(255,255,255,0.2)] text-white p-4 text-xl rounded-full flex justify-center items-center'>
                            <BsThreeDotsVertical size={20} />
                        </button>
                    </div>
                    <div className='h-[80px]'></div>
                </div>
                <div className='w-[33%] flex justify-center items-center'>
                    <div className='flex flex-col items-center gap-8'>
                        <h3 className='text-3xl'>Ready to join?</h3>
                        <p className='-mb-2 font-medium'>No one else is here</p>
                        <div className='flex gap-4 items-center'>
                            <button className='flex gap-2 items-center text-base bg-[#1A73E8] text-white px-6 py-3 rounded-full'>
                                <span className='whitespace-nowrap'>Join Now</span>
                            </button>
                            <button className='flex gap-2 items-center text-[#1A73E8] text-base px-6 py-3 rounded-full drop-shadow-md bg-white'>
                                <MdPresentToAll size={20} />
                                <span className='whitespace-nowrap'>Present</span>
                            </button>
                        </div>
                        <p className='font-medium'>Other joining options</p>
                        <button className='-mt-2 font-medium flex gap-2 items-center text-sm text-[#1A73E8]'>
                            <MdOutlineDevices size={20} />
                            <p className=''>Use Companion mode</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}