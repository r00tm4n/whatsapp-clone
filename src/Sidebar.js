import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import  IconButton from "@material-ui/icons/IconButton"; 
import DonutLargeIcon  from "@material-ui/icons/DonutLargeIcon"; 
import  MoreVertIcon from "@material-ui/icons/MoreVertIcon";
import  ChatIcon from "@material-ui/icons/ChatIcon";
import  SearchOutlinedIcon from "@material-ui/icons/SearchOutlinedIcon";

import "./Sidebar.css";

function Sidebar(){

  //const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   db.collection("room").onSnapshot((snapshot) => (

  //   )))
  // });
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar />
        
        <div className="sidebar__headerRight">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
          <p> ma tete </p>
        </div>
      </div>
    <div className="sidebar_search">
   
      <div className="sidebar_searchContainer">
      </div>
    </div>

    <div className="sidebar_chats">
    
    </div>

    </div>
  );
}

export default Sidebar;