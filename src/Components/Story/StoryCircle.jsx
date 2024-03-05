import React from 'react'
import {useNavigate} from 'react-router-dom'
const StoryCircle = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/story")
  }
  return (
    <div  className='cursor-pointer flex flex-col items-center' onClick={handleNavigate}>
        <img
        className='w-16 h-16 rounded-full'
        src='https://media.istockphoto.com/id/1171900830/vi/anh/c%C3%A2y-cam.jpg?s=1024x1024&w=is&k=20&c=6mlX3PSm0Msd23TygRZmdSNpU7Tqu2m5resUsrfjP-0='
        alt=''
        />
        <p>username</p>
    </div>
  )
}

export default StoryCircle