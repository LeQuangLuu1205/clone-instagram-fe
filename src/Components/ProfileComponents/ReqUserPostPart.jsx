import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoLine } from 'react-icons/ri'
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from './ReqUserPostCard';


const ReqUserPostPart = () => {
    const [activeTab,setActiveTab] = useState();
    const tabs = [
        {
            tab: "Post",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: ""
        },
        {
            tab: "Reels",
            icon: <RiVideoLine></RiVideoLine>,
        },
        {
            tab: "Saved",
            icon: <BiBookmark />,
        },
        {
            tab: "Tagged",
            icon: <AiOutlineUser></AiOutlineUser>,
        },
    ]
    return (
        <div>
        <div className='flex space-x-14 border-t relative'>
            {tabs.map((item) =>
                <div className={`${activeTab===item.tab?"border-t border-black": "opacity-60"} flex items-center cursor-pointer py-2 text-sm`}
                onClick={()=>setActiveTab(item.tab)}>
                    <div>{item.icon}</div>
                    <div className='ml-1'>{item.tab}</div>
                </div>
            )}
        </div>
        <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((item) => <ReqUserPostCard/>)}
            </div>
        </div>
        </div>
    )
}

export default ReqUserPostPart