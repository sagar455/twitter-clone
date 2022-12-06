import React, {useEffect, useState} from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import FlipMove from 'react-flip-move'
import Post from './Post'
import db from './firebase'
import { collection, getDocs } from 'firebase/firestore'


function Feed() {
  const [posts,setPosts] = useState([]);
  const [tweetMessage,setTweetMessage] = useState("");

  const getData = async()=>{
    const temp=[]
    const querySnapshot = await getDocs(collection(db, "post"))

    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    setPosts(temp)
  }

  useEffect(() => {
    getData()
  },[])

  useEffect(()=>{
    if(tweetMessage=== "")
    {
      getData()
    }

  },[tweetMessage])

  return (
    <div className='feed'>
      <div className="feed_header">
      <h2>Home</h2>
      </div>
      <TweetBox tweetMessage={tweetMessage} setTweetMessage={setTweetMessage}/>
    <FlipMove>
      {posts.map(post => (
        <Post
        key={post.text}
        displayName= {post.displayName}
        username= {post.username}
        verified= {post.verified}
        text= {post.text}
        avatar = {post.avatar}
        image={post.image}
      />
      ))}
      </FlipMove>
    
    </div>
  )
}

export default Feed