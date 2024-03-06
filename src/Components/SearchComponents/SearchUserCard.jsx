import React from 'react'

const SearchUserCard = () => {
  return (
    <div className='py-2 cursor-pointer flex items-center'>
        <img 
        className='w-10 h-10 rounded-full'
        src="https://images.pexels.com/photos/20248687/pexels-photo-20248687/free-photo-of-g-chim-la-cay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />

        <div className='ml-3'>
            <p>Fullname</p>
            <p className='opacity-70'>username</p>
        </div>
    </div>
  )
}

export default SearchUserCard