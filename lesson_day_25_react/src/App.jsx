import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import MainContent from './MainConten'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
