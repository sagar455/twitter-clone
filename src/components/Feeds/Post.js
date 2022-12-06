import React from 'react'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import "./Post.css"

function Post({displayName,username,verified,text,image,avatar}) {
  return (
    <div className='post'>
      <div className="post_avatar">
        <Avatar src="https://images.unsplash.com/photo-1517437478710-db9151f07d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"></Avatar>
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>Sujoy{" "}
            <span className='post_headerSpecial'>
              <VerifiedIcon className='post_badge' />@sujoy2000
            </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>A camera is just a medium to capture what you have in your vision, and vision is something that cannot be bought.</p>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1596265371388-43edbaadab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
        </div>
      </div>
    </div>

    
     
  )
}

export default Post