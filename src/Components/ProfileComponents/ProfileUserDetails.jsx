import React from 'react'
import { TbCircleDashed } from "react-icons/tb";


const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-full'>
      <div className='flex items-center'>
        <div className='w-[18%]'>
          <img
            className="w-32 h-32 rounded-full"
            src='https://www.gardendesign.com/pictures/images/675x529Max/site_3/primrose-primula-colorful-walters-gardens_15205.jpg'
            alt=''
          />
        </div>
        <div className='space-y-5'>
          <div className='flex space-x-10 items-center'>
            <p>username</p>
            <button>Edit profile</button>
            <TbCircleDashed />
          </div>
          <div className='flex space-x-10'>
            <div>
              <span className='font-semibold mr-2'>10</span>
              <span>posts</span>
            </div>
            <div>
              <span className='font-semibold mr-2'>5</span>
              <span>followers</span>
            </div>
            <div>
              <span className='font-semibold mr-2'>7</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className='font-semibold text-left'>Fullname</p>
            <p className='font-thin text-sm'>Kameena Ladka🔥 📷Photo Graphy 🧡  💜Single 💯</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserDetails