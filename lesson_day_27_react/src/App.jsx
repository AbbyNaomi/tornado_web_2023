import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderLine from './components/HeaderLine'
import ProfileInfo from './components/ProfileInfo'


export default function App() {
  return(
    <div class='profile-card'>
      <HeaderLine />
      <Image />
      <ProfileInfo />
    </div>
  )
}
