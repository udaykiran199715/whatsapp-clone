import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Chat.css'
function Chat() {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at..</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Uday</span>
  This is a message
  <span className="chat__timestamp">
            {new Date().toUTCString()}

          </span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Uday</span>
  This is a message
  <span className="chat__timestamp">
            {new Date().toUTCString()}

          </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Uday</span>
  This is a message
  <span className="chat__timestamp">
            {new Date().toUTCString()}

          </span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Uday</span>
  This is a message
  <span className="chat__timestamp">
            {new Date().toUTCString()}

          </span>
        </p>

      </div>
      <div className="chat__footer">
<InsertEmoticon />
<form>
  <input 
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Type a message"
  type="text"/>
  <button onClick={sendMessage}
  type="submit">
Send a message
  </button>
</form>
      </div>
    </div>
  )
}

export default Chat
