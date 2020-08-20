import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
// import  ButtonIcon from "@material-ui/icons/Button"; 
import DonutLargeIcon  from "@material-ui/icons/DonutLarge"; 
import  MoreVertIcon from "@material-ui/icons/MoreVert";
import  ChatIcon from "@material-ui/icons/Chat";
import  SearchOutlined from "@material-ui/icons/SearchOutlined";
import db from "./firebase.js"

import SidebarChat from "./SidebarChat.js";


import "./Sidebar.css";

function Sidebar(){

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => (
      setRooms(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }) ))
    ));
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar />
        
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton> 
            <MoreVertIcon />
          </IconButton>
          
        </div>
      </div>
    <div className="sidebar_search">
     
      <div className="sidebar_searchContainer">
         <SearchOutlined />
        <input placeholder="Fofo poe o texto aqui"/>
      </div>
    </div>

    <div className="sidebar_chats">
      <SidebarChat addNewChat /> 
      {rooms.map(room => (
        <SidebarChat key={room.id} name={room.date.name} />
      ))}    
    </div>

    </div>
  );
}

export default Sidebar;