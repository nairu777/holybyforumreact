import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Importing the Context Provider & page Components
import MyContextProvider from './context/MyContext';
import Home from './components/Home';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

function App() {
  return (
      <Router>
      <MyContextProvider>
          <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <Header style={{display: "inline-block"}}/>
            <Route exact path="/" component={Home} style={{ flexShrink: 1, flexGrow: 1, flexBasis: 0, overflowY: "auto" }}/>
              <Route exact path = "/profile" component ={Profile}/>
              <div>
                  <span>Hallo</span>
              </div>
          </div>
      </MyContextProvider>
      </Router>
  );
}

export default App;