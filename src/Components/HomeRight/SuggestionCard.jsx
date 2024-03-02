import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <img 
            className='w-9 h-9 rounded-full'
            src="https://hips.hearstapps.com/hmg-prod/images/types-of-flowers-for-garden-astrantia-1674846661.jpeg?crop=1xw:1xh;center,top&resize=980:*" 
            alt="" 
            />
            <div className='ml-2'>
                <p className='text-sm font-semibold'>username</p>
                <p className='text-sm font-semibold opacity-70'>Follows you</p>
            </div>
        </div>
        <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggestionCard