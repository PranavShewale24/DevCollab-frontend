import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import SignUp from './pages/signup'
 import Login from './pages/login'
import Navbar from './pages/navbar'
import NewPost from './pages/newpost'
import ProjectDetail from './pages/projectdetails'
import Profile from './pages/myprofile'
import RequestsAndInvitations from './pages/request_invitation'
import Projects from './pages/myprojects'
//import ChatBox from './pages/chatbox'
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
         <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/request_invitation" element={<RequestsAndInvitations />} />
        <Route path="/myprojects" element={<Projects />} />
        {/* <Route path="/chatbox/:id" element={<ChatBox />} /> */}
      </Routes>
    </div>
  )
}

export default App