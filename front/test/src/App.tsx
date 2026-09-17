import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Signin from './pages/Signin'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProtectedRote from './component/ProtectedRote/ProtectedRote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/signin' element={<ProtectedRote isAuthRequired={false}><Signin/></ProtectedRote>}/>
      <Route path='/login' element={<ProtectedRote isAuthRequired={false}><Login/></ProtectedRote>}/>
      <Route path='/profile' element={<ProtectedRote><Profile/></ProtectedRote>}/>
      <Route path='*' element={"404 Not Found"}/>
    </Routes>
    </>
  )
}

export default App
