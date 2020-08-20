import React, {useState} from "react";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./Login.js";
import "./style.css";


 function App() {
   const [user,setUser] = useState(null);
  return (
    <div className="app">                                     
      {!user ? (
        <Login />
        ):(
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
        )}
      
      
    </div>
  );
}


export default App;