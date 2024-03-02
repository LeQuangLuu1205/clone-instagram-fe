import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./CommentModal.css";

const CommentModal = ({
    onClose,
    isOpen,
    isSaved,
    isPostLiked,
    handleSavePost,
    handlePostLike
}) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[80vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img
                                    className='max-h-full w-full'
                                    src="https://img.freepik.com/free-photo/beautiful-summer-flowers-meadow-colorful-floral-background_90220-1510.jpg?t=st=1709367592~exp=1709371192~hmac=795ee81cd71e09c389dfac505c041bf63a43d6a09c814d73e4f7a462db858220&w=740"
                                    alt=""
                                />
                            </div>
                            <div className='w-[55%] pl-10 relative'>
                                <div className='flex justify-between items-center py-5 '>
                                    <div className='flex items-center'>
                                        <div>
                                            <img
                                                className='w-9 h-9 rounded-full'
                                                src="https://st4.depositphotos.com/14883968/21324/i/450/depositphotos_213242568-stock-photo-wooden-houses-green-valley-mountain.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className='ml-2'>
                                            <p>username</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>
                                <hr />
                                <div className='comment'>
                                    {[1, 1,1].map(() => <CommentCard />)}
                                </div>
                                <div className='absolute bottom-0 w-[90%]'>
                                    <div className='flex justify-between w-full py-4'>
                                        <div className='flex items-center space-x-2'>
                                            {isPostLiked ? (
                                                <AiFillHeart onClick={handlePostLike} className='text-2xl hover:opacity-50 cursor-pointer text-red-600' />
                                            ) : (
                                                <AiOutlineHeart onClick={handlePostLike} className='text-2xl hover:opacity-50 cursor-pointer' />
                                            )}
                                            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
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
                                        <p className='opacity-50 py-2 cursor-pointer'>1 day ago</p>
                                    </div>
                                    <div className='border border-t w-full'>
                                        <div className='flex px-5 items-center w-full'>
                                            <BsEmojiSmile />
                                            <input className='commentInput w-full' type="text" placeholder='Add a comment...' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal