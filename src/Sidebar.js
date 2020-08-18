import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core"; 
import { MoreVertIcon } from "@material-ui/core";
import { ChatIcon } from "@material-ui/core";
import { SearchOutlinedIcon } from "@material-ui/icons";

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
      <p> ma tete </p>
        </div>
      </div>
    <div className="sidebar_search">
    <SearchOutlinedIcon />
      <div className="sidebar_searchContainer">
      </div>
    </div>

    </div>
  );
}

export default Sidebar;