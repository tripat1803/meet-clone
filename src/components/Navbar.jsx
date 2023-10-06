import React from 'react'

export default function Navbar() {
    return (
        <div className='w-full flex justify-center py-6'>
            <div className='w-full max-w-screen-2xl flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img className='w-[140px]' src='https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png' alt='Google Meet' />
                    <p className='text-2xl font-semibold text-[#5f6368] -mt-1'>Meet</p>
                </div>
                {/* <div></div> */}
            </div>
        </div>
    )
}
