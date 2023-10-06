import React from 'react';
import { BiVideo, BiVideoOff } from 'react-icons/bi';
import { BsMic, BsFillMicMuteFill } from 'react-icons/bs';
import { MdCallEnd, MdInfoOutline, MdOutlinePeople, MdPresentToAll } from 'react-icons/md';

export default function Room({ media, setMedia, id }) {
    return (
        <div className='bg-[rgb(32,33,36)] w-full min-h-screen relative flex justify-center items-center'>
            <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                <img className='w-full h-full' src='https://lh3.googleusercontent.com/-_BOlPgMyk_Q/AAAAAAAAAAI/AAAAAAAAAAA/AFsW0b7IOGowhrRAsA1WyWYpRjT2kVeAsQ/photo.jpg?sz=46' />
            </div>
            <div className='absolute bottom-6 left-6 text-white flex items-center text-base py-2 font-medium'>
                <p className='pr-4 border-r border-white'>{(String(new Date().getHours()).length < 2) ? ("0" + new Date().getHours()) : new Date().getHours()}:{(String(new Date().getMinutes()).length < 2) ? ("0" + new Date().getMinutes()) : new Date().getMinutes()} {(new Date().getHours > 12) ? "AM" : "PM"}</p>
                <p className='pl-4'>{id}</p>
            </div>
            <div className='absolute bottom-6 left-[50%] translate-x-[-50%] flex gap-3 items-center'>
                <button onClick={() => {
                    setMedia({
                        ...media,
                        audio: !media.audio
                    })
                }} style={media.audio ? {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                } : {
                    backgroundColor: '#CE3B2F',
                }} className='text-white p-3 text-xl rounded-full flex justify-center items-center'>
                    {(media.audio) ? <BsMic size={20} /> : <BsFillMicMuteFill size={20} />}
                </button>
                <button onClick={() => {
                    setMedia({
                        ...media,
                        video: !media.video
                    })
                }} style={media.video ? {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                } : {
                    backgroundColor: '#CE3B2F',
                }} className='text-white p-3 text-xl rounded-full flex justify-center items-center'>
                    {(media.video) ? <BiVideo size={20} /> : <BiVideoOff size={20} />}
                </button>
                <button style={{
                    backgroundColor: 'rgba(255,255,255,0.2)'
                }} className='text-white p-3 text-xl rounded-full flex justify-center items-center'>
                    <MdPresentToAll size={20} />
                </button>
                <button style={{
                    backgroundColor: '#CE3B2F'
                }} className='text-white p-3 text-xl w-[55px] rounded-full flex justify-center items-center'>
                    <MdCallEnd size={20} />
                </button>
            </div>
            <div className='absolute bottom-6 right-6 flex items-center'>
                <button className='text-white p-3 text-xl rounded-full hover:bg-[rgba(255,255,255,0.2)] flex justify-center items-center'>
                    <MdInfoOutline size={22} />
                </button>
                <button className='text-white p-3 text-xl rounded-full hover:bg-[rgba(255,255,255,0.2)] flex justify-center items-center'>
                    <MdOutlinePeople size={22} />
                </button>
            </div>
        </div>
    )
}
