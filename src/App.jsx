import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import SignUp from './pages/signup'
 import Login from './pages/login'
import Navbar from './pages/navbar'
import NewPost from './pages/newpost'
import ProjectDetail from './pages/projectdetails'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp />} />
         <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} /> 
        <Route path='/newpost' element={<NewPost  />} /> 
         <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App