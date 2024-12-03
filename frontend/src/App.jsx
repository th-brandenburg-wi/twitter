import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/auth/login/LoginPage'
import SignUpPage from './pages/auth/signup/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default App
