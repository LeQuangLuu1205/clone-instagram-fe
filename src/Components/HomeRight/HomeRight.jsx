import React from 'react'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div  className='flex items-center'>
            <div>
              <img
                className='w-12 h-12 rounded-full'
                src="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg?w=826&t=st=1709394059~exp=1709394659~hmac=6c923deb3027cb1bf3131d4f8e0113e902b6848cbb8680362217ed4d4d2ff874"
                alt=""
              />
            </div>
            <div className='ml-3'>
              <p>Fullname</p>
              <p className='opacity-70'>username</p>
            </div>
          </div>
          <div>
            <p className='text-blue-700 font-semibold'>swith</p>
          </div>
        </div>
        <div className='space-y-5 mt-10'>
            {[1,1,1,1,1,1].map(()=><SuggestionCard/>)}
          </div>
      </div>
    </div>
  )
}

export default HomeRight