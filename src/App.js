import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Importing the Context Provider & page Components
import MyContextProvider from './context/MyContext';
import Home from './components/Home';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from "./components/footer/Footer";
import Reactions from "./components/Reactions/Reactions";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <MyContextProvider>
          <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <Header style={{display: "inline-block"}}/>
            <Route exact 
              path="/" 
              component={Home} 
              style={{ flexShrink: 1, flexGrow: 1, flexBasis: 0, overflowY: "auto" }}/>
              <Route exact 
                path="/profile" 
                component={Profile}
                style={{ flexShrink: 1, flexGrow: 1, flexBasis: 0, overflowY: "auto" }}/>
              <Route exact 
                path="/topicreactions" 
                component ={Reactions}
                style={{ flexShrink: 1, flexGrow: 1, flexBasis: 0, overflowY: "auto" }}/>
              <Footer/>
          </div>
      </MyContextProvider>
    </Router>
  );
}

export default App;