import React, {useState } from 'react'
import  "./TweetBox.css"
import { Avatar, Button } from '@mui/material'
import db from './firebase'
import { collection, addDoc} from 'firebase/firestore';



function TweetBox(props) {
  const [tweetImage,setTweetImage] = useState("");
const {tweetMessage,setTweetMessage} = props
    const sendTweet = async(e) => {
      e.preventDefault();

      await addDoc(collection(db,"post"),{
        displayName: "Soujoy",
        username:"Soujoy223",
        verified: true,
        text: tweetMessage,
        avatar: "https://images.unsplash.com/photo-1517437478710-db9151f07d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80",
        image: tweetImage
      });

   

      setTweetMessage("");
      setTweetImage("");
    }
     
  

  return (
    <div className='tweetBox'>
        <form> 
            <div className="tweetBox_input">
                <Avatar src="https://images.unsplash.com/photo-1517437478710-db9151f07d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"></Avatar>
                <input onChange={(e)=> setTweetMessage(e.target.value)} value={tweetMessage} type="text" placeholder="Whats's happening? "  />
            </div>
                <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox_imageInput" type="text" placeholder="Optional: Enter image URL"  />
            <Button onClick={sendTweet} type="submit"  className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox