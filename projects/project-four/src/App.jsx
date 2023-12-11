import HomePage from "./components/HomePage"
import { Route, Routes } from "react-router-dom"
import MainContent from "./components/MainContent"
import Login from "./components/Login"

function App() {


  return (
    <div className="m-auto max-w-[1140px]">
      <Routes >
        <Route path="/" element={<HomePage />} >
          <Route path="/" element={<MainContent />} />
          
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    
  )
}

export default App
