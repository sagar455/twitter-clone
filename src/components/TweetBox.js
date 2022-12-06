import React from 'react'
import  "./TweetBox.css"
import { Avatar, Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox_input">
                <Avatar></Avatar>
                <input type="text" placeholder="Whats's happening? "  />
            </div>
                <input className="tweetBox_imageInput" type="text" placeholder="Optional: Enter image URL"  />
            <Button className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox