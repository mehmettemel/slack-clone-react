import React from 'react'
import '../assets/styles/main.scss'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar
          className='header__avatar'
          src={
            'https://images.unsplash.com/photo-1606225472150-0b700e620ef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          }
        />
        <AccessTimeIcon />
      </div>
      <div className='header__search'>
        <SearchIcon />
        <input type='text' placeholder='search' />
      </div>
      <div className='header__right'>
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header
