import React, {useState, useEffect} from "react";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import {Link} from "react-router-dom";
import "./SidebarChat.css";


function SidebarChat({id, name, addNewChat }) {

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const rooName = prompt("Please enter a new room name for the chat");

    if (rooName) {
          db.collection("rooms").add({
            name: roomName,
          });
    }
  };

  return !addNewChat ? (
    <link to={`/rooms/${id}`}>
      <div className="sidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <div className="sidebarChat_info">
            <h2>{name}</h2>
            <p>last message</p>
          </div>
      </div>
    </link>
  ): (
    
      <div onClick={createChat} className="siderbarChat">
        <h2>Add new chat</h2>
      </div>
    

  );
}


export default SidebarChat;