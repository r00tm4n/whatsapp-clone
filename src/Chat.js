import React, {useState, useEffect} from "react";
import {Avatar,IconButton} from "@material-ui/core";
import DonutLargeIcon  from "@material-ui/icons/DonutLarge"; 
import  MoreVertIcon from "@material-ui/icons/MoreVert";
import  ChatIcon from "@material-ui/icons/Chat";
import  SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

 /*{`chat_message ${true && "chat__receiver"}`}*/

import "./Chat.css"

function Chat() {
  const [seed, setSeed] = useState("");
  const [input,setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed ", input);
    setInput("");
  }

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
        <div className="chat__header">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at ...</p>
          </div>

          <div className="chat__headerRight">
              <IconButton>
                <SearchOutlined />
              </IconButton>

              <IconButton>
                <AttachFileIcon />
              </IconButton>

              <IconButton> 
                <MoreVertIcon />
              </IconButton>
          </div >
        </div>
    
    
    <div className="chat__body">
   
      <p className={`chat_message ${true && "chat__receiver"}`}>
          <span className="chat__name">Neneno</span>
          Hey Guys
          <span className="chat_timestamp">10:00pm</span>
       </p>

      
        
    </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a new message" type="text" />
              <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;