import React from 'react'
import { TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed';
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
      </div>


    </div>
  )
}

export default Widgets