import React from 'react'
import './Sidenav.css'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

const Sidenav = () => {
  return (
    <div className='sidenav'>
      <img className='sidenav_logo'
      src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
      alt=''
      />
      <div className='sidenav_buttons'>
        <button className='sidenav_button'>
          {/* Icon */}
          <HomeIcon/>
          <span>Home</span>
        </button>

        <button className='sidenav_button'>
          {/* Icon */}
          <SearchIcon/>
          <span>Search</span>
        </button>

        <button className='sidenav_button'>
          {/* Icon */}
          <ExploreIcon/>
          <span>Explore</span>
        </button>

        <button className='sidenav_button'>
          {/* Icon */}
          <SlideshowIcon/>
          <span>Reels</span>
        </button>

        <button className='sidenav_button'>
          {/* Icon */}
          <ChatIcon/>
          <span>Messages</span>
        </button>

        <button className='sidenav_button'>
          {/* Icon */}
          <FavoriteBorderIcon/>
          <span>Notification</span>
        </button>

        <button className='sidenav_button'>
          {/* Icon */}
          <AddCircleOutlineIcon/>
          <span>Create</span>
        </button>
      </div>
      <div className='sidenav_more'>
        <button className='sidenav_button'>
          <MenuIcon/>
          <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default Sidenav