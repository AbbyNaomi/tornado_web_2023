import HomePage from "./components/HomePage"
import { Route, Routes } from "react-router-dom"
import MainContent from "./components/MainContent"
import Login from "./components/Login"
import Register from "./components/Register"
import RegisterPassword from "./components/RegisterPassword"
import Profile from "./components/Profile"

function App() {


  return (
    <div className="m-auto max-w-[1140px]">
      <Routes >
        <Route path="/" element={<HomePage />} >
          <Route path="/" element={<MainContent />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register_password" element={<RegisterPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>

  )
}

export default App
