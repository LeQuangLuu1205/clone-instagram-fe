import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { FaPhotoVideo } from 'react-icons/fa'
import "./CreatePostModal.css"
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";

const CreatePostModal = (
    {onClose, isOpen}
) => {
    const [isDragLeave, setIsDragLeave] = useState();
    const [isDragOver, setIsDragOver] = useState();
    const [isFile, setIsFile] = useState();
    const [caption, setCaption] = useState("");
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.file[0];
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
            setIsFile(droppedFile);
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    }

    const handleDragLeave = () => {
        setIsDragLeave(false);
    }
    const handleOnchange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setIsFile(file);
        }
        else {
            setIsFile(null);
            alert("please select an image or video!")
        }
    }

    const  handleCaptionChange = (e) => {
        setCaption(e.target.value)
    }

    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-between py-1 px-10 items-center'>
                        <p>Create new post</p>
                        <Button className="" variant={"ghost"} size="sm" colorScheme={"blue"}>
                            Share
                        </Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div className='h-[70vh] justify-between pb-5 flex'>
                            <div className='w-[50%]'>
                                {!isFile && <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    className='drag-drop h-full pb-5'>
                                    <div>
                                        <FaPhotoVideo />
                                        <p>Drag Photos or video here</p>
                                        <label htmlFor='file-upload' className='custom-file-upload'>Select from computer</label>

                                        <input className="fileInput" type="file" id='file-upload' accept='image/*, video/*' onChange={handleOnchange} />
                                    </div>
                                </div>
                                }
                                {isFile && (<img className='max-h-full' src={URL.createObjectURL(isFile)} alt='' />)}


                            </div>
                            <div className='w-[1px] border-2 h-full'></div>
                            <div className='w-[50%]'>
                                <div className='flex items-center px-2'>
                                    <img
                                        className='w-7 h-7 rounded-full'
                                        src="https://img.freepik.com/free-photo/group-colorful-birds-are-flying-formation-with-one-being-flown-by-another_188544-8130.jpg?size=626&ext=jpg&ga=GA1.1.653569654.1709367595&semt=ais"
                                        alt="" />
                                    <p className='font-semibold ml-4'>username</p>
                                </div>
                                <div className='px-2'>
                                    <textarea 
                                    placeholder='Write a caption'
                                    className='captionInput' rows="8"
                                    name="caption"
                                    onChange={handleCaptionChange}></textarea>
                                </div>
                                <div className='flex justify-between px-2'>
                                <GrEmoji/>
                                <p>{caption?.length}/2,200</p>
                                </div>
                                <hr/>

                                <div className='p-2 flex justify-between'>
                                    <input className='locationInput' type="text" placeholder='locatin' name ="location" />
                                    <GoLocation/>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModal