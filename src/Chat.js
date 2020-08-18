import React from "react";
import "./Chat.css"

function Chat() {
  return (
    <div className="chat">
        <div className="chat__header">
          <Avatar />
          <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at ...</p>
          </div>
        </div>
    <div className="chat__headerRight">
        
    </div >
    
    <div className="chat__body">
      <p className={`chat_message ${true && "chat__receiver"}`}> </p>

      <span className="chat__name"></span>
        
    </div>
    </div>
  );
}

export default Chat;