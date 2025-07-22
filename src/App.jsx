import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import SignUp from './pages/signup'
 import Login from './pages/login'
import Navbar from './pages/navbar'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} /> 
      </Routes>
    </div>
  )
}

export default App