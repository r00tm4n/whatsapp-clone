import React from "react";

import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js"

import "./style.css";


 function App() {
  return (
    <div className="app">
      
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}


export default App;