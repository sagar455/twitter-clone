import React from 'react'
import  "./TweetBox.css"
import { Avatar, Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox_input">
                <Avatar src="https://images.unsplash.com/photo-1517437478710-db9151f07d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"></Avatar>
                <input type="text" placeholder="Whats's happening? "  />
            </div>
                <input className="tweetBox_imageInput" type="text" placeholder="Optional: Enter image URL"  />
            <Button className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox