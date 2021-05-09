import React from 'react';
// Importing the Context Provider & Home Component
import MyContextProvider from './context/MyContext';
import Home from './components/Home'
import Header from './components/header/Header'

function App() {
  return (
      <MyContextProvider>
          <Header/>
            <Home/>
      </MyContextProvider>
  );
}

export default App;