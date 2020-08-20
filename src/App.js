import React from "react";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./style.css";


 function App() {
  return (
    <div className="app">                                     
      
      <div className="app_body">
          <Router>
              <Switch>
                <Sidebar />
                  <Route path="/rooms/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <Chat />
                  </Route>
              </Switch>
          </Router>
      </div>
      
    </div>
  );
}


export default App;