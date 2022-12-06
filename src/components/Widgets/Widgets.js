import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className='widgets_searchIcon'/>
        <input type="text" placeholder='Search Twitter' />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="ANI"
            options={{height: 400}}/>

          <TwitterTweetEmbed
            tweetId={'1600093982931009536'}
          />
            <TwitterShareButton
    url={'https://www.youtube.com/watch?v=Ke90Tje7VS0'}
    options={{ text: '#reactjs is awesome', via: 'SagarKumar305' }}
  />

      </div>


    </div>
  )
}

export default Widgets