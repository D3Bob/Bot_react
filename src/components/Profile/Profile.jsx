import React from 'react'
import classes from './Profile.module.css'
import MyPost from './MyPosts/MyPost'

const Profile = () => {
  return (
     <div>
            <img style={{width: 500}} src="https://dok7xy59qfw9h.cloudfront.net/8e4/dc5ad/b28f/4ea7/b69d/7be172ac5974/large/341596.jpg"></img>
            <MyPost></MyPost>
     </div>
  )
}

export default Profile



