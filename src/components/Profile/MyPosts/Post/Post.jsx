import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    
    <div className={classes.item}>
      <img src='https://yt3.ggpht.com/a/AATXAJxJITpEKSiDUS0TY8lFnd4TJfvoG561QqQTWQ=s900-c-k-c0xffffffff-no-rj-mo' />
      {props.message}         
      <div>
        <span>Лайк</span>
      </div>

    </div> 
   
             
  )
}

export default Post



