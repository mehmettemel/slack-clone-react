import React, { useState, useEffect } from 'react'
import '../assets/styles/main.scss'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import db from '../firebase'
import Message from './Message'

const Chat = () => {
  let { roomId } = useParams()
  const [roomDetails, setRoomDetails] = useState(null)
  const [roomMessages, setRoomMessages] = useState([])
  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
    }

    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      )
  }, [roomId])

  // console.log(roomDetails)
  // console.log(roomMessages)

  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__header--left'>
          <h4 className='chat__header--channel'>
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className='chat__header--right'>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className='chat__messages'>
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>

      {/* http://localhost:3001/room/temel */}
      {/* <h2>You re in the {roomId} room</h2> */}
    </div>
  )
}

export default Chat
