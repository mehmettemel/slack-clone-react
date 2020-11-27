import React from 'react'
import '../assets/styles/main.scss'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { useStateValue } from '../StateProvider'
function Header() {
  const [{ user }] = useStateValue()
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar
          className='header__avatar'
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <div>
          <ArrowBackIcon />
          <ArrowForwardIcon />
          <AccessTimeIcon />
        </div>
      </div>
      <div className='header__search'>
        <SearchIcon />
        <input type='text' placeholder='search in Meeting' />
      </div>
      <div className='header__right'>
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header
