import './App.css'
import HeaderLine from './components/HeaderLine'
import ProfileInfo from './components/ProfileInfo'
import Image from './components/Image'


export default function App() {
  return(
    <div class='profile-card'>
      <Image />
      <HeaderLine />
      <ProfileInfo />
    </div>
  );
}
