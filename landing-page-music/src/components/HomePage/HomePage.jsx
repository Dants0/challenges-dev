import React from 'react'
import './homepage.css'

import { MagnifyingGlass, Wrench } from 'phosphor-react'


import Profile from '../../assets/img/profile.jpg'
import Track_2 from '../../assets/img/track2.jpg'
import Track_3 from '../../assets/img/track3.jpg'


const HomePage = () => {
  return (
    <div className="container_home">
      <div className="left_content">
        <div className="box_content_profile">
          <img src={Profile} alt="" className="profile" />
          <div className="profile_status">
            <h1>Dany Schudler</h1>
            <a href="#" className="profile_edit">Edit profile <Wrench size={24} weight="light" /></a>
          </div>
        </div>
        <div className="box_content_nav">
          <div className="primary_content_nav">
            <span>Overview</span>
            <span>News</span>
            <span>Playlists</span>
            <span>Discover</span>
          </div>
          <div className="second_content_nav">
            <span>Dashboard</span>
            <span>Messages</span>
            <span>Notifications</span>
            <span>Account</span>
          </div>
        </div>
      </div>
      <div className="right_content">
        <div className="header_nav">
          <MagnifyingGlass size={24} weight="light" /> <input type="search" placeholder="Search artists, playlist or tracks" className="search_input"/>
        </div>
        <div className="container_main_home">
          <h2>Featured Playlists</h2>
          <div className="music_box">
            <div className="box_1">
              <img src={Track_2} alt="" />
              <h3>Mike Vella</h3>
              <span>12 tracks</span>
            </div>
            <div className="box_2">
              <img src={Track_3} alt="" />
              <h3>The best singles s2</h3>
              <span>126 tracks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage