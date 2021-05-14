import React from 'react';
// Importing the Context Provider & Home Component
import MyContextProvider from './context/MyContext';
import Home from './components/Home'
import Header from './components/header/Header'

function App() {
  return (
      <MyContextProvider>
          <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <Header style={{ flexShrink: 1, flexGrow: 1, flexBasis: 0, overflowY: "auto" , flexDirection:"row"}}/>
            <Home style={{ flexShrink: 1, flexGrow: 1, flexBasis: 0, overflowY: "auto" }}/>
              <div>
                  <span>Hallo</span>
              </div>
          </div>
      </MyContextProvider>
  );
}

export default App;