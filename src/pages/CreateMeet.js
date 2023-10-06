import React from 'react'
import Navbar from '../components/Navbar';
import { MdKeyboard, MdOutlineVideoCall } from "react-icons/md";

export default function CreateMeet() {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center px-8 sm:px-16'>
            <Navbar />
            <div className='flex-1 w-full max-w-screen-2xl flex gap-12'>
                <div className='flex-1 flex flex-col justify-center gap-[72px]'>
                    <div className='flex flex-col gap-6'>
                        <div className='text-5xl'>
                            <h1>Premium video meetings.</h1>
                            <h1>Now free for everyobe.</h1>
                        </div>
                        <p className='text-xl text-[rgb(95,99,104)]'>We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <button className='flex gap-2 items-center text-lg bg-[#1A73E8] text-white px-2 py-2.5 rounded-md'>
                            <MdOutlineVideoCall size={30}/>
                            <span className='whitespace-nowrap'>New Meeting</span>
                        </button>
                        <div className='flex gap-2 items-center text-lg px-2 rounded-md border border-[rgb(95,99,104)]'>
                            <MdKeyboard className='text-[rgb(95,99,104)]' size={30}/>
                            <input type="text" placeholder='Enter code or link' className='py-2.5 px-2 outline-none text-[rgb(95,99,104)] placeholder:text-[rgb(95,99,104)]' />
                        </div>
                        <button className='flex gap-2 items-center text-lg bg-[#1A73E8] text-white px-3 py-2.5 rounded-md'>
                            Join
                        </button>
                    </div>
                    <hr className='bg-[rgb(95,99,104)] -mt-8'/>
                    <p className='text-lg text-[rgb(95,99,104)] -mt-10'><a href='/' className='hover:underline text-[#1A73E8]'>Learn more</a> about Google Meet</p>
                </div>
                <div className='flex-1'></div>
            </div>
        </div>
    );
}
