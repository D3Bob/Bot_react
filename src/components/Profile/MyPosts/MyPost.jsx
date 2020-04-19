import React from 'react'
import classes from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {
  return (
    
    
    <div>
          <div> MyPosts </div>
        
        <div>
              <Post message='пост 1'/>
              <Post message='пост 2'/>
        </div>  

    </div>
   
  )
}

export default MyPost



