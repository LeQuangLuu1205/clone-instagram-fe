import React from 'react'
import StoryView from '../../Components/StoryComponent/StoryView'

const Story = () => {
    const story = [
        {
            image: "https://images.pexels.com/photos/13008754/pexels-photo-13008754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            image: "https://images.pexels.com/photos/18938520/pexels-photo-18938520/free-photo-of-bi-n-b-u-tr-i-b-bi-n-cat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/20434822/pexels-photo-20434822/free-photo-of-l-nh-song-bang-tuy-t-phong-c-nh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/19992967/pexels-photo-19992967/free-photo-of-tuy-t-den-va-tr-ng-thanh-ph-chuy-n-bay.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/19987955/pexels-photo-19987955/free-photo-of-tuy-t-g-anh-sang-d-ng.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]
  return (
    <div>
        <StoryView stories={story}/>
    </div>
  )
}

export default Story