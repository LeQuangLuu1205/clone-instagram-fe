import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
    const [isCommentLiked, setIsCommentLiked] = useState(false);
    const handleLikeComment = () => {
        setIsCommentLiked(!isCommentLiked);
    }

  return (
    <div>
        <div className='flex items-center justify-between w-full py-5'>
            <div className='flex items-center'>
                <img 
                className='w-9 h-9 rounded-full'
                src='https://www.thespruce.com/thmb/OlmzrKcnmpPFvG9N6jCCIA7zQ6Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Bloodorange-GettyImages-920040662-cb261e7bfdef42ddb2c0098311d25540.jpg' 
                alt="" 
                />
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>username</span>
                        <span className='ml-2'>nice horse</span>
                    </p>
                    <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                        <span>1 min ago</span>
                        <span>23 likes</span>
                    </div>
                </div>
            </div>

            {isCommentLiked?(
            <AiFillHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600'/>
            ):(
            <AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointe'/>
            )}
        </div>
    </div>
  )
}

export default CommentCard