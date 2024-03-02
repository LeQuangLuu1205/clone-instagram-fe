import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

import './PostCard.css'
import CommentModal from '../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';


const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    };
    const handleSavePost = () => {
        setIsSaved(!isSaved);
    };
    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }
    const handleOpenCommentModal = () => {
        onOpen();
    }
    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img
                            className='h-12 w-12 rounded-full'
                            src='https://media.istockphoto.com/id/488152916/vi/anh/t%C3%A1o-ch%C3%ADn-%C4%91%E1%BB%8F-h%E1%BB%AFu-c%C6%A1-tr%C3%AAn-c%C3%A2y-%C4%83n-qu%E1%BA%A3-c%C3%B3-l%C3%A1.jpg?s=1024x1024&w=is&k=20&c=xUMEvTk_aZ3gKHUZ0rHt0XkqexnQK6iWpDzvOT8uk7Q='
                            alt=''
                        />
                        <div className='pl-2'>
                            <p className='font-semibold text-sm'>username</p>
                            <p className='font-thin text-sm text-left'>location</p>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick} />
                        <div onClick={handleClick} className='dropdown-content'>
                            {showDropDown && <p className='bg-black  text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <img
                        className='w-full'
                        src='https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland-1024x580.jpg'
                        alt=''
                    />
                </div>
                <div className='flex justify-between w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ? (
                            <AiFillHeart onClick={handlePostLike} className='text-2xl hover:opacity-50 cursor-pointer text-red-600' />
                        ) : (
                            <AiOutlineHeart onClick={handlePostLike} className='text-2xl hover:opacity-50 cursor-pointer' />
                        )}
                        <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                    </div>
                    <div>
                        {isSaved ? (
                            <BsBookmarkFill onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer' />
                        ) : (
                            <BsBookmark onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer' />
                        )}
                    </div>
                </div>
                <div className='w-full py-2 px-5'>
                    <p>10 likes</p>
                    <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
                </div>
                <div className='border border-t w-full'>
                    <div className='flex px-5 items-center w-full'>
                        <BsEmojiSmile />
                        <input className='commentInput' type="text" placeholder='Add a comment...' />
                    </div>
                </div>
            </div>
            <CommentModal
                onClose={onClose}
                isOpen={isOpen}
                isSaved={isSaved}
                isPostLiked={isPostLiked}
                handleSavePost={handleSavePost}
                handlePostLike={handlePostLike}
            />
        </div>
    )
}

export default PostCard