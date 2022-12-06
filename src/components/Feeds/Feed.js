import React, {useEffect, useState} from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import { collection, getDocs } from 'firebase/firestore'


function Feed() {
  const [posts,setPosts] = useState([]);
  const postData = async()=>{
    const temp=[]
    const querySnapshot = await getDocs(collection(db, "post"))

    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    setPosts(temp)
  }

  useEffect(() => {
    postData()
  },[])

  return (
    <div className='feed'>
      <div className="feed_header">
      <h2>Home</h2>
      </div>
      <TweetBox/>

      {posts.map(post => (
        <Post
        displayName= {post.displayName}
        username= {post.username}
        verified= {post.verified}
        text= {post.text}
        avatar = {post.avatar}
        image={post.image}
      />
      ))}
    
    </div>
  )
}

export default Feed