import React from 'react'
import "./Sugesstions.css"
import { Avatar } from '@mui/material'

const Sugesstions = () => {
  return (
    <div className='sugesstions'>
      <div className='sugesstions_title'>Sugesstions for you.</div>
      <div className='sugesstions_usernames'>

        <div className='sugesstion_username'>
            <div className='username_left'>
              <span className='avatar'>
                <Avatar>R</Avatar>
              </span>
              <div className='username_info'>
                <span className='username'>redian</span>
                <span className='urelation'>New to Instagram</span>
              </div>
            </div> 
            <button className='follow_button'> Follow</button>
        </div>

        <div className='sugesstion_username'>
            <div className='username_left'>
              <span className='avatar'>
                <Avatar>R</Avatar>
              </span>
              <div className='username_info'>
                <span className='username'>redian</span>
                <span className='urelation'>New to Instagram</span>
              </div>
            </div> 
            <button className='follow_button'> Follow</button>
        </div>

        <div className='sugesstion_username'>
            <div className='username_left'>
              <span className='avatar'>
                <Avatar>R</Avatar>
              </span>
              <div className='username_info'>
                <span className='username'>redian</span>
                <span className='urelation'>New to Instagram</span>
              </div>
            </div> 
            <button className='follow_button'> Follow</button>
        </div>

        <div className='sugesstion_username'>
            <div className='username_left'>
              <span className='avatar'>
                <Avatar>R</Avatar>
              </span>
              <div className='username_info'>
                <span className='username'>redian</span>
                <span className='urelation'>New to Instagram</span>
              </div>
            </div> 
            <button className='follow_button'> Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Sugesstions