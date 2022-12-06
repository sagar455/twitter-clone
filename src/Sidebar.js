import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import  SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
        <TwitterIcon/>
        <SidebarOption Icon ={HomeIcon} text="Home"/>
        <SidebarOption Icon ={SearchIcon} text="Explore"/>
        <SidebarOption Icon ={NotificationsNoneIcon}text="Notification"/>
        <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
        <SidebarOption Icon={FeaturedPlayListIcon} text="List"/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>
        <button variant="outlined">Outlined</button>
    </div>
  
}

export default Sidebar