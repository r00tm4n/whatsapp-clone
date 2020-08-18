import React, {useState, useEffect} from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  const addNewChat = () => {
    const rooName = prompt("Please enter a new name for the chat");

    if (rooName) {

    }
  };

  return !addNewChat ? (

    <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/human/${seed}.svg`}/>
        <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>last message</p>
        </div>
    </div>
  ): (
    <div className="">

    </div>

  );
}


export default SidebarChat;