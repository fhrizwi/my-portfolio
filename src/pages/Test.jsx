import React from 'react'
import Button from '../components/ui/Button'

export default function Test() {
    return (
        <div className='my-20 p-8 bg-gray-100'>
            <div className='w-[300px] h-[350px] bg-white flex flex-col rounded-xl overflow-hidden '>
                <img className='h-48 bg-cover' src="https://cdn.dribbble.com/userupload/10751900/file/original-d142d5fadeacca4a4805f3048e7ce34d.jpg" alt="" />
                <div className='px-4'>
                    <h2 className='text-xl py-2 font-semibold'>Project Name Here</h2>
                    <p className='text-gray-700 text-sm mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium.</p>
                    <Button ButtonName="View Project" buttonColor="blue" />
                </div>
            </div>
        </div>
    )
}
